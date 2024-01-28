"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FilterDropDown } from "@/shared/FormItems/FilterDropDown";
import { DatePicker } from "@/shared/FormItems/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { setSearchLawyerInfo } from "@/store/features/lawyer_search/search_slice";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
const SearchContainer = ({ cities, categories }) => {
  const dispatch = useDispatch();
  const { date, wilayaId, categoryId } = useSelector((store) => store.searchLawyer);
  const router = useRouter();
  const handleChange = (name, value) => {
    dispatch(setSearchLawyerInfo({ name, value }));
  };
  const { t, i18n } = useTranslation();

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(`/lawyers?page=1&wilaya_id=${wilayaId}&date=${date}&category_id=${categoryId}&search=`);
  };
  const lng = i18n.language;
  return (
    <div className="search-container rounded-16 p-5 w-full    flex flex-col items-center justify-center gap-10 mt-10  ">
      <h1 className=" text-white font-bold text-lg md:text-2xl capitalize ">{t("search title")}</h1>
      <form className="filter-container w-full flex flex-col md:flex-row items-center justify-between gap-10 ">
        <div className="dropdowns-container w-full gap-5 flex-1 flex flex-col  md:flex-row items-center justify-between ">
          <FilterDropDown
            leftIcon={"/location.png"}
            values={cities}
            filterTitle={t("wilaya")}
            value={wilayaId}
            setValue={(value) => handleChange("wilayaId", value)}
            label={t("select city")}
            className={`w-full `}
            isToTop={true}
          />
          <DatePicker
            date={date}
            setDate={(value) => handleChange("date", value)}
            leftIcon={"/date_icon.png"}
          />
          <FilterDropDown
            values={categories}
            value={categoryId}
            setValue={(value) => handleChange("categoryId", value)}
            label={t("select category")}
            className={" "}
            leftIcon={"/category_icon.png"}
            filterTitle={t("category")}
            isToTop={true}
          />
        </div>
        <Button
          type={"submit"}
          variant={"primary"}
          className={`justify-between gap-2  text-sm h-12  ${lng == "ar" && "flex-row-reverse"} `}
          onClick={clickHandler}
        >
          <CiSearch size={20} />
          <span>{t("search")}</span>
        </Button>
      </form>
    </div>
  );
};
export default SearchContainer;
