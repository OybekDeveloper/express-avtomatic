import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

const people = [
  { id: 1, name: "UZ" },
  { id: 2, name: "RU" },
  { id: 3, name: "EN" },
];

export default function Language() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-30">
        <ListboxButton
          className={clsx(
            "relative w-full rounded-lg border border-primaryBg max-md:py-1 py-2 pr-5 pl-3 text-left text-black shadow-lg",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primaryBg",
            "cursor-pointer clamp5 lg:text-md flex justify-between items-center"
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none size-6 lg:size-4 fill-black"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          className={clsx(
            "absolute mt-1 w-30 rounded-md bg-white shadow-lg",
            "max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none",
            "transition duration-200 ease-in-out transform origin-top"
          )}
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className={({ active, selected }) =>
                clsx(
                  "cursor-default select-none relative py-1 pl-10 pr-4 clamp5 lg:text-md",
                  active ? "text-amber-900 bg-amber-100" : "text-gray-900",
                  selected ? "font-medium" : "font-normal"
                )
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={clsx(
                      "block truncate",
                      selected ? "font-semibold" : "font-normal"
                    )}
                  >
                    {person.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
