import { Cook } from "@/components/common/CookCard";
import {
  HeartIcon,
  LocationIcon,
  MessageIcon,
  ShareIcon,
  StarIcon,
} from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import fetchCook from "@/utils/fetchCook";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Props {
  cook: Cook;
}

const CookPage: NextPage<Props> = ({ cook }) => {
  const { city, first_name, last_name, image_url, rating } = cook;

  const cookName = `${first_name} ${last_name.charAt(0).toUpperCase()}.`;

  const cookFullName = `${first_name} ${last_name}`;

  const mainCuisine = cook.cuisines[0].label;
  return (
    <>
      <Head>
        <title>
          {cookFullName} | {mainCuisine}
        </title>
      </Head>
      <section className="relative">
        <Image
          priority
          src="/assets/cook-page/cook-cover-image.png"
          alt="Cook cover image"
          width={1920}
          height={800}
          className="h-72 w-full object-cover brightness-75 lg:h-full"
        />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-11/12 max-w-screen-2xl items-end py-10">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <Image
                  src={image_url}
                  alt={cookFullName}
                  width={100}
                  height={100}
                  className="hidden rounded-full border-2 border-primary-600 object-cover lg:block"
                />
                <div className="flex flex-col gap-1 text-white">
                  <h2 className="text-3xl font-bold lg:text-4xl">{cookName}</h2>
                  <p className="text-xl">Азијска храна</p>
                  <div className="flex items-center gap-2">
                    <LocationIcon className="inline-block h-4 w-4" />
                    <p className="text-lg capitalize">{city.label}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-lg bg-black/40 p-2">
                <IconButton intent="secondary">
                  <HeartIcon className="h-6 w-6" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-6 shadow-md">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 fill-primary-600 text-primary-600" />
            <p>{rating}</p>
          </div>
          <div className="flex items-center gap-4">
            <IconButton intent="primary">
              <MessageIcon className="h-5 w-5" />
            </IconButton>

            <IconButton intent="primary">
              <ShareIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </section>
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
