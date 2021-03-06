import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useWindowWidth } from '@react-hook/window-size';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Result from '../components/result';
import Tabs from '../components/tabs';
import { toKatakana } from '../lib/to-katakana';
import { Devil } from '../models/devil/devil';
import { getAll } from '../models/devil/get-all';
import { raceMap } from '../models/race/race-map';

const IndexPage = (): JSX.Element => {
  const router = useRouter();
  const devils = getAll();
  const [focused, setFocused] = useState<Devil | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);
  const windowWidth = useWindowWidth();
  const resultEl = useRef<HTMLDivElement>(null);
  const isMounted = useRef<boolean>(false);

  const tabsRight = useMemo(() => {
    if (resultEl.current === null) {
      return 0;
    }
    const { right } = resultEl.current.getBoundingClientRect();
    return windowWidth - right - 40;
  }, [windowWidth]);

  const handleDevil = useCallback(async (devil: Devil | null) => {
    await router.push(`/#${devil !== null ? devil.no : ''}`);
    setFocused(devil);
  }, [router]);

  useEffect(() => {
    if (isMounted.current) {
      return ;
    }

    isMounted.current = true;

    if (window.location.hash === '') {
      return;
    }

    const no = parseInt(window.location.hash.slice(1), 10);
    if (isNaN(no)) {
      return;
    }

    const devil = devils.find(no);
    if (devil === null) {
      return;
    }

    setFocused(devil);
    setInputValue(devil.name);
  }, [devils]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>
          {focused ? `${raceMap.get(focused.race)} ${focused.name} - ` : ''}
          Dx2-f
        </title>
      </Head>
      <Container
        maxWidth="sm"
        style={{ height: '100vh', paddingTop: '24px', paddingBottom: '24px' }}
      >
        <Autocomplete
          value={focused}
          inputValue={inputValue}
          onInputChange={(_: unknown, value) => setInputValue(value)}
          fullWidth
          blurOnSelect
          disableListWrap
          noOptionsText="悪魔が見つかりません"
          options={[...devils.getSacrifices().orderByRaceAndGradeAsc()]}
          filterOptions={(options, state) => {
            if (state.inputValue === '') {
              return options;
            }
            const regex = new RegExp(`${toKatakana(state.inputValue)}`);
            return options.filter((option) =>
              regex.test(toKatakana(state.getOptionLabel(option))),
            );
          }}
          groupBy={(option) => raceMap.get(option.race) ?? option.race}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => <>{option.name}</>}
          renderInput={(params) => (
            <TextField {...params} label="作りたい悪魔を選択..." />
          )}
          onChange={(_: unknown, value: Devil | null) => handleDevil(value)}
        />
        <div
          ref={resultEl}
          style={{
            display: 'flex',
            position: 'relative',
            width: 'calc(100% - 40px)',
            marginTop: '20px',
            paddingBottom: '40px',
          }}
        >
          <Result
            devil={focused}
            activeTab={activeTab}
            onChange={handleDevil}
          />
        </div>
        <div
          style={{
            position: 'fixed',
            right: `${tabsRight}px`,
            bottom: '40px',
            width: '40px',
          }}
        >
          <Tabs disabled={!focused} onChange={(index) => setActiveTab(index)} />
        </div>
      </Container>
    </>
  );
};

export default IndexPage;
