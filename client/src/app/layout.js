import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://next-js-full-stack-e-commerce-application-axgep97np.vercel.app/"),
  title: "Shop & eCommerce React Template",
  description:
    "Buy Shop & eCommerce Next.Js Template by Talib Uddin. Shop & eCommerce React Template - a responsive React template. E-commerce is built with the latest Next.Js 14 App Directory",
  openGraph: {
    title: "Shop & eCommerce React Template",
    description:
      "Buy Shop & eCommerce Next.Js Template by Talib Uddin. Shop & eCommerce React Template - a responsive React template. E-commerce is built with the latest Next.Js 14 App Directory",
    url: "https://next-js-full-stack-e-commerce-application-axgep97np.vercel.app/",
    siteName: "Template",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@talibuddin",
    title: "Shop & eCommerce React Template",
    description:
      "Buy Shop & eCommerce Next.Js Template by Talib Uddin. Shop & eCommerce React Template - a responsive React template. E-commerce is built with the latest Next.Js 14 App Directory"
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
