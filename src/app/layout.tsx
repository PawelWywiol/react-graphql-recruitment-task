import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ApolloProvider } from '@/lib/apollo/apollo.provider';

import { ErrorBoundary } from '@/components/error-boundary';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          <ApolloProvider>{children}</ApolloProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
