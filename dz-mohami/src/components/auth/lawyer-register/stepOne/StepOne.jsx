"use client";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterLawyerInfo } from "@/store/features/auth/register-lawyer/registerLawyerSlice";
import FormInput from "@/shared/FormItems/FormInput";
import "leaflet/dist/leaflet.css";
import StepOneCart from "./StepOneCart";
import { Button } from "@/components/ui/button";
const StepOne = () => {
  const { t } = useTranslation("lawyer-register");
  const { fullName, wilaya, commune, position } = useSelector((state) => state.lawyerRegister);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(setRegisterLawyerInfo({ name: e.target.name, value: e.target.value }));
  };
  const positionChangeHandler = (newPosition) => {
    dispatch(setRegisterLawyerInfo({ name: "position", value: newPosition }));
  };
  return (
    <div className=" flex flex-col gap-5 items-center justify-center ">
      {/* this is the first inputs row */}
      <div className="first-inputs-row w-full  flex flex-col gap-5 md:flex-row">
        <FormInput
          label={t("full name")}
          placeholder={t("full name")}
          name={"fullName"}
          value={fullName}
          setValue={changeHandler}
        />
      </div>
      <div className="first-inputs-row  w-full flex flex-col gap-5 md:flex-row">
        <FormInput
          label={t("wilaya")}
          placeholder={t("wilaya")}
          name={"wilaya"}
          value={wilaya}
          setValue={changeHandler}
        />
        <FormInput
          label={t("commune")}
          placeholder={t("commune")}
          name={"commune"}
          value={commune}
          setValue={changeHandler}
        />
      </div>
      {/* this is the map */}
      <StepOneCart
        handleChange={positionChangeHandler}
        position={position}
      />
      {/* this the button */}
      <Button
        type={"button"}
        variant={"primary"}
        onClick={() => {
          dispatch(setRegisterLawyerInfo({ name: "step", value: 2 }));
        }}
        className={"flex items-center justify-center w-1/2"}
      >
        {t("next")}
      </Button>
    </div>
  );
};
export default StepOne;
