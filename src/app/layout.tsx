import './globals.css'
import { Quicksand } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const quicksand = Quicksand({
  weight: ["400", "700", '300', "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={quicksand.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
