import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Développeur Web Fullstack',
  description: 'Portfolio de développeur web fullstack spécialisé en React, Next.js et Node.js',
  keywords: 'développeur web, fullstack, React, Next.js, Node.js, JavaScript, TypeScript',
  authors: [{ name: 'Votre Nom' }],
  openGraph: {
    title: 'Portfolio - Développeur Web Fullstack',
    description: 'Portfolio de développeur web fullstack spécialisé en React, Next.js et Node.js',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}