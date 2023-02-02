import { NextPage } from "next";
import "@splidejs/react-splide/css";
import "dayjs/locale/mk";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderDays from "@/components/common/SliderDays";
import SliderFoodCategories from "@/components/common/SliderFoodCategories";

const Menu: NextPage = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <SectionTitle>Мени</SectionTitle>
      </div>

      <section className="mx-auto w-11/12 max-w-2xl pb-10">
        <SliderDays />
      </section>

      <section className="mx-auto w-11/12 pb-10 lg:max-w-4xl xl:max-w-5xl">
        <SliderFoodCategories />
      </section>
    </>
  );
};

export default Menu;
