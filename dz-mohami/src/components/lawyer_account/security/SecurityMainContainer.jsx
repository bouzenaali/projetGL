"use client";
import FormInput from "@/shared/FormItems/FormInput";
import { setLawyerAccountInfo } from "@/store/features/lawyer_accout/lawyerAccountSlice";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const SecurityMainContainer = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const { phone, email, password, confirmPassword } = useSelector((store) => store.lawyerAccount);
  const changeHandler = (e) => {
    dispatch(setLawyerAccountInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <>
      <FormInput
        value={phone}
        setValue={changeHandler}
        type={"tel"}
        name={"phone"}
        label={t("phone")}
        placeholder={t("phone")}
        className={"w-full"}
      />
      <FormInput
        value={email}
        setValue={changeHandler}
        type={"email"}
        name={"email"}
        label={t("email")}
        placeholder={t("email")}
        className={"w-full"}
      />
      <div className={`password-inputs-container w-full gap-5   flex flex-col ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"} `}>
        <FormInput
          value={password}
          setValue={changeHandler}
          type={"password"}
          name={"password"}
          label={t("password")}
          placeholder={t("password")}
          className={"w-full"}
          disabled={true}
        />
        <FormInput
          value={confirmPassword}
          setValue={changeHandler}
          type={"password"}
          name={"confirmPassword"}
          label={t("confirm password")}
          placeholder={t("confirm password")}
          className={"w-full"}
          disabled={true}
        />
        {/* recover button */}
      </div>
      <Button
        className={"w-1/3 mx-auto flex items-center justify-center"}
        variant={"primary"}
      >
        {t("save")}
      </Button>
      <p className={` w-full text-center flex justify-center gap-1  items-center ${lng == "ar" && "flex-row-reverse"} `}>
        <span className=" text-[#7D7D7D] text-sm font-medium  ">{t("forgot password")}</span>
        <Link
          className=" text-pink-brand duration-300  font-semibold hover:underline text-sm "
          href={"/auth/forgot-password/enter-email"}
        >
          {t("recover")}
        </Link>
      </p>
    </>
  );
};
export default SecurityMainContainer;
