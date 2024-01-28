"use client";

import { Button } from "@/components/ui/button";
import { setResetPasswordInfo } from "@/store/features/auth/reset-password/resetPasswordSlice";
import { useTranslation } from "react-i18next";
import OtpInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
const EnterOtpMainContainer = () => {
  const { t } = useTranslation();
  const { otp } = useSelector((store) => store.resetPassword);
  const dispatch = useDispatch();
  const changeHandler = (otp) => {
    dispatch(setResetPasswordInfo({ name: "otp", value: otp }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <h3 className=" text-[#1B1818] font-bold text-lg w-full text-center    ">{t("reset password")}</h3>
      <p className=" w-full text-center text-[#645D5D] text-sm  ">{t("enter otp")}</p>
      <OtpInput
        value={otp}
        onChange={changeHandler}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={"flex w-full flex-row justify-between md:justify-center md:gap-5 items-center  "}
        inputStyle={{ width: "50px", height: "50px", borderRadius: "8px", border: "2px solid #E5E5E5", outline: "none", textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "#1B1818" }}
      />
      <Button
        className={"flex items-center justify-center"}
        variant={"primary"}
      >
        <Link
          className="w-full"
          href="/auth/forgot-password/enter-new-password"
        >
          {t("next")}
        </Link>
      </Button>
    </div>
  );
};
export default EnterOtpMainContainer;
