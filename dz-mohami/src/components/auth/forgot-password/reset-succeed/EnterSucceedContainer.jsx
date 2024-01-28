"use client";
import { Button } from "@/components/ui/button";
import { GoCheckCircle } from "react-icons/go";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const EnterSucceedContainer = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col gap-5 items-center justify-center   ">
      <GoCheckCircle
        className="text-[#1FE32C]   "
        size={80}
      />
      <h3 className=" text-[#1B1818] font-bold text-xl w-full text-center    ">{t("reset password succeed")}</h3>
      <Button
        variant="primary"
        className={"w-full flex items-center justify-center"}
      >
        <Link href={"/auth/login"}>{t("login")}</Link>
      </Button>
    </div>
  );
};
export default EnterSucceedContainer;
