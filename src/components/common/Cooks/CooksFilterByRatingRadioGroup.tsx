import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QueriesCooks } from "@/pages/cooks";

interface Rating {
  id: number;
  ratingValue: number;
}

const ratings = [
  {
    id: 1,
    ratingValue: 3,
  },
  {
    id: 2,
    ratingValue: 4,
  },
  {
    id: 3,
    ratingValue: 5,
  },
];

interface SingleRatingOption {
  rating: Rating;
}

const SingleRatingOption = ({ rating }: SingleRatingOption) => {
  const { ratingValue } = rating;
  return (
    <>
      <RadioGroup.Label className="sr-only font-medium text-gray-900">
        {`${ratingValue} ѕвезди`}
      </RadioGroup.Label>
      <RadioGroup.Option
        as="div"
        value={ratingValue}
        title={`${ratingValue} ѕвезди`}
      >
        {({ checked }) => (
          <div className="group flex cursor-pointer items-center justify-between px-1 transition-colors hover:text-primary-600">
            <div className="flex items-center gap-2">
              {[...Array(ratingValue)].map((_, index) => (
                <StarIcon
                  className="h-5 w-5 fill-primary-600 text-primary-600"
                  key={index}
                />
              ))}
            </div>

            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400">
              <div
                className={`h-4 w-4 rounded-full transition-colors group-hover:bg-primary-600 ${
                  checked ? "bg-primary-600" : "bg-transparent"
                }`}
              />
            </div>
          </div>
        )}
      </RadioGroup.Option>
    </>
  );
};

interface Props {
  queriesCooks: QueriesCooks;
}

const CooksFilterByRatingRadioGroup = ({ queriesCooks }: Props) => {
  const router = useRouter();

  const ratingDefaultValue = queriesCooks?.rating
    ? Number(queriesCooks.rating)
    : 0;
  const [selectedRating, setSelectedRating] = useState(ratingDefaultValue);

  useEffect(() => {
    if (selectedRating !== 0) {
      router.push({
        pathname: "/cooks",
        query: {
          ...router.query,
          rating: selectedRating,
        },
      });
    }
  }, [selectedRating]);

  return (
    <div className="grid grid-cols-1 gap-2">
      <p className="px-1">Покажи по оцени:</p>
      <RadioGroup
        value={selectedRating}
        onChange={setSelectedRating}
        as="div"
        className="flex flex-col gap-3"
      >
        {ratings.map((rating) => (
          <SingleRatingOption key={rating.id} rating={rating} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CooksFilterByRatingRadioGroup;
