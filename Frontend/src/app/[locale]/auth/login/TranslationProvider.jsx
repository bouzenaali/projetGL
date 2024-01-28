import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../TranslationProvider";
const TranslationProvider = async ({ children, params: { locale } }) => {
  const i18nNamespaces = ["default"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
};
export default TranslationProvider;
