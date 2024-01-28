"use client";

import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export function FilterDropDown({ isToTop, leftIcon, filterTitle, value, setValue, values, className, label, ...props }) {
  //  const values = [
  //    {
  //      value: "next.js",
  //      label: "Next.js",
  //    },
  //    {
  //      value: "sveltekit",
  //      label: "SvelteKit",
  //    },
  //    {
  //      value: "nuxt.js",
  //      label: "Nuxt.js",
  //    },
  //    {
  //      value: "remix",
  //      label: "Remix",
  //    },
  //    {
  //      value: "astro",
  //      label: "Astro",
  //    },
  //  ];
  //  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className={className}
    >
      <PopoverTrigger asChild>
        <Button
          variant="filterButton"
          role="combobox"
          aria-expanded={open}
          size="sm"
          className={`w-full ${lng == "ar" && "flex-row-reverse"} `}
        >
          {/* this is the left side of the button */}
          <div className={`left-side flex items-center ${lng == "ar" && "flex-row-reverse"}   gap-3 `}>
            {/* this is the icon */}
            {leftIcon && (
              <Image
                src={leftIcon}
                width={38}
                height={38}
                alt="icon"
              />
            )}
            <div className="value-container w-full flex flex-col  gap-1 ">
              <span className={`${lng == "ar" ? "text-end" : "text-start"} inline-block w-full text-text-p text-xs`}>{filterTitle}</span>
              <span className="text-start text-title-color text-xs font-medium ">{value ? values.find((current) => current.value === value)?.label : label}</span>
            </div>
          </div>
          <IoIosArrowDown
            className={` ${!open ? "transform rotate-180" : ""} duration-300   `}
            size={15}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" min-w-full bottom-0 overflow-y-scroll  p-0 ">
        <Command>
          <CommandGroup>
            {values?.map((current) => (
              <CommandItem
                key={current.value}
                value={current.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === current ? "" : currentValue);
                  setOpen(false);
                }}
                className={" flex items-center gap-2 hover:bg-brand-green/20 duration-300 text-small-text-grey text-sm hover:text-darker-grey font-medium "}
              >
                {current.value === value && <FaCheck size={15} />}

                <span>{current.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
