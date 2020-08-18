import Head from 'next/head';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useWindowWidth } from '@react-hook/window-size';

import { toKatakana } from '../lib/to-katakana';
import { Devil } from '../models/devil/devil';
import { getAll } from '../models/devil/get-all';
import { raceMap } from '../models/race/race-map';
import Result from '../components/result';
import Tabs from '../components/tabs';

const IndexPage = () => {
  const devils = getAll();
  const [focused, setFocused] = useState<Devil | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabsRight, setTabsRight] = useState<number>(0);
  const windowWidth = useWindowWidth();
  const resultEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focused === null) {
      return;
    }
  }, [focused]);

  useEffect(() => {
    if (resultEl.current === null) {
      return;
    }
    const { right } = resultEl.current.getBoundingClientRect();
    setTabsRight(windowWidth - right - 40);
  }, [windowWidth]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <title>Dx2-f</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{ height: '100vh', paddingTop: '24px', paddingBottom: '24px' }}
        >
          <Autocomplete
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
            onChange={(_: unknown, value: Devil | null) => setFocused(value)}
          />
          <div
            ref={resultEl}
            style={{
              display: 'flex',
              position: 'relative',
              width: 'calc(100% - 40px)',
              marginTop: '20px',
              marginBottom: '40px',
            }}
          >
            <Result devil={focused} activeTab={activeTab} />
          </div>
          <div
            style={{
              position: 'fixed',
              right: `${tabsRight}px`,
              bottom: '40px',
              width: '40px',
            }}
          >
            <Tabs
              disabled={!focused}
              onChange={(index) => setActiveTab(index)}
            />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
