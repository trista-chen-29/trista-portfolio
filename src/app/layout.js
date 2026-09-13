import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Trista Chen',
  description: 'SJSU Software Engineering, May 2027. Firmware, robotics, validation, and software. Internships now, new-grad after graduation. Climbs, sings, and stays curious.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1613' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
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
            <span>© 2026 Yi-Chi (Trista) Chen</span>
            <span>San Jose, CA · SJSU SWE ’27</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
