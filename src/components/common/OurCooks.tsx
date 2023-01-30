import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import CookCard from "./CookCard";

const OurCooks = () => {
  return (
    <section className="mx-auto flex w-11/12 flex-col items-center justify-center gap-10 py-10">
      <SectionTitle>
        <span className="hidden lg:inline-block">
          Запознајте ги нашите готвачи
        </span>
        <span className="lg:hidden">Нашите готвачи</span>
      </SectionTitle>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20">
        <CookCard
          href=""
          cuisines={["Македонска", "Италијанска", "Шпанска"]}
          rating={3}
          imageSrc="/assets/homepage/cook-example.jpg"
          name="Софија Стојановa"
          location="Скопје"
        />
        <CookCard
          href=""
          cuisines={["Македонска", "Италијанска", "Шпанска"]}
          rating={4}
          imageSrc="/assets/homepage/cook-example.jpg"
          name="Петар Петровски"
          location="Битола"
        />
        <CookCard
          href=""
          cuisines={["Македонска", "Италијанска", "Шпанска"]}
          rating={5}
          imageSrc="/assets/homepage/cook-example.jpg"
          name="Јонас Јоновски"
          location="Охрид"
        />
      </div>

      <Button href="/cooks">Кон готвачи</Button>
    </section>
  );
};

export default OurCooks;
