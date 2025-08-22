import type { Metadata } from 'next';
import { Geist_Mono, Lato, Poppins } from 'next/font/google';

import { ApolloProvider } from '@/lib/apollo/apollo.provider';

import { ErrorBoundary } from '@/components/error-boundry/error-boundary';

import './globals.css';

import { cn } from '@/lib/utils';

const headingFont = Poppins({
  weight: ['700'],
  variable: '--font-heading',
  subsets: ['latin'],
});

const fontSans = Lato({
  weight: ['400'],
  variable: '--font-sans',
  subsets: ['latin'],
});

const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'React GraphQL Recruitment Task',
  description: 'A recruitment task for a front-end developer position.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fontSans.variable, fontMono.variable, headingFont.variable, 'antialiased')}
      >
        <ErrorBoundary>
          <ApolloProvider>{children}</ApolloProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
