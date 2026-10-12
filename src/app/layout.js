import './globals.css';
import { Newsreader } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import LittleSecret from '@/components/LittleSecret';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'Trista Chen',
  description: 'Yi-Chi (Trista) Chen, a Taiwanese software engineering student in San Jose, graduating May 2027. Firmware, robotics, validation, and software.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f1e8' },
    { media: '(prefers-color-scheme: dark)', color: '#261e30' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={newsreader.variable} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="site-footer">
            <div className="footer-meta">
              <span>© 2026 Yi-Chi (Trista) Chen</span>
              <span>San Jose, CA · SJSU SWE ’27</span>
            </div>
            <LittleSecret />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
