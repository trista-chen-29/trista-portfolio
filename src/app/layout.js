import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

import Head from 'next/head';

export const metadata = {
  title: 'Trista Chen — Software Engineer',
  description: 'Full-Stack · Backend · ML Engineering. SJSU Software Engineering student based in Sunnyvale, CA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ paddingTop: 'var(--nav-h)' }}>
            {children}
          </main>
          <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '1.5rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--mono)',
            fontSize: '.7rem',
            color: 'var(--text3)',
          }}>
            <span>© 2026 Yi-Chi (Trista) Chen</span>
            <span>Sunnyvale, CA · SJSU SWE &apos;27</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}