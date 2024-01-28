"use client";
import { Button } from "@/components/ui/button";
import FormInput from "@/shared/FormItems/FormInput";
import { SelectList } from "@/shared/FormItems/SelectList";
import TextArea from "@/shared/FormItems/TextArea";
import { setRegisterLawyerInfo } from "@/store/features/auth/register-lawyer/registerLawyerSlice";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const StepThree = () => {
  // some categories for testing {labe, value}
  const categories = [
    { label: "category 1", value: "1" },
    { label: "category 2", value: "2" },
  ];
  const { experienceYears, description, category } = useSelector((state) => state.lawyerRegister);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const changeHandler = (e) => {
    dispatch(setRegisterLawyerInfo({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div className=" flex flex-col gap-5 ">
      <div className={` flex items-end gap-5 flex-col ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"} `}>
        <FormInput
          label={t("experience years")}
          placeholder={t("experience years")}
          name={"experienceYears"}
          value={experienceYears}
          setValue={changeHandler}
          type={"number"}
          classList={"w-full md:w-1/2"}
        />
        <div className={` flex text-sm flex-1 flex-col gap-2  ${lng == "ar" && "items-end"} w-full  `}>
          <label
            className="  text-[#101928] font-semibold text-sm "
            htmlFor={name}
          >
            {t("category")}
          </label>
          <SelectList
            list={categories}
            value={category}
            setValue={(value) => {
              dispatch(setRegisterLawyerInfo({ name: "category", value }));
            }}
            placeholder={t("category")}
          />
        </div>
      </div>
      <TextArea
        label={t("Description")}
        placeholder={t("Description")}
        name={"description"}
        value={description}
        setValue={changeHandler}
        classList={"w-full"}
      />
      <Button
        variant={"primary"}
        className={"w-2/3 flex items-center justify-center mx-auto "}
      >
        {t("register")}
      </Button>
    </div>
  );
};
export default StepThree;
