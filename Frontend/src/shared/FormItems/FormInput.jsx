"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
const FormInput = ({ placeholder, value, setValue, label, name, type, classList, disabled }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [passwordInputType, setPasswordInputType] = useState("password");
  return (
    <div className={` flex text-sm ${classList} flex-col gap-2  ${lng == "ar" && "items-end"} w-full  `}>
      <label
        className="  text-[#101928] font-semibold text-sm "
        htmlFor={name}
      >
        {label}
      </label>
      <div className={`input-container border-solid w-full outline-none  border-[#D0D5DD] border-2 rounded-8 px-3 py-1  flex ${lng == "ar" && "flex-row-reverse"} ${disabled && "bg-[#F0F2F5]"}  items-center justify-between gap-2`}>
        <input
          disabled={disabled}
          type={type != "password" ? type : passwordInputType}
          name={name}
          id={name}
          value={value}
          className={` flex-1 outline-none p-1 ${disabled && "bg-[#F0F2F5]"}    ${lng == "ar" && "text-right"} placeholder:text-sm font-medium `}
          onChange={setValue}
          placeholder={placeholder}
        />
        {/* this is the icon */}
        {type == "password" && (
          <span
            className=" cursor-pointer "
            onClick={() => setPasswordInputType(passwordInputType == "password" ? "text" : "password")}
          >
            {passwordInputType == "password" ? (
              <IoEyeSharp
                color="#98A2B3"
                size={17}
              />
            ) : (
              <IoEyeOffSharp
                color="#98A2B3"
                size={17}
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};
export default FormInput;
