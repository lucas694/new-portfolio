"use client";
import "./globals.css";
import { satoshi } from "./lib/fonts.js";  
import Header from "./components/header";
import Footer from "./components/footer";
import "./i18n.js"; // importa a config do i18n


export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="!scroll-smooth">
      <body
        className={`${satoshi.className} antialiased bg-bg-900 text-text-primary`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
