import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ValueCard = ({ title, description, imageSrc }: ValueCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Image src={imageSrc} width="250" height="250" alt="Поврзување" />
      <h3 className="font-bad-script text-2xl">{title}</h3>
      <p className="text-gray-900">{description}</p>
    </div>
  );
};

const OurValues = () => {
  return (
    <section className="mx-auto flex w-11/12 flex-col items-center justify-center gap-10 py-10">
      <SectionTitle>Нашите вредности</SectionTitle>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20">
        <ValueCard
          imageSrc="/assets/homepage/povrzuvanje.png"
          title="Поврзување"
          description="Вистински луѓе. Автентична љубов."
        />
        <ValueCard
          imageSrc="/assets/homepage/spodeluvanje-srekja.png"
          title="Споделување на радост"
          description="Уживајте во заедницата преку храна."
        />
        <ValueCard
          imageSrc="/assets/homepage/kulinarski-mozhnosti.png"
          title="Кулинарски можности"
          description="Зајакнување на домашните готвачи."
        />
      </div>

      <Button href="/how-it-functions/foodies">Дознајте повеќе за нас</Button>
    </section>
  );
};

export default OurValues;
