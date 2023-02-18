import Image from "next/image";
import { BadgeIcon, LocationIcon, StarIcon } from "../icons";
import Button from "../ui/Button";
import Link from "next/link";

interface City {
  label: string;
  value: string;
}

interface Cuisine {
  label: string;
  value: string;
}

export interface Cook {
  id: string;
  date_created: Date;
  gender: string;
  first_name: string;
  last_name: string;
  cuisines: Cuisine[];
  mainCuisine: string;
  city: City;
  image_url: string;
  rating: number;
  isBadge: boolean;
  numberOfDeliveries: number;
}

interface Props {
  cook: Cook;
}

const CookCard = ({ cook }: Props) => {
  const {
    city,
    cuisines,
    first_name,
    id,
    image_url,
    last_name,
    rating,
    isBadge,
  } = cook;

  const ratingStars = [...Array(5)].map((_, index) =>
    index < rating ? (
      <StarIcon
        key={index}
        className="h-4 w-4 fill-primary-600 text-primary-600"
      />
    ) : (
      <StarIcon key={index} className="h-4 w-4 text-primary-600" />
    )
  );

  return (
    <Link
      href={`/cooks/${id}`}
      className="relative flex flex-col items-center justify-center"
    >
      <Image
        className="w-full rounded-lg lg:max-w-full"
        src={image_url}
        width="300"
        height="250"
        alt="Поврзување"
      />

      {isBadge && (
        <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 p-1">
          <BadgeIcon className="h-5 w-5 text-primary-50" />
        </div>
      )}

      <div className="-mt-4 flex w-full flex-col gap-1 rounded-lg border-b-2 border-primary-600 bg-gray-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-lg">
            {first_name} {last_name}
          </p>

          <div className="flex items-center gap-1">{ratingStars}</div>
        </div>

        <div className="flex justify-between">
          <div>
            {cuisines?.slice(0, 3).map((cuisine, index) => (
              <p key={index} className="capitalize text-primary-600">
                {cuisine.label}
              </p>
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-end gap-1 capitalize">
              <LocationIcon className="text-cap h-4 w-4 text-primary-600" />
              {city?.label}
            </div>

            <Button size="small">Дознајте повеќе</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CookCard;
