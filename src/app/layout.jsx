import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";
import Fixmap from "@/components/fixMap/fixMap";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Fixmap />
        <NavBar />
        <div className="flex flex-col pb-40">
          {children}
        </div>
      </body>
    </html>
  );
}
