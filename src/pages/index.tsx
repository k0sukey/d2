import React, { useEffect, useMemo, useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { toKatakana } from '../lib/to-katakana';
import { Devil } from '../models/devil/devil';
import { getAll } from '../models/devil/get-all';
import { raceMap } from '../models/race/race-map';
import Result from '../components/result';
import Head from "next/head";

const IndexPage = () => {
  const devils = getAll();
  const [focused, setFocused] = useState<Devil | null>(null);

  useEffect(() => {
    if (focused === null) {
      return;
    }
  }, [focused]);

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
          <Result devil={focused} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
