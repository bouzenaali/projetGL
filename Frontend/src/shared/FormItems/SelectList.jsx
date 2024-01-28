"use client";

import * as React from "react";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
export function SelectList({ list, value, setValue, placeholder }) {
  const [open, setOpen] = React.useState(false);
  const { i18n, t } = useTranslation();
  const lng = i18n.language;
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="filterButton"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between ${lng == "ar" ? "flex-row-reverse" : "flex-row"}  `}
        >
          {value ? list.find((framework) => framework.value === value)?.label : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {list?.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
