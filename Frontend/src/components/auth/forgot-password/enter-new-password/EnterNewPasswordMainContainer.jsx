"use client";

import FormInput from "@/shared/FormItems/FormInput";
import { setResetPasswordInfo } from "@/store/features/auth/reset-password/resetPasswordSlice";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const EnterNewPasswordMainContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { newPassword, confirmPassword } = useSelector((store) => store.resetPassword);
  const changeHandler = (e) => {
    dispatch(setResetPasswordInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <h3 className=" text-[#1B1818] font-bold text-lg w-full text-center    ">{t("reset password")}</h3>
      <p className=" w-full text-center text-[#645D5D] text-sm  ">{t("enter new password")}</p>

      <FormInput
        value={newPassword}
        name={"newPassword"}
        label={t("new password")}
        type={"password"}
        placeholder={t("new password")}
        setValue={changeHandler}
      />
      <FormInput
        value={confirmPassword}
        name={"confirmPassword"}
        label={t("confirm new password")}
        type={"password"}
        placeholder={t("confirm new password")}
        setValue={changeHandler}
      />
      <Button
        variant={"primary"}
        className=" flex items-center justify-center "
      >
        <Link href="/auth/forgot-password/reset-succeed">{t("next")}</Link>
      </Button>
    </div>
  );
};
export default EnterNewPasswordMainContainer;
