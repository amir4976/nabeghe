import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/mainPage/models/Navbar";
import localFont from 'next/font/local'
import AuthProvider from "@/context/Auth";
const yekanbakh = localFont({
  src: [
    {
      path: '../public/assets/yekanbakhfanum-black.ttf',
      weight: '700',
      style: 'normal',
  },
    {
      path: '../public/assets/yekanbakhfanum-regular.ttf',
      weight: '400',
      style: 'normal',
  },
    {
      path: '../public/assets/yekanbakhfanum-semibold.ttf',
      weight: '200',
      style: 'normal',
  },
  ],
  display: 'swap',
  variable:"--main-black"
})
 

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "سایت اموزشی نابغه",
  description: "نابغه",
  icons: {
    icon: "https://png.pngtree.com/png-vector/20220623/ourlarge/pngtree-letter-n-logo-png-png-image_5284039.png",
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme='drak' suppressHydrationWarning={true}>
      <body className={`${inter.className} ${yekanbakh.variable} `}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
