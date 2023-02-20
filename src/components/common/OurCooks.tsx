import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import CookCard, { Cook } from "./CookCard";

interface Props {
  cooks: Cook[];
}

const OurCooks = ({ cooks }: Props) => {
  const cooksToDisplay = cooks.filter((cook) => cook.rating === 5).slice(0, 3);

  return (
    <section className="mx-auto flex w-11/12 flex-col items-center justify-center gap-10 py-10">
      <SectionTitle>
        <span className="hidden lg:inline-block">
          Запознајте ги нашите готвачи
        </span>
        <span className="lg:hidden">Нашите готвачи</span>
      </SectionTitle>

      <div className="grid w-full grid-cols-1 gap-10 lg:w-auto lg:grid-cols-3 lg:gap-20">
        {cooksToDisplay.map((cook) => (
          <CookCard key={cook.id} cook={cook} />
        ))}
      </div>

      <Button href="/cooks">Кон готвачи</Button>
    </section>
  );
};

export default OurCooks;
