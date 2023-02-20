import Image from "next/image";

interface SatisfiedCustomerCardProps {
  imageSrc: string;
  comment: string;
  customer: string;
}

const SatisfiedCustomerCard = ({
  imageSrc,
  comment,
  customer,
}: SatisfiedCustomerCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg p-10 shadow-lg transition-shadow hover:shadow-md">
      <Image src={imageSrc} width="200" height="200" alt="Задоволна странка" />

      <p>{comment}</p>

      <p className="text-center text-lg">{customer}</p>
    </div>
  );
};

const SatisfiedCustomers = () => {
  return (
    <section className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-10 py-10 lg:grid-cols-3 lg:gap-20">
      <SatisfiedCustomerCard
        imageSrc="/assets/homepage/satisfied-customer1.png"
        comment=",,Највкусната домашна храна што сум ја пробала! Едвај чекам да пробам уште многу вкусни јадења.’’"
        customer="Мила Крстева, 32 години"
      />
      <SatisfiedCustomerCard
        imageSrc="/assets/homepage/satisfied-customer2.png"
        comment=",,Јади домашно е најдобро нешто од мојот студенски живот во Скопје!’’"
        customer="Лара Миланова, 22 години"
      />
      <SatisfiedCustomerCard
        imageSrc="/assets/homepage/satisfied-customer3.png"
        comment=",,Ни еден ресторан не може да го замени вкусот на домашно тавче гравче. Браво Јади домашно!!! ’’"
        customer="Миле Венковски, 40 години"
      />
    </section>
  );
};

export default SatisfiedCustomers;
