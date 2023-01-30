import { ChefIcon, HeartIcon, FoodBowlIcon } from "../icons";

const StatisticsHome = () => {
  return (
    <section className="mx-auto flex w-11/12 flex-col gap-10 py-10">
      <hr className="border border-primary-600" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
        <div className="flex flex-col items-center justify-center">
          <HeartIcon className="mb-2 h-10 w-10 text-gray-500" />

          <p className="text-3xl text-primary-600">10 501+</p>

          <p className="font-bad-script text-xl">задоволни клиенти</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <FoodBowlIcon className="mb-2 h-10 w-10 text-gray-500" />

          <p className="text-3xl text-primary-600">13 765+</p>

          <p className="font-bad-script text-xl">подготвени јадења</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ChefIcon className="mb-2 h-10 w-10 text-gray-500" />

          <p className="text-3xl text-primary-600">864 +</p>

          <p className="font-bad-script text-xl">среќни готвачи</p>
        </div>
      </div>
      <hr className="border border-primary-600" />
    </section>
  );
};

export default StatisticsHome;
