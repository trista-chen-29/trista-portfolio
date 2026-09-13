import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Trista Chen — Software Engineer',
  description: 'SJSU Software Engineering student. Firmware, robotics, event systems, and ML engineering. Based in San Jose, CA.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
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
          <footer className="site-footer">
            <span>© 2026 Yi-Chi (Trista) Chen</span>
            <span>San Jose, CA · SJSU SWE ’27</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
