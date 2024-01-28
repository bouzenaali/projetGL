"use client";
import { Button } from "@/components/ui/button";
import FormInput from "@/shared/FormItems/FormInput";
import { setRegisterLawyerInfo } from "@/store/features/auth/register-lawyer/registerLawyerSlice";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const StepTwo = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const dispatch = useDispatch();
  const { phone, email, password, confirmPassword } = useSelector((state) => state.lawyerRegister);
  const changeHandler = (e) => {
    dispatch(setRegisterLawyerInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col items-center justify-center gap-5 ">
      <FormInput
        label={t("phone")}
        placeholder={t("phone")}
        name={"phone"}
        value={phone}
        setValue={changeHandler}
        type={"tel"}
      />
      <FormInput
        label={t("email")}
        placeholder={t("email")}
        name={"email"}
        value={email}
        setValue={changeHandler}
        type={"email"}
      />
      <div className={`passwords-inputs flex w-full flex-col gap-5 ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"}  `}>
        <FormInput
          label={t("password")}
          placeholder={t("password")}
          name={"password"}
          value={password}
          setValue={changeHandler}
          type={"password"}
        />
        <FormInput
          label={t("confirm password")}
          placeholder={t("confirm password")}
          name={"confirmPassword"}
          value={confirmPassword}
          setValue={changeHandler}
          type={"password"}
        />
      </div>
      <Button
        type={"button"}
        onClick={() => {
          dispatch(setRegisterLawyerInfo({ name: "step", value: 3 }));
        }}
        variant={"primary"}
        className={"w-2/3 flex items-center justify-center "}
      >
        {t("next")}
      </Button>
    </div>
  );
};
export default StepTwo;
