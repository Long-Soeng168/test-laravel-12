import * as React from "react";
import { Check } from "lucide-react";
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const languages = [
  { id: "en", name: "English", flag: "assets/demo-images/usa.png" },
  { id: "kh", name: "Khmer", flag: "assets/demo-images/kh.png" },
];

export function MyLanguageSelector() {
  const [selectedLang, setSelectedLang] = React.useState(languages[0]); // Default: English
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="justify-between border-0 rounded-0">
          <img src={selectedLang.flag} alt={selectedLang.name} className="w-8 h-6 rounded-0" />
          <span className="mx-1 text-color font-proxima-nova-bold">{selectedLang.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-0">
        <Command>
          <CommandGroup>
            {languages.map((lang) => (
              <CommandItem
                key={lang.id}
                onSelect={() => {
                  setSelectedLang(lang);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 text-color font-proxima-nova-bold"
              >
                <img src={lang.flag} alt={lang.name} className="w-8 h-6 rounded-0" />
                <span className="text-sm">{lang.name}</span>
                {selectedLang.id === lang.id && <Check className="ml-auto h-4 w-4 text-primary" />}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
