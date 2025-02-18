import '@mantine/core/styles.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import Header from '@/components/Header';
import { theme } from '../theme';

import './globals.css';

import Footer from '@/components/Footer';

export const metadata = {
  title: 'TRUMP - solana',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/images/trump-img-1.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
