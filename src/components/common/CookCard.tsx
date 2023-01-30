import Image from "next/image";
import { BadgeIcon, LocationIcon, StarIcon } from "../icons";
import Button from "../ui/Button";

interface Props {
  name: string;
  imageSrc: string;
  rating: number;
  cuisines: string[];
  location: string;
  href: string;
}

const CookCard = ({
  name,
  imageSrc,
  rating,
  cuisines,
  location,
  href,
}: Props) => {
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
    <div className="relative flex flex-col items-center justify-center shadow-sm">
      <Image
        className="rounded-lg"
        src={imageSrc}
        width="300"
        height="250"
        alt="Поврзување"
      />

      <div className="absolute right-2 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 p-1">
        <BadgeIcon className="h-5 w-5 text-primary-50" />
      </div>

      <div className="-mt-4 flex w-full flex-col gap-1 rounded-lg bg-primary-100 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-lg">{name}</p>

          <div className="flex items-center gap-1">{ratingStars}</div>
        </div>

        <div className="flex justify-between">
          <div>
            {cuisines.map((cuisine, index) => (
              <p key={index} className="text-primary-600">
                {cuisine}
              </p>
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-end gap-1">
              <LocationIcon className="h-4 w-4 text-primary-600" />
              {location}
            </div>

            <Button href={href} intent="outline" size="small">
              Дознајте повеќе
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookCard;
