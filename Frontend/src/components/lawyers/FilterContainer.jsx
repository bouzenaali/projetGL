"use client";

import { DatePicker } from "@/shared/FormItems/DatePicker";
import { FilterDropDown } from "@/shared/FormItems/FilterDropDown";
import SearchBar from "@/shared/FormItems/SearchBar";
import { setSearchLawyerInfo } from "@/store/features/lawyer_search/search_slice";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
const FilterContainer = ({ cities, categories }) => {
  const dispatch = useDispatch();
  const { date, wilayaId, categoryId, search } = useSelector((store) => store.searchLawyer);
  const router = useRouter();
  const handleChange = (name, value) => {
    dispatch(setSearchLawyerInfo({ name, value }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    router.push(`/lawyers?page=1&wilaya_id=${wilayaId}&date=${date}&category_id=${categoryId}&search=${search}`);
  };
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <div className={`w=full flex flex-col  gap-10 items-center  ${lng == "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} `}>
      <SearchBar
        value={search}
        setValue={(e) => {
          handleChange("search", e.target.value);
        }}
        name={"search"}
      />

      <FilterDropDown
        leftIcon={"/location.png"}
        values={cities}
        filterTitle={t("wilaya")}
        value={wilayaId}
        setValue={(value) => handleChange("wilayaId", value)}
        label={t("select city")}
        className={`w-full `}
        isToTop={false}
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
        isToTop={false}
      />
      {/* this is the search button */}
      <Button
        onClick={clickHandler}
        variant={"primary"}
        className={"w-full md:w-fit flex items-center justify-center "}
      >
        <CiSearch
          size={20}
          className="h-7"
        />
      </Button>
    </div>
  );
};
export default FilterContainer;
