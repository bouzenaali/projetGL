"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
export function DatePicker({ date, setDate, leftIcon }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="filterButton"
          size="sm"
          className={`${lng == "ar" && "flex-row-reverse"} w-full`}
        >
          {/* this is the left side of the button */}
          <div className={`left-side flex ${lng == "ar" && "flex-row-reverse"} items-center gap-3  `}>
            {/* this is the icon */}
            {leftIcon && (
              <Image
                src={leftIcon}
                width={38}
                height={38}
              />
            )}
            <div className="value-container w-full flex flex-col  gap-1 ">
              <span className={`${lng == "ar" ? "text-end" : "text-start"} text-text-p text-xs inline-block w-full`}>{t("date")}</span>
              <span className="text-start text-title-color text-xs font-medium "> {date ? format(date, "PPP") : <span>{t("select date")}</span>}</span>
            </div>
          </div>
          <CalendarIcon
            className=" h-4 w-4"
            color="#515151"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
