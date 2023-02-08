import {
  CalendarHeartIcon,
  ChefIcon,
  ComputerDesktopCheckIcon,
  EditWriteIcon,
  OfferIcon,
  PersonPlusIcon,
  PizzaIcon,
  ServingHandIcon,
} from "../icons";
import Button from "../ui/Button";
import Link from "../ui/Link";

const JoinUs = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-10 py-10">
      <h3 className="text-center text-3xl">
        Станете дел од семејството{" "}
        <span className="text-primary-600">Јади Домашно</span>
      </h3>

      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-600 p-2">
            <PizzaIcon className="h-12 w-12 text-gray-900" />
          </div>

          <p className="text-lg">Сакам да нарачувам храна</p>

          <div className="h-0.5 w-full bg-primary-600" />

          <ul className="flex flex-col items-center justify-center gap-4 px-2 text-center">
            <li className="flex flex-col items-center justify-center gap-2">
              <PersonPlusIcon className="h-7 w-7 text-primary-600" />
              Регистрирајте се на платформата како клиент.
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <CalendarHeartIcon className="h-7 w-7 text-primary-600" />
              Одберете дали сакате веќе подготвена храна или одберете датум на
              кој што сакате да биде подготвена.
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <ComputerDesktopCheckIcon className="h-7 w-7 text-primary-600" />
              Нарачајте брзо и лесно преку нашата платформа!
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <ServingHandIcon className="h-7 w-7 text-primary-600" />
              Подигнeте ја нарачката и уживајте во вкусот на домашната храна.
            </li>
          </ul>

          <Button href="/menu">Нарачајте храна</Button>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-600 p-2">
            <ChefIcon className="h-12 w-12 text-gray-900" />
          </div>

          <p className="text-lg">Сакам да станам готвач</p>

          <div className="h-0.5 w-full bg-primary-600" />

          <ul className="flex flex-col items-center justify-center gap-4 px-2 text-center">
            <li className="flex flex-col items-center justify-center gap-2">
              <ChefIcon className="h-7 w-7 text-primary-600" />
              Регистрирајте се на платформата како готвач.
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <EditWriteIcon className="h-7 w-7 text-primary-600" />
              <div>
                Пополнете го целосно вашиот профил.{" "}
                <Link href="/" underlined>
                  Повеќе информации за уредување на профилот.
                </Link>
              </div>
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <OfferIcon className="h-7 w-7 text-primary-600" />
              Примајте нарачки директно на нашата платформа и гответе вкусни
              јадења!
            </li>

            <li className="flex flex-col items-center justify-center gap-2">
              <ServingHandIcon className="h-7 w-7 text-primary-600" />
              Испорачувајте ги вашите нарачки и заработете.
            </li>
          </ul>

          <Button href="/menu">Станете готвач</Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
