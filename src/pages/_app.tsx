import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '@/src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Boilerplate</title>
        <meta name="description" content="Simple next.js boilerplate" />
        <meta name="theme-color" content="#06092B" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
