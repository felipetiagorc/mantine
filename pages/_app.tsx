import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { AppProps } from 'next/app';
import Head from 'next/head';
import DarkButton from '../src/components/darkButton';
import Layout from '../src/components/layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <DarkButton />

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Paper radius={0}>
            <Layout />
            <Component {...pageProps} />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
