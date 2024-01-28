import initTranslations from "@/app/i18n";
import NavBar from "@/shared/layout/NavBar";
import DashboardLayout from "./DashboardLayout";
import TranslationsProvider from "../TranslationProvider";
const layout = async ({ children, params: { locale } }) => {
  const i18nNamespaces = ["default"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="   w-screen h-fit min-h-screen bg-cover bg-no-repeat bg-[#F4F6F5]  ">
        <DashboardLayout>{children}</DashboardLayout>
      </div>
    </TranslationsProvider>
  );
};
export default layout;
