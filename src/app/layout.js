import './globals.css';
import { Figtree, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Nav from '@/components/Nav';
import CommandPalette from '@/components/CommandPalette';

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-serif',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
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
    <html
      lang="en"
      data-theme="light"
      className={`${instrument.variable} ${figtree.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}",
          }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <main id="content">{children}</main>
          <footer className="site-footer">
            <p>© Yi-Chi (Trista) Chen</p>
          </footer>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
