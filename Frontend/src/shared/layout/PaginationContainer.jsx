"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { getPages } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
const PaginationContainer = ({ currentPage, totalPages, setPage }) => {
  const pages = getPages(+currentPage, +totalPages);
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <div className={` flex mt-5 items-center justify-between gap-3 w-full md:w-fit    ${lng == "ar" && "self-end"}`}>
      <Button
        variant="transparent"
        onClick={() => {
          setPage(+currentPage - 1);
        }}
        disabled={currentPage == 1}
        className="  font-semibold duration-300  text-sm flex items-center gap-2  "
      >
        <FaArrowLeft
          size={15}
          className="mb-[2px]"
        />
        <span className=" hidden md:inline-block mb-1 ">{t("prev")}</span>
      </Button>
      {/* those are the pages */}
      {/* for the small screens */}
      <div className=" md:hidden flex items-center gap-2">
        <span className=" text-sm font-semibold text-pink-brand">{currentPage}</span>
        <span className=" text-sm font-semibold text-pink-brand">/</span>
        <span className=" text-sm font-semibold text-pink-brand">{totalPages}</span>
      </div>
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => setPage(+page)}
            className={` duration-300 py-2 px-4 hover:text-pink-secondary font-semibold text-sm hidden md:flex items-center  ${currentPage == page ? "border-solid  border-pink-secondary text-pink-brand border-2 rounded-8" : ""}`}
          >
            {page}
          </Button>
        );
      })}
      <Button
        variant="transparent"
        onClick={() => {
          setPage(+currentPage + 1);
        }}
        disabled={currentPage == totalPages}
        className="   font-semibold duration-300  text-sm flex items-center gap-2   "
      >
        <span className=" hidden md:inline-block mb-1 ">{t("next")}</span>
        <FaArrowRight size={15} />
      </Button>
    </div>
  );
};
export default PaginationContainer;
