import { Queries } from "@/pages/menu";
import FilterByLocationComboBox from "./FilterByLocationComboBox";
import FilterByAvailabilityRadioGroup from "./FilterByAvailabilityRadioGroup";
import FilterByPriceSlider from "./FilterByPriceSlider";
import FilterByAllergensCheckboxes from "./FilterByAllergensCheckboxes";
import FilterByRatingRadioGroup from "./FilterByRatingRadioGroup";
import FilterByDeliveryRadioGroup from "./FilterByDeliveryRadioGroup";
import { MinMaxPrices } from "@/utils/getMinMaxPrice";
import EmptyQueriesButton from "../EmptyQueriesButton";

interface Props {
  queries: Queries;
  minMaxPrices: MinMaxPrices;
}

const SidebarFiltering = ({ queries, minMaxPrices }: Props) => {
  return (
    <aside className="hidden w-80 shrink-0 lg:block xl:w-96">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-5 shadow-md">
        <FilterByLocationComboBox queries={queries} />
        <FilterByAvailabilityRadioGroup queries={queries} />
        <FilterByPriceSlider queries={queries} minMaxPrices={minMaxPrices} />
        <FilterByAllergensCheckboxes queries={queries} />
        <FilterByRatingRadioGroup queries={queries} />
        <FilterByDeliveryRadioGroup queries={queries} />
        <EmptyQueriesButton pathname="/menu" />
      </div>
    </aside>
  );
};

export default SidebarFiltering;
