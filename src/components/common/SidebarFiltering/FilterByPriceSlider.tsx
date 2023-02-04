import * as SliderPrimitive from "@radix-ui/react-slider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useDebounce from "@/utils/useDebounce";
import { Queries } from "@/pages/menu";

interface Props {
  queries: Queries;
}

const FilterByPriceSlider = ({ queries }: Props) => {
  const router = useRouter();
  const priceDefaultValue = queries.price ? [Number(queries.price)] : [-1];
  const [price, setPrice] = useState(priceDefaultValue);
  const [priceDebounced] = useDebounce(price, 300);

  useEffect(() => {
    if (priceDebounced !== -1) {
      router.push(
        {
          pathname: "/menu",
          query: { ...router.query, price: priceDebounced },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [priceDebounced]);

  return (
    <div className="grid grid-cols-1 gap-1 px-1">
      <p>Филтрирај по цена</p>

      <SliderPrimitive.Root
        onValueChange={(value) => setPrice(value)}
        value={price}
        max={100}
        step={1}
        aria-label="value"
        className="relative flex h-5 w-full touch-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-gray-400">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary-600" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={
            "block h-5 w-5 cursor-pointer rounded-full bg-primary-600 transition-colors hover:bg-primary-700"
          }
        />
      </SliderPrimitive.Root>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">0 ден.</p>

        <p className="text-sm text-gray-500">100 ден.</p>
      </div>
    </div>
  );
};

export default FilterByPriceSlider;
