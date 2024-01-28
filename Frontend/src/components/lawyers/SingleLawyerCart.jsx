"use client";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneFlip } from "react-icons/fa6";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { FaAnglesRight } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { CiMap } from "react-icons/ci";
import { usePathname } from "next/navigation";
const SingleLawyerCart = ({ id, name, rating, mainSpecialty, email, phone, location, wilaya, description }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const path = usePathname();
  return (
    <article className={`flex bg-white flex-col gap-5    px-10 py-5 rounded-8 justify-between ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"} `}>
      {/* this is the left side of the cart */}
      <div className="cart-left-side flex flex-col gap-5 ">
        <div className={`image-container flex items-center gap-5  ${lng == "ar" && "flex-row-reverse"} `}>
          <div className="image relative">
            <Image
              src="/placeholder.png"
              alt="lawyer image"
              width={100}
              height={100}
              className="rounded-8"
            />
            {/* this is the rating container */}
            <span className=" bg-white absolute bottom-0 left-0 px-2 py-1 rounded-r-8 flex items-center gap-1   ">
              <FaStar
                size={12}
                color="#FFC909"
              />
              <span className=" text-[#1C1F1E] font-semibold text-xs  ">{rating}</span>
            </span>
          </div>
          <div className="info flex flex-col gap-1 ">
            <span className={`text-[#1C1F1E] font-semibold w-full inline-block    ${lng == "ar" && "text-end"} `}>{name}</span>
            <span className={`text-[#A7A6A5]  ${lng == "ar" && "text-end"} font-medium text-sm inline-block w-full`}>{mainSpecialty}</span>
            {/* those are the links  */}
            <div className={`links-container mt-2 flex items-center gap-2  ${lng == "ar" && "flex-row-reverse"} `}>
              <Link
                href={`mailto:${email}`}
                className=" bg-[#5D3F3F] hover:bg-[#5D3F3F]/80 rounded-8 p-2  flex items-center justify-center    "
              >
                <HiOutlineMail
                  className="text-white"
                  size={20}
                />
              </Link>
              <Link
                href={`tel:${phone}`}
                className=" bg-[#6295E2] hover:bg-[#6295E2]/80 rounded-8 p-2  flex items-center justify-center    "
              >
                <FaPhoneFlip
                  className="text-white"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* those are the contacts */}
        <div className={`contacts flex flex-col gap-3  ${lng == "ar" && "items-end"} `}>
          <h4>{t("contacts")}</h4>
          {/* this is the mail */}
          <div className={` ${lng == "ar" && "flex-row-reverse"} flex items-center gap-2 `}>
            <HiOutlineMail
              size={20}
              color="#A7A6A5"
            />
            <span className="text-[#A7A6A5] font-medium text-sm  ">{email}</span>
          </div>
          {/* this is the phone */}
          <div className={` ${lng == "ar" && "flex-row-reverse"} flex items-center gap-2 `}>
            <FaPhoneFlip
              size={18}
              color="#A7A6A5"
            />
            <span className="text-[#A7A6A5] font-medium text-sm  ">{phone}</span>
          </div>
          {/* see profile button */}
          <Button
            variant="primary"
            className="justify-between"
          >
            <Link
              href={`${path}/${id}`}
              className={`flex w-full gap-5 items-center justify-between ${lng == "ar" && "flex-row-reverse"} `}
            >
              <span>{t("see profile")}</span>
              <FaAnglesRight
                size={15}
                className={`${lng == "ar" && "transform rotate-180"}`}
              />
            </Link>
          </Button>
        </div>
      </div>
      {/* this is the separator */}
      <span className=" h-[200px] hidden  md:inline-block min-h-full max-h-full w-[1px] bg-[#DEDEDE] self-center  "></span>
      {/* this is the cart right side */}
      <div className="cart-right-side w-full md:w-[60%] h-full min-h-ful flex flex-col gap-7 ">
        {/* this is the location */}
        <div className={`location-container flex flex-col gap-2 ${lng == "ar" && "items-end"} `}>
          <h3 className=" text-[#1C1F1E] font-semibold text-lg capitalize  ">{t("location")}</h3>
          <div className="locations-container  flex items-center gap-20 ">
            <div className="single-info flex gap-2 ">
              <GoLocation
                size={20}
                color="#000000"
              />
              <span className="text-[#A7A6A5] font-medium text-sm  ">{location}</span>
            </div>
            <div className="single-info flex gap-2 ">
              <CiMap
                size={20}
                color="#000000"
              />
              <span className="text-[#A7A6A5] font-medium text-sm  ">{wilaya}</span>
            </div>
          </div>
        </div>
        {/* description container */}

        <div className={`description-container flex flex-col gap-2 ${lng == "ar" && "items-end"} `}>
          <h3 className=" text-[#1C1F1E] font-semibold text-lg capitalize  ">{t("about lawyer")}</h3>
          <p className={` text-[#A7A6A5] text-sm font-medium  ${lng == "ar" && "text-end"}`}>{description}</p>
        </div>
      </div>
    </article>
  );
};
export default SingleLawyerCart;
