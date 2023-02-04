import { Queries } from "@/pages/menu";
import FilterByLocationComboBox from "./FilterByLocationComboBox";
import FilterByAvailabilityRadioGroup from "./FilterByAvailabilityRadioGroup";
import FilterByPriceSlider from "./FilterByPriceSlider";
import FilterByAllergensCheckboxes from "./FilterByAllergensCheckboxes";
import FilterByRatingRadioGroup from "./FilterByRatingRadioGroup";

interface Props {
  queries: Queries;
}

const SidebarFiltering = ({ queries }: Props) => {
  return (
    <aside className="hidden w-80 shrink-0 px-4 lg:block xl:w-96">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-5 shadow-md">
        <FilterByLocationComboBox queries={queries} />
        <FilterByAvailabilityRadioGroup queries={queries} />
        <FilterByPriceSlider queries={queries} />
        <FilterByAllergensCheckboxes queries={queries} />
        <FilterByRatingRadioGroup queries={queries} />
      </div>
    </aside>
  );
};

export default SidebarFiltering;
