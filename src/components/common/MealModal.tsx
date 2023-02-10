import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon, XMarkIcon } from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import { Meal } from "./MenuCard";
import Image from "next/image";
import Button from "../ui/Button";

interface Props {
  isMealModalOpen: boolean;
  closeMealModal: () => void;
  selectedMeal: Meal | null;
}

const ImageLoading = ({ selectedMeal }: { selectedMeal: Meal | null }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="">
      <Image
        src={selectedMeal?.image_url as string}
        width={500}
        height={500}
        alt={selectedMeal?.title as string}
        className={`w-full rounded-lg object-cover shadow-md duration-300 ease-in-out group-hover:opacity-75 ${
          loading
            ? "scale-95 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

const MealModal = ({
  isMealModalOpen,
  closeMealModal,
  selectedMeal,
}: Props) => {
  return (
    <Transition appear show={isMealModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeMealModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative h-full w-full max-w-lg transform rounded-lg bg-gray-100 p-6 shadow-xl transition-all">
                <div className="grid grid-cols-1 gap-4">
                  <ImageLoading selectedMeal={selectedMeal} />
                  <p className="text-2xl font-medium">{selectedMeal?.title}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <Button fullWidth>Во кошничка</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MealModal;
