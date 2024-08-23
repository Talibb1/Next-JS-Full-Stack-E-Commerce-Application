import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://Canim-csr.vercel.app"),
  title: "Canim - Shop & eCommerce React Template",
  description:
    "Buy Canim - Shop & eCommerce Next.Js Template by Talib Uddin. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js 13 App Directory",
  openGraph: {
    title: "Canim - Shop & eCommerce React Template",
    description:
      "Buy Canim - Shop & eCommerce Next.Js Template by Talib Uddin. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js 13 App Directory",
    url: "https://Canim-csr.vercel.app",
    siteName: "Canim Template",
    images:
      "https://github.com/devhasibulislam/Canim-ecommerce/blob/master/client/public/og.png?raw=true",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@talibuddin",
    title: "Canim - Shop & eCommerce React Template",
    description:
      "Buy Canim - Shop & eCommerce Next.Js Template by Talib Uddin. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js 13 App Directory",
    image:
      "https://github.com/devhasibulislam/Canim-ecommerce/blob/master/client/public/og.png?raw=true",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
