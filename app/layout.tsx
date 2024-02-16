import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from './checkout/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'The Clever Kitchen',
  description: 'Effortless cooking, with clever kitchen solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>

        <html className="relative bg-background-100 font-light" lang="en">
        <body className="w-full container m-auto text-darkGrey-100 box-border min-h-screen">
        <Analytics />
        <Header />
          {children}
        <Footer />
        </body>
    </html>
    </CartProvider>

  )
}
