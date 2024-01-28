"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import Calendly from "./Calendly";

export function CalendlyPopUp() {
  const { t } = useTranslation();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={"w-full flex items-center justify-center"}
          variant="outline"
        >
          {t("get appointment")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <Calendly url={"https://calendly.com/y_allaoua/dz-mohami"} />
      </DialogContent>
    </Dialog>
  );
}
