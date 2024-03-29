import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FilterIcon, XMarkIcon } from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/Button";
import CooksFilterByLocationCombobox from "./CooksFilterByLocationCombobox";
import CooksFilterByRatingRadioGroup from "./CooksFilterByRatingRadioGroup";
import CooksFilterByCuisine from "./CooksFilterByCuisine";
import { QueriesCooks } from "@/pages/cooks";
import EmptyQueriesButton from "../EmptyQueriesButton";

interface Props {
  queriesCooks: QueriesCooks;
}

const CooksMobileDialogFiltering = ({ queriesCooks }: Props) => {
  const [isFilteringMenuOpen, setIsFilteringMenuOpen] = useState(false);

  const openFilteringMenu = () => setIsFilteringMenuOpen(true);

  const closeFilteringMenu = () => setIsFilteringMenuOpen(false);

  return (
    <div className="lg:hidden">
      <Button onClick={openFilteringMenu}>
        <FilterIcon className="h-4 w-4 text-inherit" />
        Филтри
      </Button>
      <Transition.Root appear show={isFilteringMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeFilteringMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="relative flex h-full flex-col gap-6 overflow-y-auto bg-gray-100 pt-4 pb-6 shadow-xl lg:pt-6">
                      <div className="flex justify-end px-4 lg:px-6">
                        <IconButton
                          onClick={closeFilteringMenu}
                          title="Затвори мени"
                          ariaLabel="Затвори мени"
                        >
                          <span className="sr-only">Затвори мени</span>
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </div>

                      <div className="grid grid-cols-1 gap-6 px-4 lg:px-6">
                        <CooksFilterByLocationCombobox
                          queriesCooks={queriesCooks}
                        />
                        <CooksFilterByRatingRadioGroup
                          queriesCooks={queriesCooks}
                        />
                        <CooksFilterByCuisine queriesCooks={queriesCooks} />

                        <EmptyQueriesButton pathname="/cooks" />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default CooksMobileDialogFiltering;
