"use client";

import { usePathname } from "next/navigation";

const FormLayout = ({ children }) => {
  const path = usePathname();
  return (
    <div className="container py-10 ">
      <form className={`form-container mx-auto  mt-10  w-full bg-white rounded-8 p-5  ${path?.includes("register") ? "md:w-10/12" : "md:w-1/3"} `}>{children}</form>
    </div>
  );
};
export default FormLayout;
