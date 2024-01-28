"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import FormInput from "@/shared/FormItems/FormInput";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setLoginInfo } from "@/store/features/auth/login/loginSlice";
const LoginMainContainer = () => {
  const { email, password } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const changeHandler = (e) => {
    dispatch(setLoginInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <h3 className="  capitalize text-[#1B1818] font-bold text-xl w-full text-center    ">{t("login")}</h3>
      <p className=" w-full  capitalize text-center text-[#645D5D] text-sm  ">{t("login to account")}</p>
      <Button
        variant="filterButton"
        className={`flex items-center justify-center gap-2 ${lng == "ar" && "flex-row-reverse"} `}
      >
        <span className=" font-medium  "> {t("continue with google")} </span>
        <Image
          src="/google.svg"
          width={25}
          height={25}
        />
      </Button>
      {/* this is the seperator */}
      <span className=" inline-block w-full min-w-full max-w-full  h-[1px] max-h-[1px]  min-h-[1px] bg-[#D0D5DD] mt-5  relative ">
        <span className=" bg-white py-1 px-3  absolute left-1/2 -top-[18px] -translate-x-1/2  text-[#D0D5DD]  text-sm ">{t("or")}</span>
      </span>
      {/* those are the inputs */}
      <FormInput
        value={email}
        label={t("email")}
        setValue={changeHandler}
        type={"email"}
        placeholder={t("email")}
        name={"email"}
      />
      <FormInput
        value={password}
        label={t("password")}
        setValue={changeHandler}
        type={"password"}
        placeholder={t("password")}
        name={"password"}
      />
      {/* forgot password link */}
      <span className={` flex items-center gap-1 ${lng == "ar" && "flex-row-reverse"} `}>
        <span className="text-[#7D7D7D] font-semibold text-sm ">{t("forgot password")}</span>
        <Link
          href="/auth/forgot-password/enter-email"
          className=" hover:underline text-pink-brand text-sm font-semibold  duration-300 "
        >
          {t("recover")}
        </Link>
      </span>
      {/* this is the submit button */}
      <Button
        variant={"primary"}
        className="flex items-center justify-center"
      >
        {t("login")}
      </Button>
    </div>
  );
};
export default LoginMainContainer;
