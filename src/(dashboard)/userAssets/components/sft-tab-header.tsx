import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const sfts = [
  {
    value: "rooch",
    label: "Rooch",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const SftTabHeader = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          size="sm"
          aria-expanded={open}
          className="w-full md:w-[150px] justify-between rounded-lg font-semibold md:font-bold text-base"
        >
          {value
            ? sfts.find((sft) => sft.value === value)?.label
            : "Select SFTs..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Search SFT..." className="h-9" />
          <CommandEmpty>No SFT found.</CommandEmpty>
          <CommandGroup>
            {sfts.map((sft) => (
              <CommandItem
                key={sft.value}
                value={sft.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {sft.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === sft.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
