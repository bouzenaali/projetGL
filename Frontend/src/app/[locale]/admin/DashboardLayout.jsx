"use client";
import Logo from "@/shared/Logo";
import { BiSolidDashboard } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
const DashboardLayout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const path = usePathname();
  const lng = i18n.language;
  const links = [
    {
      text: "dashboard",
      basePath: "/admin/dashboard",
      icon: <BiSolidDashboard size={18} />,
      query: "",
    },
    {
      text: "lawyers",
      basePath: "/admin/users",
      icon: <CiUser size={18} />,
      query: "?page=1",
    },
  ];
  return (
    <main className=" flex  min-w-screen max-w-screen min-h-screen bg-[#F8F9FB] max-h-screen relative ">
      <aside className=" min-h-full  rounded-r-2xl  side-bar-shadow w-[70px] md:w-[250px] md:min-w-[250px] flex flex-col gap-5 py-10 px-5   bg-white ">
        <div className="logo-container hidden md:block ">
          <Logo variant={"black"} />
        </div>
        <ul className="flex flex-col gap-5 mt-10 ">
          {links?.map((ele, index) => {
            const isActive = path.includes(ele.basePath);
            return (
              <li key={index}>
                <Link
                  className={` flex items-center px-3 py-2 duration-300  gap-4  ${isActive ? " bg-pink-brand rounded-8  text-white   " : " text-[#858585]   "}`}
                  href={ele.basePath + ele?.query}
                >
                  {ele.icon}
                  <span className=" hidden md:block ">{t(ele.text)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      <section className=" container py-10  ">{children}</section>
    </main>
  );
};
export default DashboardLayout;
