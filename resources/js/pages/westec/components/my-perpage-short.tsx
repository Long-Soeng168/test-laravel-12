import React, { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const framework = [
    {
        label: "10",
        value: "10",
      },
      {
        label: "20",
        value: "20",
      },
      {
        label: "30",
        value: "30",
      },
      {
        label: "40",
        value: "40",
      },
      {
        label: "50",
        value: "50",
      },
      {
        label: "60",
        value: "60",
      },
      {
        label: "70",
        value: "70",
      },
      {
        label: "80",
        value: "80",
      },
      {
        label: "90",
        value: "90",
      },
      {
        label: "100",
        value: "100",
      },
];

export function MyPerpageShort() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

  useEffect(() => {
    const selectedValue = searchParams.get("orderBy");
    const selectedObject = framework.find((item) => item.value === selectedValue);
    setValue(selectedObject?.label || "");
  }, [searchParams]);

  const handleSelect = (selectedValue) => {
    const params = new URLSearchParams(window.location.search);

    if (selectedValue) {
      params.set("orderBy", selectedValue);
      params.set("orderDir", "desc");
    } else {
      params.delete("orderBy");
    }

    // Update the URL
    window.history.pushState({}, "", `?${params.toString()}`);
    setSearchParams(params); // update the state to trigger re-render
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[90px] px-2 gap-1 md:gap-2 md:px-4 max-w-[130px] md:min-w-[150px] md:max-w-[200px] justify-between md:py-5"
        >
          <span className="text-[10px] md:text-sm">
            Sort By:{" "}
            <span className={`${value ? "text-blue font-bold" : ""}`}>
              {value || "Select"}
            </span>
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[130px] md:max-w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {framework.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={() => {
                    setValue(item.label);
                    handleSelect(item.value);
                    setOpen(false);
                  }}
                  className="text-[10px] md:text-sm"
                >
                  {item.label}
                  <Check
                    className={`ml-auto ${value === item.label ? "opacity-100" : "opacity-0"}`}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
