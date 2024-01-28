"use client";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
const SearchBar = ({ value, setValue, name }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <div className={`bg-white px-5 py-2 h-12  rounded-8 border-solid border-slate-200 border-2 text-slate-950    flex-1 ${lng == "ar" && "flex-row-reverse"}   min-w-[300px] flex w-full items-center gap-5`}>
      <CiSearch
        color="#CDCFCE"
        size={20}
      />
      {/* this is the input */}
      <input
        name={name}
        type="text"
        value={value}
        onChange={setValue}
        className={`w-full flex items-end      text-title-color font-medium placeholder:  flex-1 outline-none text-sm border-none bg-transparent ${lng == "ar" && "text-right"}`}
        placeholder={t("search lawyer")}
      />
    </div>
  );
};
export default SearchBar;
