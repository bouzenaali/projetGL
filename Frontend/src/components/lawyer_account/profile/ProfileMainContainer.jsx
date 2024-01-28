"use client";
import { set } from "date-fns";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setLawyerAccountInfo } from "@/store/features/lawyer_accout/lawyerAccountSlice";
import FormInput from "@/shared/FormItems/FormInput";
import { SelectList } from "@/shared/FormItems/SelectList";
import TextArea from "@/shared/FormItems/TextArea";
import { Button } from "@/components/ui/button";
const ProfileMainContainer = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const lng = i18n.language;
  const { experienceYears, category, description } = useSelector((store) => store.lawyerAccount);
  const changeHandler = (e) => {
    dispatch(setLawyerAccountInfo({ name: e.target.name, value: e.target.value }));
  };
  // some categories for testing {label , value}
  const categories = [
    { label: "category 1", value: "category 1" },
    { label: "category 2", value: "category 2" },
    { label: "category 3", value: "category 3" },
    { label: "category 4", value: "category 4" },
  ];

  return (
    <>
      <div className={`inputs-container flex flex-col gap-5 items-center w-full fle-col ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"} `}>
        <FormInput
          value={experienceYears}
          setValue={changeHandler}
          type={"number"}
          name={"experienceYears"}
          label={t("experience years")}
          placeholder={t("experience years")}
          className={"w-full"}
        />
        <div className={` flex text-sm w-full md:min-w-1/2 flex-col gap-2  ${lng == "ar" && "items-end"} w-full  `}>
          <label
            className="  text-[#101928] font-semibold text-sm "
            htmlFor={"category"}
          >
            {t("category")}
          </label>
          <SelectList
            list={categories}
            value={category}
            setValue={(category) => dispatch(setLawyerAccountInfo({ name: "category", value: category }))}
            placeholder={t("category")}
          />
        </div>
      </div>
      <TextArea
        value={description}
        setValue={changeHandler}
        name={"description"}
        label={t("Description")}
        placeholder={t("Description")}
        className={"w-full"}
      />

      {/* this is the submit button */}
      <Button
        className={"flex mx-auto w-1/3 items-center justify-center"}
        variant={"primary"}
      >
        {t("save")}
      </Button>
    </>
  );
};
export default ProfileMainContainer;
