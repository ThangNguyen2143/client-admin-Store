import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import NavSide from "./partials/NavSide";
import Providers from "~/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tâm An Parmacy",
  description: "Nhà thuốc đông y giá tốt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <NavSide />
            <div className="flex min-h-screen w-5/6 flex-col">
              <Header />
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
