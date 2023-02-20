import { Cook } from "@/components/common/CookCard";
import {
  ChevronRight,
  FacebookIcon,
  HeartIcon,
  InformationIcon,
  LocationIcon,
  MessageIcon,
  OfferIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  TwitterIcon,
  XMarkIcon,
  YouTubeIcon,
} from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import fetchCook from "@/utils/fetchCook";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useFavoriteCooks from "@/utils/useFavoriteCooks";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Meal } from "@/components/common/MenuCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import dayjs from "dayjs";
import "@splidejs/react-splide/css";
import "dayjs/locale/mk";
import MealModal from "@/components/common/MealModal";

interface MessageModalProps {
  isMessageModalOpen: boolean;
  closeMessageModal: () => void;
  cook: Cook;
}

interface MessageFormData {
  name: string;
  email: string;
  message: string;
}

const MessageModal = ({
  isMessageModalOpen,
  closeMessageModal,
  cook,
}: MessageModalProps) => {
  const { first_name } = cook;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageFormData>();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit: SubmitHandler<MessageFormData> = (data) => {
    reset();
    setIsMessageSent(true);
  };

  return (
    <Transition appear show={isMessageModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeMessageModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative grid w-full max-w-xl grid-cols-1 gap-4 rounded-2xl bg-gray-100 p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-medium">
                    Испратете порака до {first_name}
                  </Dialog.Title>

                  <IconButton
                    onClick={closeMessageModal}
                    title="Затворете праќање на порака"
                    ariaLabel="Затворете праќање на порака"
                  >
                    <span className="sr-only">Затворете праќање на порака</span>
                    <XMarkIcon className="h-4 w-4" />
                  </IconButton>
                </div>

                {isMessageSent ? (
                  <div className="flex h-full w-full items-center justify-center">
                    Успешно испратена порака!
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-4"
                  >
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Електронска пошта
                      </label>
                      <input
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        className={`w-full rounded-lg border border-gray-500 bg-transparent py-2 px-2 ${
                          errors.email
                            ? "border-error-500 outline-error-500"
                            : ""
                        }`}
                        placeholder="Електронска пошта"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="sr-only">
                        Име
                      </label>
                      <input
                        {...register("name", { required: true, minLength: 2 })}
                        id="name"
                        type="text"
                        className={`w-full rounded-lg border border-gray-500 bg-transparent py-2 px-2 ${
                          errors.name
                            ? "border-error-500 outline-error-500"
                            : ""
                        }`}
                        placeholder="Име"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Порака
                      </label>
                      <textarea
                        {...register("message", { required: true })}
                        id="message"
                        className={`w-full rounded-lg border border-gray-500 bg-transparent py-2 px-2 ${
                          errors.message
                            ? "border-error-500 outline-error-500"
                            : ""
                        }`}
                        placeholder="Порака"
                      />
                    </div>

                    <Button fullWidth>
                      <span className="sr-only">Испратете порака</span>
                      Испратете порака
                    </Button>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface ShareModalProps {
  isShareModalOpen: boolean;
  closeShareModal: () => void;
}

const ShareModal = ({ isShareModalOpen, closeShareModal }: ShareModalProps) => {
  return (
    <Transition appear show={isShareModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeShareModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative grid w-full max-w-xs grid-cols-1 gap-4 rounded-2xl bg-gray-100 p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-medium">
                    Споделете
                  </Dialog.Title>

                  <IconButton
                    onClick={closeShareModal}
                    title="Затворете споделување"
                    ariaLabel="Затворете споделување"
                  >
                    <span className="sr-only">Затворете споделување</span>
                    <XMarkIcon className="h-4 w-4" />
                  </IconButton>
                </div>

                <div className="flex w-full items-center justify-center gap-4">
                  <IconButton>
                    <span className="sr-only">Споделете на Facebook</span>
                    <FacebookIcon className="h-6 w-6" />
                  </IconButton>

                  <IconButton>
                    <span className="sr-only">Споделете на Facebook</span>
                    <YouTubeIcon className="h-6 w-6" />
                  </IconButton>

                  <IconButton>
                    <span className="sr-only">Споделете на Facebook</span>
                    <TwitterIcon className="h-6 w-6" />
                  </IconButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const now = dayjs();
const next28Days = Array.from({ length: 28 }, (_, i) => {
  return {
    id: i,
    day: i === 0 ? "денес" : now.add(i, "day").locale("mk").format("ddd"),
    date: now.add(i, "day").locale("mk").format("DD"),
    month: now.add(i, "day").locale("mk").format("MMM"),
  };
});

interface SingleDay {
  id: number;
  day: string;
  date: string;
  month: string;
}

interface SingleDayProps {
  singleDay: SingleDay;
  activeDay: number;
  handleSearchByDay: (
    id: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

const SingleDay = ({
  singleDay,
  activeDay,
  handleSearchByDay,
}: SingleDayProps) => {
  const { date, day, month, id } = singleDay;

  return (
    <SplideSlide>
      <div
        onClick={(event) => handleSearchByDay(id, event)}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-b-lg border-b-2 border-primary-600 bg-gray-50 py-2 px-10 text-sm uppercase shadow-md transition-colors hover:text-primary-600 md:text-base ${
          activeDay === id ? "text-primary-600" : ""
        }`}
      >
        <p>{day}</p>
        <p>{date}</p>
        <p>{month}</p>
      </div>
    </SplideSlide>
  );
};

const SliderDays = () => {
  const router = useRouter();
  const [activeDay, setActiveDay] = useState(0);
  const splideRef = useRef<Splide>(null);

  useEffect(() => {
    if (router.query.currentDay) {
      setActiveDay(Number(router.query.currentDay as string));
    } else {
      setActiveDay(0);
    }
  }, [router.query]);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.forceUpdate();
      splideRef.current.go(Number(activeDay));
    }
  }, [activeDay]);

  const handleSearchByDay = (
    id: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push(
      {
        pathname: `/cooks/${router.query.cookId}`,
        query: { currentDay: id },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <Splide
      ref={splideRef}
      hasTrack={false}
      options={{
        pagination: false,
        perPage: 4,
        gap: "2rem",
        mediaQuery: "min",
        breakpoints: {
          1024: {
            perPage: 7,
          },
        },
      }}
      aria-label="Избери јадења по денови"
    >
      <SplideTrack>
        {next28Days.map((singleDay) => (
          <SingleDay
            key={singleDay.id}
            singleDay={singleDay}
            activeDay={activeDay}
            handleSearchByDay={handleSearchByDay}
          />
        ))}
      </SplideTrack>

      <div className="splide__arrows hidden lg:block">
        <button className="splide__arrow splide__arrow--prev">
          <ChevronRight className="h-6 w-6 text-primary-600" />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <ChevronRight className="h-6 w-6 text-primary-600" />
        </button>
      </div>
    </Splide>
  );
};

interface MealCardProps {
  meal: Meal;
  openMealModal: (meal: Meal) => void;
}

const MealCard = ({ meal, openMealModal }: MealCardProps) => {
  const router = useRouter();

  const { title, price, image_url, day_available } = meal;

  const activeDay = router.query.currentDay
    ? Number(router.query.currentDay as string)
    : 0;

  const activeDayData = next28Days.find((day) => day.id === activeDay);
  return (
    <div className="relative" onClick={() => openMealModal(meal)}>
      <div
        className={`flex cursor-pointer flex-col-reverse justify-between gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4 lg:flex-row ${
          activeDay === day_available ? "" : "brightness-50"
        }`}
      >
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-gray-500">Бекон, сирење</p>
          </div>

          <div>
            <p className="text-primary-600">{price} ден.</p>
          </div>
        </div>
        <Image
          src={image_url}
          width={200}
          height={150}
          alt="Photo"
          className="w-full rounded-lg lg:w-auto"
        />
      </div>
      {activeDay !== day_available && (
        <div className="-translatey-y-1/2 absolute top-1/2 left-1/2 -translate-x-1/2">
          <div className="font-medium text-white">
            Недостапно на {activeDayData?.date} {activeDayData?.month}.
          </div>
        </div>
      )}
    </div>
  );
};

interface MoreInformationModalProps {
  isMoreInformationModalOpen: boolean;
  closeMoreInformationModal: () => void;
  cook: Cook;
}

const MoreInformationModal = ({
  isMoreInformationModalOpen,
  closeMoreInformationModal,
  cook,
}: MoreInformationModalProps) => {
  const {
    first_name,
    last_name,
    image_url,
    biography,
    address,
    city,
    phone_number,
    email,
  } = cook;
  return (
    <Transition appear show={isMoreInformationModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={closeMoreInformationModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative grid w-full max-w-xl grid-cols-1 gap-4 rounded-2xl bg-gray-100 p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-medium">
                    Повеќе информации
                  </Dialog.Title>

                  <IconButton
                    onClick={closeMoreInformationModal}
                    title="Затворете споделување"
                    ariaLabel="Затворете споделување"
                  >
                    <span className="sr-only">Затворете споделување</span>
                    <XMarkIcon className="h-4 w-4" />
                  </IconButton>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={image_url}
                    width={600}
                    height={150}
                    className="w-full rounded-lg"
                    alt={first_name + last_name}
                  />

                  <div className="grid grid-cols-1 gap-2">
                    <p className="text-2xl font-medium">
                      {first_name} {last_name}
                    </p>

                    <p className="leading-relaxed">{biography}</p>
                  </div>

                  <div>
                    <p className="text-xl font-medium">Адреса</p>

                    <p>{address}</p>
                    <p>
                      1000, <span className="capitalize">{city.label}</span>
                    </p>
                  </div>

                  <div>
                    <p className="text-xl font-medium">Контакт</p>

                    <div className="flex items-center justify-between">
                      <p>Телефонски број</p>
                      <a href={`tel:${phone_number}`} className="font-medium">
                        {phone_number}
                      </a>
                    </div>

                    <div className="flex items-center justify-between">
                      <p>Е-пошта</p>
                      <a href={`mailto:${email}`} className="font-medium">
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export interface Review {
  id: string;
  date_created: string;
  rating: number;
  text: string;
  cook_id: string;
  cook_avatar: string;
  city: string;
  first_name: string;
  last_name: string;
}

interface ReviewsSliderProps {
  reviews: Review[];
}

const ReviewsSlider = ({ reviews }: ReviewsSliderProps) => {
  return (
    <Splide
      hasTrack={false}
      options={{
        pagination: false,
        perPage: 1,
        gap: "2rem",
        mediaQuery: "min",
        breakpoints: {
          1024: {
            perPage: 4,
          },
        },
        arrows: false,
      }}
      aria-label="Избери јадења по денови"
    >
      <SplideTrack>
        {reviews.map((review) => (
          <SplideSlide key={review.id}>
            <div className="flex h-44 flex-col gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4">
              <p className="text-center text-lg font-medium">
                {review.first_name} {review.last_name.charAt(0)}.
              </p>

              <p className="text-ellipsis">{review.text.slice(0, 150)}...</p>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

interface MealsByCuisinesValues {
  cuisineLabel: string;
  cuisineValue: string;
  meals: Meal[];
}

interface MealsByCuisines {
  [key: string]: MealsByCuisinesValues;
}

interface Props {
  cook: Cook;
  mealsSortedByCuisines: MealsByCuisines;
  reviews: Review[];
}

const CookPage: NextPage<Props> = ({
  cook,
  mealsSortedByCuisines,
  reviews,
}) => {
  const router = useRouter();

  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isMoreInformationModalOpen, setIsMoreInformationModalOpen] =
    useState(false);

  const [isMealModalOpen, setIsMealModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const [filteredMeals, setFilteredMeals] = useState<MealsByCuisinesValues[]>(
    Object.values(mealsSortedByCuisines)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const closeMessageModal = () => setIsMessageModalOpen(false);

  const openMessageModal = () => setIsMessageModalOpen(true);

  const closeShareModal = () => setIsShareModalOpen(false);

  const openShareModal = () => setIsShareModalOpen(true);

  const closeMealModal = () => setIsMealModalOpen(false);

  const openMealModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setIsMealModalOpen(true);
  };

  const closeMoreInformationModal = () => setIsMoreInformationModalOpen(false);

  const openMoreInformationModal = () => setIsMoreInformationModalOpen(true);

  const { addRemoveFavoriteCook, favoriteCooks } = useFavoriteCooks();
  const favoriteCook = favoriteCooks.find(
    (favoriteCook) => favoriteCook.id === cook.id
  );

  const {
    city,
    first_name,
    last_name,
    image_url,
    rating,
    main_cuisine,
    numberOfDeliveries,
    cuisines,
    id,
  } = cook;

  const cookName = `${first_name} ${last_name.charAt(0).toUpperCase()}.`;

  const cookFullName = `${first_name} ${last_name}`;

  const pageTitle = `${cookFullName} | ${main_cuisine} во ${city.value}`;

  const activeCuisine = router.asPath.split("#")[1];

  useEffect(() => {
    const mealsValues = Object.values(mealsSortedByCuisines);

    const filteredMealsArr = mealsValues.map((cuisine) => {
      const filteredMeals = cuisine.meals.filter((meal) => {
        return (
          meal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          meal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          meal.cuisine.value
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          meal.cuisine.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      return {
        ...cuisine,
        meals: filteredMeals,
      };
    });

    setFilteredMeals(filteredMealsArr);
  }, [searchQuery]);

  const areAllCuisinesEmpty = filteredMeals.every(
    (cuisine) => cuisine.meals.length === 0
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="relative">
        <Image
          priority
          src="/assets/cook-page/cook-cover-image.jpg"
          alt="Cook cover image"
          width={1920}
          height={800}
          className="h-72 w-full object-cover brightness-75 lg:h-96"
        />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-11/12 max-w-screen-2xl items-end py-10">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <Image
                  priority
                  src={image_url}
                  alt={cookFullName}
                  width={100}
                  height={100}
                  className="hidden rounded-full border-2 border-primary-600 object-cover lg:block"
                />
                <div className="flex flex-col gap-1 text-white">
                  <h2 className="text-3xl font-bold lg:text-4xl">{cookName}</h2>
                  <p className="text-xl">{main_cuisine}</p>
                  <div className="flex items-center gap-2">
                    <LocationIcon className="inline-block h-4 w-4" />
                    <p className="text-lg capitalize">{city.label}</p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => addRemoveFavoriteCook(cook)}
                className="group flex cursor-pointer items-center justify-center rounded-lg bg-black/40 p-2"
              >
                <IconButton
                  intent="secondary"
                  ariaLabel={
                    favoriteCook
                      ? "Избришете од омилени готвачи"
                      : "Додадете во омилени готвачи"
                  }
                  title={
                    favoriteCook
                      ? "Избришете од омилени готвачи"
                      : "Додадете во омилени готвачи"
                  }
                >
                  <HeartIcon
                    className={`h-6 w-6 transition-colors group-hover:text-primary-600 ${
                      favoriteCook ? "fill-primary-600 text-primary-600" : ""
                    }`}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-300 bg-gray-100 py-4 shadow-md lg:py-5">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              title="Оцена"
              className="flex w-[70px] items-center justify-center gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 px-4 py-2 shadow-lg"
            >
              <StarIcon className="h-4 w-4 shrink-0 fill-primary-600 text-primary-600" />
              <p className="">{rating}</p>
            </div>

            <div
              title="Број на припремени јадења"
              className="flex w-[70px] items-center justify-center gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 px-4 py-2 shadow-lg"
            >
              <OfferIcon className="h-4 w-4 shrink-0 fill-primary-600 text-primary-600" />
              <p className="">{numberOfDeliveries}</p>
            </div>

            <button
              className="group hidden items-center gap-2 lg:flex"
              onClick={openMoreInformationModal}
            >
              <InformationIcon className="h-5 w-5 text-primary-600" />
              <p className="transition-colors group-hover:text-primary-600">
                Повеќе информации
              </p>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              aria-label="Пратете порака"
              title="Пратете порака"
              intent="primary"
              onClick={openMessageModal}
            >
              <MessageIcon className="h-5 w-5" />
            </Button>

            <Button
              aria-label="Споделете"
              title="Споделете"
              intent="primary"
              onClick={openShareModal}
            >
              <ShareIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-300 bg-gray-100 py-4 shadow-sm lg:py-5">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {cuisines.map((cuisine) => (
              <Link
                key={cuisine.value}
                className={`flex items-center justify-center gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 px-4 py-2 capitalize shadow-lg transition-colors hover:text-primary-600 ${
                  activeCuisine === cuisine.value ? "text-primary-600" : ""
                }`}
                href={`/cooks/${id}#${cuisine.value}`}
              >
                {cuisine.label}
              </Link>
            ))}
          </div>

          <label
            htmlFor="search-menu"
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 py-2 px-3"
          >
            <SearchIcon className="h-4 w-4" />
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              id="search-menu"
              className="w-full bg-transparent focus:outline-none"
              type="search"
              placeholder="Пребарајте"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto w-11/12 max-w-4xl pt-5 lg:pt-10">
        <SliderDays />
      </section>

      <section className="py-4 lg:py-5">
        <div className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-4">
          {areAllCuisinesEmpty ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <SearchIcon className="h-6 w-6 text-white" />
              </div>
              <p>
                За жал не најдовме резултати со низата{" "}
                <span className="font-medium">{searchQuery}</span>
              </p>
            </div>
          ) : (
            <>
              {filteredMeals.map((cuisine, index) => (
                <div
                  id={cuisine.cuisineValue}
                  key={index}
                  className="grid grid-cols-1 gap-2"
                >
                  {cuisine.meals.length > 0 && (
                    <h2 className="text-2xl font-medium capitalize">
                      {cuisine.cuisineLabel}
                    </h2>
                  )}

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {cuisine.meals.map((meal) => (
                      <MealCard
                        key={meal.id}
                        meal={meal}
                        openMealModal={openMealModal}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-4">
          <h2 className="text-2xl font-medium">
            Препораки за готвачот ({reviews.length})
          </h2>

          <ReviewsSlider reviews={reviews} />
        </div>
      </section>

      {isMessageModalOpen && (
        <MessageModal
          isMessageModalOpen={isMessageModalOpen}
          closeMessageModal={closeMessageModal}
          cook={cook}
        />
      )}

      <ShareModal
        isShareModalOpen={isShareModalOpen}
        closeShareModal={closeShareModal}
      />

      {isMealModalOpen && (
        <MealModal
          selectedMeal={selectedMeal}
          isMealModalOpen={isMealModalOpen}
          closeMealModal={closeMealModal}
        />
      )}

      <MoreInformationModal
        isMoreInformationModalOpen={isMoreInformationModalOpen}
        closeMoreInformationModal={closeMoreInformationModal}
        cook={cook}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { cookId } = query;

  const cook = await fetchCook(cookId as string);

  const mealsPerCookRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/menu?byUser=${cookId}`
  );
  const mealsPerCook = await mealsPerCookRes.json();

  const mealsSortedByCuisines = mealsPerCook.reduce(
    (acc: MealsByCuisines, meal: Meal) => {
      const cuisine = meal.cuisine.value;

      if (!acc[cuisine]) {
        acc[cuisine] = {
          cuisineLabel: meal.cuisine.label,
          cuisineValue: meal.cuisine.value,
          meals: [],
        };
      }

      acc[cuisine].meals.push(meal);

      return acc;
    },
    {}
  );

  const reviewsRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/reviews?byUser=${cookId}`
  );

  const reviews = await reviewsRes.json();

  return {
    props: {
      cook,
      mealsSortedByCuisines,
      reviews,
    },
  };
};

export default CookPage;
