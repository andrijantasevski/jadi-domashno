import { QueriesCooks } from "@/pages/cooks";
import CooksFilterByLocationCombobox from "./CooksFilterByLocationCombobox";
import CooksFilterByRatingRadioGroup from "./CooksFilterByRatingRadioGroup";
import CooksFilterByCuisine from "./CooksFilterByCuisine";
import EmptyQueriesButton from "../EmptyQueriesButton";

interface Props {
  queriesCooks: QueriesCooks;
}

const CooksSidebarFiltering = ({ queriesCooks }: Props) => {
  return (
    <aside className="hidden w-80 shrink-0 lg:block xl:w-96">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-5 shadow-md">
        <CooksFilterByLocationCombobox queriesCooks={queriesCooks} />
        <CooksFilterByRatingRadioGroup queriesCooks={queriesCooks} />
        <CooksFilterByCuisine queriesCooks={queriesCooks} />
        <EmptyQueriesButton pathname="/cooks" />
      </div>
    </aside>
  );
};

export default CooksSidebarFiltering;
