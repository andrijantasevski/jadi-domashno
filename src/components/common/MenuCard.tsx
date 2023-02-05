import Image from "next/image";
import Link from "next/link";
import { HomeIcon, StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

interface Props {}

const MenuCard = ({}: Props) => {
  return (
    <Link href="/" className="relative z-0 w-full">
      <Image
        src="/assets/example-image.png"
        width="350"
        height="250"
        alt="Image"
        className="w-full"
      />

      <div className="relative z-20 -mt-10 flex gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4 shadow-md">
        <Image
          src="/assets/homepage/satisfied-customer1.png"
          width="80"
          height="80"
          alt="Image"
          className="rounded-full border-2 border-primary-600"
        />

        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="flex w-full justify-between">
              <p>{"Салата со брокула"}</p>

              <p className="text-primary-600">300 ден.</p>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) =>
                index < 4 ? (
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
              <p>Битола</p>
            </div>

            <Button
              title="Додадете во кошничка"
              ariaLabel="Додадете производ во кошничка"
              size="small"
            >
              Во кошничка
            </Button>
          </div>
        </div>
      </div>
      <p></p>
    </Link>
  );
};

export default MenuCard;
