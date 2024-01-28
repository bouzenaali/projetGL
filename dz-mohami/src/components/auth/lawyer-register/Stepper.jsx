"use client";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
const Stepper = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const { step: currentStep } = useSelector((store) => store.lawyerRegister);
  const steps = [
    {
      stepTitle: "informations",
      stepDescription: "Put your infos",
      step: 1,
    },

    {
      stepTitle: "Security",
      stepDescription: "Secure your account",
      step: 2,
    },
    {
      stepTitle: "Profile",
      stepDescription: "Create your profile",
      step: 3,
    },
  ];
  return (
    <div className={` w-full flex gap-3 items-center  justify-between ${lng == "ar" && "flex-row-reverse"}  `}>
      {steps.map((step, index) => (
        <>
          <SingleStep
            key={index}
            step={step.step}
            stepTitle={t(step.stepTitle)}
            stepDescription={t(step.stepDescription)}
            currentStep={currentStep}
            lng={lng}
          />
          {/* this is the separator between steps , check the step to precise the bg- color */}
          {index !== steps.length - 1 && <div className={`  h-0.5 w-full ${step.step < currentStep ? "bg-pink-brand" : "bg-[#0000000F]"}  `}></div>}
        </>
      ))}
    </div>
  );
};
export default Stepper;
// this is a single Step
const SingleStep = ({ step, stepTitle, stepDescription, currentStep, lng }) => {
  return (
    <div className={`single-step flex gap-2 min-w-fit w-fit ${lng == "ar" && "flex-row-reverse"}  `}>
      <span className={` rounded-full  h-14 w-14 flex   min-w-10 max-w-10 min-h-10 max-h-10  font-bold items-center justify-center  ${step == currentStep ? "bg-pink-brand text-white" : currentStep > step ? " bg-pink-secondary text-pink-brand   " : currentStep > step ? " text-pink-brand bg-pink-secondary  " : " text-[#858585] bg-[#0000000F] "}  `}>
        {step >= currentStep && step}
        {step < currentStep && <FaCheck size={18} />}
      </span>
      <div className="step-info-container  hidden md:flex flex-col gap-2 ">
        <span className={` font-semibold text-sm ${lng == "ar" && "text-end"} ${step == currentStep ? " text-[#000000E0]   " : "   text-[#858585]"} duration-300  `}>{stepTitle}</span>
        <span className={` font-medium text-sm ${lng == "ar" && "text-end"} ${step == currentStep ? " text-[#000000E0]   " : "   text-[#858585]"} duration-300  `}>{stepDescription}</span>
      </div>
    </div>
  );
};
