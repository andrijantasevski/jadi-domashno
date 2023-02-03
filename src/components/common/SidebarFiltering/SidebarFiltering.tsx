import FilterByLocationComboBox from "./FilterByLocationComboBox";
import { RadioGroup } from "@headlessui/react";

const FilterByAvailabilityRadioGroup = () => {
  return (
    <RadioGroup as="div" className="flex flex-col gap-2">
      <RadioGroup.Label className="sr-only font-medium text-gray-900">
        Достапност
      </RadioGroup.Label>
    </RadioGroup>
  );
};

const SidebarFiltering = () => {
  return (
    <aside className="w-80 shrink-0 px-4">
      <div className="rounded-lg bg-gray-50 p-4 shadow-md">
        <FilterByLocationComboBox />
        <FilterByAvailabilityRadioGroup />
      </div>
    </aside>
  );
};

export default SidebarFiltering;
