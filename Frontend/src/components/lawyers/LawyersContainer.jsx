"use client";
import PaginationContainer from "@/shared/layout/PaginationContainer";
import SingleLawyerCart from "./SingleLawyerCart";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LawyersContainer = ({ lawyers, totalPages }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  // this is to navigate to a new page
  const navigateToPage = (page) => {
    let queries = ``;
    searchParams.forEach((value, key) => {
      if (key !== "page") {
        queries += `&${key}=${value}`;
      } else {
        queries += `&${key}=${page}`;
      }
    });
    router.push(`${path}?${queries}`);
  };
  return (
    <div className=" flex flex-col gap-5 ">
      {lawyers?.map((lawyer, index) => {
        return (
          <SingleLawyerCart
            key={index}
            {...lawyer}
          />
        );
      })}
      {/* this is for the pagination */}
      <PaginationContainer
        totalPages={totalPages}
        currentPage={page}
        setPage={navigateToPage}
      />
    </div>
  );
};
export default LawyersContainer;
