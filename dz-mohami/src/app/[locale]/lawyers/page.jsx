import LawyersMainContainer from "@/components/lawyers/LawyersMainContainer";
import TranslationsProvider from "../TranslationProvider";
import initTranslations from "@/app/i18n";
export const metadata = {
  title: "Lawyers",
  description: "Lawyers page",
};
const page = async ({ params: { locale } }) => {
  const i18nNamespaces = ["default"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <LawyersMainContainer />
    </TranslationsProvider>
  );
};
export default page;
