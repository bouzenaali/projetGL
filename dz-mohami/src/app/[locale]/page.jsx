// import HomeMainContainer from "@/components/Home/HomeMainContainer";

import HomeMainContainer from "@/components/Home/HomeMainContainer";
import initTranslations from "../i18n";
import TranslationsProvider from "./TranslationProvider";

// import SearchContainer from "@/components/Home/SearchContainer";

export const metadata = {
  title: "Home",
  description: "Home",
  url: "/",
  type: "website",
  image: "/images/og.png",
  keywords: "Home",
};
export default async function Home({ params: { locale } }) {
  const i18nNamespaces = ["default"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HomeMainContainer />
    </TranslationsProvider>
  );
}
