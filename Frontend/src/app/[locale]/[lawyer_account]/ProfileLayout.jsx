"use client";

import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
const ProfileLayout = ({ children }) => {
  const { t, i18n } = useTranslation("default");
  const { lawyer_account } = useParams();
  const lng = i18n.language;
  const path = usePathname();
  // those are the links
  const links = [
    {
      text: "informations",
      basePath: "/infos",
    },

    {
      text: "Security",
      basePath: "/security",
    },
    {
      text: "Profile",
      basePath: "/profile",
    },
    {
      text: "appointments",
      basePath: "/appointments",
    },
  ];
  return (
    <div className={`container py-10 flex flex-col gap-5 w-full ${lng == "ar" && "items-end"} `}>
      <h2 className={` w-fit  text-[#1C1F1E] font-bold text-2xl md:text-4xl  ${lng == "ar" && "text-right"}   `}>{t("profile settings")}</h2>
      {/* those are the links */}
      <ul className={`flex ${lng == "ar" && "flex-row-reverse"} `}>
        {links.map((link, index) => {
          const finalLink = `/${lawyer_account}/${link.basePath}`;
          const isActive = path.includes(link.basePath);
          return (
            <li
              key={index}
              className={`  text-xs md:text-sm duration-300  ${isActive ? "bg-pink-brand text-white " : "bg-white border-solid hover:bg-pink-secondary border-2 border-[#E4E7EC] text-[#98A2B3] "} ${lng != "ar" && index == 0 && "rounded-l-8"} ${lng == "ar" && index == 0 && "rounded-r-8"} ${lng != "ar" && index == links?.length - 1 && "rounded-r-xl"} ${lng == "ar" && index == links?.length - 1 && "rounded-l-xl"} `}
            >
              <Link
                className="px-3 py-2 inline-block"
                href={finalLink}
              >
                {t(link.text)}
              </Link>
            </li>
          );
        })}
      </ul>
      <section className={` bg-white w-full rounded-8 p-5 flex flex-col gap-5    ${lng == "ar" && "items-end"} `}>{children}</section>
    </div>
  );
};
export default ProfileLayout;
