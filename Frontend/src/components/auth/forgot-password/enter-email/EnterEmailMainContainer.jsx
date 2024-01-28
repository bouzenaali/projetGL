"use client";
import { Button } from "@/components/ui/button";
import FormInput from "@/shared/FormItems/FormInput";
import { setResetPasswordInfo } from "@/store/features/auth/reset-password/resetPasswordSlice";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const EnterEmailMainContainer = () => {
  const { email } = useSelector((store) => store.resetPassword);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(setResetPasswordInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <h3 className=" capitalize  text-[#1B1818] font-bold text-xl w-full text-center    ">{t("reset password")}</h3>
      <p className=" w-full capitalize mb-5  text-center text-[#645D5D] text-sm  ">{t("enter email to reset password")}</p>
      <FormInput
        value={email}
        setValue={changeHandler}
        name={"email"}
        type={"email"}
        label={t("email")}
        placeholder={t("email")}
      />
      <Button
        className="flex items-center justify-center "
        variant={"primary"}
      >
        <Link href="/auth/forgot-password/enter-otp">{t("next")}</Link>
      </Button>
    </div>
  );
};
export default EnterEmailMainContainer;
