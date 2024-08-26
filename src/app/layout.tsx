"use client"

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { Network } from "aptos";
import Navbar from '../components/_navbar/Navbar';
import Footer from '../components/_navbar/Footer';

const wallets = [new PetraWallet()];


const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'GitFund: Eth Denver 2024',
//   description: 'Generated by create next app',
// };

// Updated RootLayout to handle session being undefined
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AptosWalletAdapterProvider
          plugins={wallets}
          autoConnect={false}
          dappConfig={{ network: Network.TESTNET, aptosConnectDappId: "dapp-id" }}
        >
          <Navbar />
          <Providers>{children}</Providers>
          <Footer />
        </AptosWalletAdapterProvider>

      </body>
    </html>
  );
}
