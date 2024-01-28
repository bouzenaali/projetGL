"use client";

import { useTranslation } from "react-i18next";

const TextArea = ({ placeholder, value, setValue, label, name, classList }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <div className={` flex text-sm ${classList} flex-col gap-2  ${lng == "ar" && "items-end"} w-full  `}>
      <label
        className="  text-[#101928] font-semibold text-sm "
        htmlFor={name}
      >
        {label}
      </label>
      <div className={`input-container border-solid w-full outline-none  border-[#D0D5DD] border-2 rounded-8 px-3 py-1  flex ${lng == "ar" && "flex-row-reverse"}   items-center justify-between gap-2`}>
        <textarea
          className={` resize-none  flex-1 outline-none p-1    ${lng == "ar" && "text-right"} placeholder:text-sm font-medium `}
          name={name}
          id={name}
          cols="30"
          rows="10"
          value={value}
          onChange={setValue}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};
export default TextArea;
