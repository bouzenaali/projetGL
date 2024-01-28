"use client";
import { useTranslation } from "react-i18next";
import Stepper from "./Stepper";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterLawyerInfo } from "@/store/features/auth/register-lawyer/registerLawyerSlice";
import FormInput from "@/shared/FormItems/FormInput";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
const LawyerRegisterMainContainer = () => {
  const { t } = useTranslation("lawyer-register");
  const { step, email, fullName, wilaya, commune } = useSelector((state) => state.lawyerRegister);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(setRegisterLawyerInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <h3 className="  capitalize text-[#1B1818] font-bold text-xl w-full text-center    ">{t("register")}</h3>
      <p className=" w-full  capitalize text-center text-[#645D5D] text-sm  ">{t("register description")}</p>

      <Stepper />
      {/* this is the first inputs row */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
};
export default LawyerRegisterMainContainer;
