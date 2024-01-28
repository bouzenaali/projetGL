"use client";
import NavBar from "@/shared/layout/NavBar";
import SearchContainer from "./SearchContainer";
import { useTranslation } from "react-i18next";
const HomeMainContainer = () => {
  // some cities to test the dropdown
  const cities = [
    {
      value: "cairo",
      label: "Cairo",
    },
    {
      value: "alex",
      label: "Alexandria",
    },
    {
      value: "mansoura",
      label: "Mansoura",
    },
    {
      value: "tanta",
      label: "Tanta",
    },
    {
      value: "aswan",
      label: "Aswan",
    },
  ];
  // some categories for testing
  const categories = [
    {
      value: "family",
      label: "Family",
    },
    {
      value: "criminal",
      label: "Criminal",
    },
    {
      value: "civil",
      label: "Civil",
    },
    {
      value: "business",
      label: "Business",
    },
  ];
  //  this is the translation hook
  const { t } = useTranslation();
  return (
    <div className="bg-img  w-screen h-fit min-h-screen bg-cover bg-no-repeat  ">
      <NavBar />
      <div className="container mx-auto  ">
        {/* this is the hero section */}
        <main className=" pt-16  w-full h-full   ">
          <div className="hero-content w-full md:w-10/12 mx-auto flex flex-col gap-5   ">
            <h1 className=" text-4xl  md:text-6xl capitalize text-white font-bold text-center md:leading-[90px]         ">
              <span className="   text-pink-brand   ">{t("easiest")}</span> {t("title second part")} <span className="text-pink-brand">{t("lawyer")}</span>
            </h1>
            <p className=" text-center text-sm md:text-base  w-full text-grey-scale2 ">{t("description")}</p>

            {/* this is the filter container */}
            <SearchContainer
              cities={cities}
              categories={categories}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
export default HomeMainContainer;
