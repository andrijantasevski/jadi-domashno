import Image from "next/image";
import Link from "next/link";
import { HomeIcon, StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

interface LabelValue {
  label: string;
  value: string;
}

export interface Meal {
  id: string;
  date_created: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
  cuisine: LabelValue;
  availability: LabelValue;
  price: number;
  delivery_type: LabelValue;
  day_available: number;
  allergens: LabelValue[];
  cook_id: string;
  cook_avatar: string;
  city: LabelValue;
}

interface Props {
  meal: Meal;
  openMealModal: (meal: Meal) => void;
}

const MenuCard = ({ meal, openMealModal }: Props) => {
  const { title, image_url, rating, price, city, cook_avatar, id } = meal;
  return (
    <div
      onClick={() => openMealModal(meal)}
      className="relative z-0 w-full cursor-pointer"
    >
      <Image
        src={image_url}
        width="350"
        height="250"
        alt="Image"
        className="w-full rounded-lg"
      />

      <div className="relative z-20 -mt-2 flex gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4 shadow-md">
        <Image
          src={cook_avatar}
          width="80"
          height="80"
          alt="Image"
          className="h-20 w-20 self-center rounded-full border-2 border-primary-600 object-cover"
        />

        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="flex w-full justify-between">
              <p>{title}</p>

              <p className="shrink-0 text-primary-600">{price} ден.</p>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) =>
                index < rating ? (
                  <StarIcon
                    key={index}
                    className="h-4 w-4 fill-primary-600 text-primary-600"
                  />
                ) : (
                  <StarIcon key={index} className="h-4 w-4 text-primary-600" />
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <HomeIcon className="block h-5 w-5 text-primary-600" />
              <p className="capitalize">{city.label}</p>
            </div>

            <Button
              title="Додадете во кошничка"
              ariaLabel="Додадете производ во кошничка"
              size="small"
            >
              Избери
            </Button>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default MenuCard;
