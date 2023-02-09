import * as SliderPrimitive from "@radix-ui/react-slider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useDebounce from "@/utils/useDebounce";
import { Queries } from "@/pages/menu";
import { MinMaxPrices } from "@/utils/getMinMaxPrice";

interface Props {
  queries: Queries;
  minMaxPrices: MinMaxPrices;
}

const FilterByPriceSlider = ({ queries, minMaxPrices }: Props) => {
  const router = useRouter();
  const { minPrice, maxPrice } = minMaxPrices;
  const priceDefaultValue = queries.price
    ? [Number(queries.price)]
    : [minPrice];
  const [price, setPrice] = useState(priceDefaultValue);
  const [priceDebounced] = useDebounce(price, 300);

  useEffect(() => {
    if (priceDebounced !== 250) {
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

  useEffect(() => {
    if (!router.query.price) {
      setPrice(priceDefaultValue);
    }
  }, [router.query.price]);

  return (
    <div className="grid grid-cols-1 gap-1 px-1">
      <p>Филтрирај по цена</p>

      <SliderPrimitive.Root
        onValueChange={(value) => setPrice(value)}
        value={price}
        min={minPrice}
        max={maxPrice}
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
        <p className="text-sm text-gray-500">{minPrice} ден.</p>

        <p className="text-sm text-gray-500">{maxPrice} ден.</p>
      </div>
    </div>
  );
};

export default FilterByPriceSlider;
