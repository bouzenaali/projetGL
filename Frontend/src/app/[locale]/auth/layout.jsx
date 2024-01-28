import initTranslations from "@/app/i18n";
import NavBar from "@/shared/layout/NavBar";
import TranslationsProvider from "../TranslationProvider";
import FormLayout from "./FormLayout";
import ProfileLayout from "../[lawyer_account]/ProfileLayout";

const layout = async ({ children, params: { locale } }) => {
  const i18nNamespaces = ["default"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className=" bg-img  w-screen h-fit min-h-screen bg-cover bg-no-repeat  ">
        <NavBar />
        <FormLayout>{children}</FormLayout>
      </div>
    </TranslationsProvider>
  );
};
export default layout;
