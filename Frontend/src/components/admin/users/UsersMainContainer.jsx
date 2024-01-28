"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UsersTable } from "./UsersTable";
import PaginationContainer from "@/shared/layout/PaginationContainer";

const UsersMainContainer = () => {
  const router = useRouter();
  // some lawyers for testing
  const totalPages = 10;
  const data = [
    {
      id: "1",
      name: "John Doe",
      email: "y_allaoua@estin.dz",
      phone: "0777777777",
      date: "12/12/2021",
      image: "/placeholder.png",
      status: "Actif",
    },
    {
      id: "1",
      name: "John Doe",
      email: "y_allaoua@estin.dz",
      phone: "0777777777",
      date: "12/12/2021",
      image: "/placeholder.png",
      status: "Bloqué",
    },
    {
      id: "1",
      name: "John Doe",
      email: "y_allaoua@estin.dz",
      phone: "0777777777",
      date: "12/12/2021",
      image: "/placeholder.png",
      status: "Bloqué",
    },
    {
      id: "1",
      name: "John Doe",
      email: "y_allaoua@estin.dz",
      phone: "0777777777",
      date: "12/12/2021",
      image: "/placeholder.png",
      status: "Actif",
    },
  ];
  const path = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const handlePageChange = (page) => {
    router.push(path + "?page=" + page);
  };
  return (
    <div className=" flex flex-col gap-5 pt-20   ">
      <h3 className=" text-[#373737]  text-xl  ">List des Avocats</h3>
      <UsersTable data={data} />
      <PaginationContainer
        currentPage={page}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </div>
  );
};
export default UsersMainContainer;
