"use client";
import { Button } from "@/components/ui/button";
import { setLawyerAccountInfo } from "@/store/features/lawyer_accout/lawyerAccountSlice";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RiImageAddLine } from "react-icons/ri";
import FormInput from "@/shared/FormItems/FormInput";
import StepOneCart from "@/components/auth/lawyer-register/stepOne/StepOneCart";
const InfoMainContainer = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const dispatch = useDispatch();
  const { image, fullName, wilaya, commune, position } = useSelector((store) => store.lawyerAccount);
  // this is the displayed url image
  let imageUrl = image ? URL.createObjectURL(image) : "/placeholder.png";
  const changeHandler = (name, value) => {
    dispatch(setLawyerAccountInfo({ name, value }));
  };
  return (
    <>
      <div className={`img-container gap-5  w-full flex items-center justify-between ${lng == "ar" && "flex-row-reverse"} `}>
        {/* this is the input container */}
        <div className={`input-container flex flex-col ${lng == "ar" && "items-end"} gap-3   `}>
          <h5 className={`text-[#101928]  ${lng == "ar" && "text-right"}  font-semibold  `}>{t("profile photo")}</h5>
          <span className={` inline-block text-[#667185] font-semibold text-sm   ${lng == "ar" && "text-right"}  `}>{t("photo profile description")}</span>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              changeHandler(e.target.name, e.target.files[0]);
            }}
            id="image"
            className="hidden"
          />
          <Button
            variant={"outline"}
            className={"flex items-center w-fit justify-center gap-2"}
          >
            <label
              htmlFor="image"
              className="w-fit"
            >
              <RiImageAddLine className="inline-block mr-2" />
              <span className="font-semibold">{t("add photo")}</span>
            </label>
          </Button>
        </div>
        {/* this is the image */}
        <Image
          src={imageUrl}
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-contain rounded-8    "
        />
      </div>
      {/* this is the separator */}
      <span className=" inline-block w-full bg-[#8585853D] h-[1px] min-w-full max-w-full min-h-[1px] max-h-[2px] mt-3   "></span>
      {/* those are the inputs */}
      <FormInput
        placeholder={t("full name")}
        label={t("full name")}
        name="fullName"
        value={fullName}
        onChange={(e) => {
          changeHandler(e.target.name, e.target.value);
        }}
      />
      <div className={`inputs-row w-full gap-5  flex items-center flex-col  ${lng == "ar" ? "md:flex-row-reverse" : "md:flex-row"} `}>
        <FormInput
          placeholder={t("wilaya")}
          label={t("wilaya")}
          name="wilaya"
          value={wilaya}
          onChange={(e) => {
            changeHandler(e.target.name, e.target.value);
          }}
        />
        <FormInput
          placeholder={t("commune")}
          label={t("commune")}
          name="commune"
          value={commune}
          onChange={(e) => {
            changeHandler(e.target.name, e.target.value);
          }}
        />
      </div>
      {/* this is the map */}
      <StepOneCart
        handleChange={(position) => {
          changeHandler("position", position);
        }}
        position={position}
      />
      {/* this is the save */}
      <Button
        variant={"primary"}
        className={"mx-auto flex items-center justify-center mt-5 w-1/3 text-center "}
      >
        {t("save")}
      </Button>
    </>
  );
};
export default InfoMainContainer;
