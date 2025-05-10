
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap', // Added display swap for better performance
});

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap', // Added display swap for better performance
});

export const metadata: Metadata = {
  title: 'Balayage Studio - Expert Hair Colorists',
  description: 'Discover your best look with our personalized balayage. Advanced techniques, natural results, exclusively for you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
