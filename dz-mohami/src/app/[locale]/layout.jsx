import "normalize.css";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import CalendlyPopUp from "@/components/lawyers/single_lawyer/Calendly";
export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
