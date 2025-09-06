import "./globals.css";
import { satoshi } from "./lib/fonts.js";  
import Header from "./components/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${satoshi.className} antialiased bg-bg-900 text-text-primary`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
