import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-lusitana',
});
