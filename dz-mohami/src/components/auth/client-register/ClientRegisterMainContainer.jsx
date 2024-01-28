"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FormInput from "@/shared/FormItems/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setClientRegisterInfo } from "@/store/features/auth/register-client/clientRegisterSlice";
const ClientRegisterMainContainer = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const { email, fullName, password, confirmPassword } = useSelector((state) => state.clientRegister);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(setClientRegisterInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 justify-center items-center ">
      <h3 className="  capitalize text-[#1B1818] font-bold text-xl w-full text-center    ">{t("register")}</h3>
      <p className=" w-full  capitalize text-center text-[#645D5D] text-sm  ">{t("register description")}</p>
      <Button
        variant="filterButton"
        className={`flex items-center w-2/3 justify-center gap-2 ${lng == "ar" && "flex-row-reverse"} `}
      >
        <span className=" font-medium  "> {t("continue with google")} </span>
        <Image
          src="/google.svg"
          width={25}
          height={25}
        />
      </Button>
      {/* those are the inputs */}
      <div className={`single-row w-full flex-col md:flex-row  flex items-center gap-5  ${lng == "ar" && "flex-row-reverse"} `}>
        <FormInput
          label={t("full name")}
          name="fullName"
          value={fullName}
          type="text"
          placeholder={t("full name")}
          setValue={changeHandler}
        />
        <FormInput
          label={t("email")}
          name="email"
          value={email}
          type="email"
          placeholder={t("email")}
          setValue={changeHandler}
        />
      </div>
      <div className={`single-row w-full flex-col md:flex-row flex items-center gap-5  ${lng == "ar" && "flex-row-reverse"} `}>
        <FormInput
          label={t("password")}
          name="password"
          value={password}
          type="password"
          placeholder={t("password")}
          setValue={changeHandler}
        />
        <FormInput
          label={t("confirm password")}
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          placeholder={t("confirm password")}
          setValue={changeHandler}
        />
      </div>
      {/* this is the submit button */}
      <Button
        variant={"primary"}
        className={"flex w-2/3 items-center justify-center "}
      >
        {t("register")}
      </Button>
    </div>
  );
};
export default ClientRegisterMainContainer;
