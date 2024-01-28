import SingleLawyerMainContainer from "@/components/lawyers/single_lawyer/SingleLawyerMainContainer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../TranslationProvider";
export const metadata = {
  title: "Single Lawyer",
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
      <SingleLawyerMainContainer />
    </TranslationsProvider>
  );
};
export default page;
