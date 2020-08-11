import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Devil } from '../src/models/devil/devil';
import { getAll } from '../src/models/devil/get-all';
import { raceMap } from '../src/models/race/race-map';
import Result from '../components/result';

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
        <title>d2</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
          <Autocomplete
            blurOnSelect
            disableListWrap
            noOptionsText="悪魔が見つかりません"
            options={[...devils.getSacrifices().orderByRaceAndGradeAsc()]}
            filterOptions={(options, state) => {
              if (state.inputValue === '') {
                return options;
              }
              return options.filter((option) =>
                state
                  .getOptionLabel(option)
                  .split('')
                  .some((v) => v.localeCompare(state.inputValue, 'ja') === 0),
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
