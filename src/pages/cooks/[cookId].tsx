import { Cook } from "@/components/common/CookCard";
import {
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
import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  cook: Cook;
}

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

const CookPage: NextPage<Props> = ({ cook }) => {
  const router = useRouter();
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const closeMessageModal = () => setIsMessageModalOpen(false);

  const openMessageModal = () => setIsMessageModalOpen(true);

  const closeShareModal = () => setIsShareModalOpen(false);

  const openShareModal = () => setIsShareModalOpen(true);

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
    mainCuisine,
    numberOfDeliveries,
    cuisines,
    id,
  } = cook;

  const cookName = `${first_name} ${last_name.charAt(0).toUpperCase()}.`;

  const cookFullName = `${first_name} ${last_name}`;

  const pageTitle = `${cookFullName} | ${mainCuisine} во ${city.value}`;

  const activeCuisine = router.asPath.split("#")[1];

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
                  <p className="text-xl">{mainCuisine}</p>
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

      <section className="border border-gray-300 bg-gray-100 py-4 shadow-md lg:py-5">
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

            <button className="group hidden items-center gap-2 lg:flex">
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

      <section className="bg-gray-100 py-4 shadow-md lg:py-5">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center justify-between">
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

          <button className="hidden w-52 items-center gap-2 rounded-lg border border-gray-400 py-1.5 px-3 transition-colors hover:border-primary-600 xl:flex">
            <SearchIcon className="h-4 w-4" />
            <span className="text-gray-500">Барајте јадења</span>
          </button>
        </div>
      </section>

      <section className="py-4 lg:py-5">
        <div className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-4">
          {cuisines.map((cuisine) => (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <h2 className="text-2xl font-medium capitalize">
                {cuisine.label}
              </h2>
            </div>
          ))}
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { cookId } = query;

  const cook = await fetchCook(cookId as string);

  return {
    props: {
      cook,
    },
  };
};

export default CookPage;
