import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/mainPage/models/Navbar";
import localFont from '@next/font/local'

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
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {


  return (
    <html lang="en" data-theme='black' suppressHydrationWarning={true}>
      <body className={`${inter.className} ${yekanbakh.variable} `}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
