//import { Inter } from "next/font/google";
import 'destyle.css';
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | Gray Mickey",
    default: "Gray Mickey",
  },
  description: "世の中の社会問題や理不尽なことに対しての情報提供や疑問を投げかけるサイトです。",
  openGraph: {
    title: "Gray Mickey",
    description: "世の中の社会問題や理不尽なことに対しての情報提供や疑問を投げかけるサイトです。",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
