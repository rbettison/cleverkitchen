import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useContext, useState } from 'react'
import CartContext, { CartProvider } from './checkout/CartContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {cartItems} = useContext(CartContext);
  return (
    <html lang="en">
        <CartProvider>
        <body className={inter.className}>
        <h1>Header</h1>
        <p>Number of items in cart: {cartItems}</p>
          {children}
        <h1>Footer</h1>
        </body>
        </CartProvider>
    </html>
  )
}
