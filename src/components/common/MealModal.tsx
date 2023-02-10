import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, SearchIcon, XMarkIcon } from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import { Meal } from "./MenuCard";
import Image from "next/image";
import Button from "../ui/Button";
import {
  useShoppingCart,
  useShoppingCartActions,
} from "@/utils/useShoppingCart";

const ImageLoading = ({ selectedMeal }: { selectedMeal: Meal | null }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={selectedMeal?.image_url as string}
      width={500}
      height={500}
      alt={selectedMeal?.title as string}
      className={`w-full rounded-lg shadow-md duration-200 ease-in-out ${
        loading ? "scale-95 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
      }`}
      onLoad={() => setLoading(false)}
    />
  );
};

interface Props {
  isMealModalOpen: boolean;
  closeMealModal: () => void;
  selectedMeal: Meal | null;
}

const MealModal = ({
  isMealModalOpen,
  closeMealModal,
  selectedMeal,
}: Props) => {
  const openId = useRef<number>(1);
  const shoppingCart = useShoppingCart();
  const { addToShoppingCart, updateShoppingCartItem } =
    useShoppingCartActions();

  const itemInCart = shoppingCart.find(
    (shoppingCartItem) => shoppingCartItem.id === selectedMeal?.id
  );

  const [productForm, setProductForm] = useState({
    quantity: itemInCart ? itemInCart.quantity : 1,
    date: "",
    time: "",
  });

  const handleProductForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantity = (operation: string, mealId: string) => {
    if (itemInCart) {
      updateShoppingCartItem(mealId as string, operation);
    } else {
      setProductForm((prev) => ({
        ...prev,
        quantity:
          operation === "increment"
            ? prev.quantity + 1
            : prev.quantity === 1
            ? prev.quantity
            : prev.quantity - 1,
      }));
    }
  };

  useEffect(() => {
    if (!open) {
      setTimeout(
        () => setProductForm({ quantity: 1, date: "", time: "" }),
        500
      );
    } else {
      setProductForm({
        quantity: itemInCart ? itemInCart.quantity : 1,
        date: "",
        time: "",
      });
    }
  }, [isMealModalOpen]);

  useEffect(() => {
    setProductForm({
      quantity: itemInCart ? itemInCart.quantity : 1,
      date: "",
      time: "",
    });
  }, [shoppingCart]);

  const handleAddToCart = () => {
    addToShoppingCart({
      ...(selectedMeal as Meal),
      quantity: productForm.quantity,
      date: productForm.date,
      time: productForm.time,
    });
    closeMealModal();
  };

  const handleOnCloseMealModal = () => {
    // setTimeout(() => setProductForm({ quantity: 1, date: "", time: "" }), 500);
    closeMealModal();
  };

  return (
    <Transition appear show={isMealModalOpen} as={Fragment}>
      <Dialog
        key={openId.current}
        as="div"
        className="relative z-30"
        onClose={handleOnCloseMealModal}
      >
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
              <Dialog.Panel className="relative flex h-full w-full max-w-lg transform flex-col gap-4 overflow-y-auto rounded-lg bg-gray-100 p-6 shadow-xl transition-all">
                <div className="grid grid-cols-1 gap-4">
                  <ImageLoading selectedMeal={selectedMeal} />
                  <div className="grid grid-cols-1 gap-2">
                    <p className="text-2xl font-medium">
                      {selectedMeal?.title}
                    </p>
                    <p className="text-lg font-medium text-primary-600">
                      {selectedMeal?.price} ден.
                    </p>
                    <p>{selectedMeal?.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    <p className="font-medium">Алергени</p>
                    {selectedMeal?.allergens
                      .map((allergen) => allergen.label)
                      .join(", ")}
                  </div>
                </div>

                <form className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="font-medium" htmlFor="order-date">
                      Изберете датум за нарачката:
                    </label>
                    <input
                      onChange={handleProductForm}
                      name="date"
                      id="order-date"
                      type="date"
                      className="min-w-[96%] cursor-pointer rounded-lg border-b-2 border-primary-600 bg-gray-50 p-2 shadow-md"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <label className="font-medium" htmlFor="order-time">
                      Изберете време за нарачката:
                    </label>
                    <input
                      name="time"
                      onChange={handleProductForm}
                      id="order-time"
                      type="time"
                      className="min-w-[96%] cursor-pointer rounded-lg border-b-2 border-primary-600 bg-gray-50 p-2 shadow-md"
                    />
                  </div>
                </form>

                <div className="sticky inset-x-0 bottom-0 mt-2 flex gap-4">
                  <div className="flex items-center justify-center gap-1 rounded-lg bg-primary-600">
                    <IconButton
                      onClick={() =>
                        handleQuantity("decrement", selectedMeal?.id as string)
                      }
                      ariaLabel="Избриши еден производ"
                      title="Избриши еден производ"
                      className="rounded-full py-2.5 px-3.5 text-center text-xl"
                      intent="secondary"
                    >
                      <span className="sr-only">Избриши еден производ</span>
                      <MinusIcon className="h-3 w-3" />
                    </IconButton>
                    <p className="font-medium text-primary-50">
                      {productForm.quantity}
                    </p>
                    <IconButton
                      onClick={() =>
                        handleQuantity("increment", selectedMeal?.id as string)
                      }
                      ariaLabel="Додади еден производ"
                      title="Додади еден производ"
                      className="rounded-full py-2.5 px-3.5 text-center text-xl"
                      intent="secondary"
                    >
                      <span className="sr-only">Додади еден производ</span>
                      <PlusIcon className="h-3 w-3" />
                    </IconButton>
                  </div>
                  <Button onClick={handleAddToCart} fullWidth>
                    Во кошничка
                  </Button>
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
