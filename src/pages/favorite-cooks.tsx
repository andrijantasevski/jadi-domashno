import CookCard from "@/components/common/CookCard";
import Button from "@/components/ui/Button";
import useFavoriteCooks from "@/utils/useFavoriteCooks";
import Head from "next/head";

const FavoriteCooksPage = () => {
  const { favoriteCooks } = useFavoriteCooks();

  return (
    <>
      <Head>
        <title>Омилени готвачи</title>
      </Head>

      <div className="py-10">
        <div className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-4">
          <h1 className="text-3xl font-bold">Омилени готвачи</h1>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {favoriteCooks?.map((cook) => (
              <CookCard key={cook.id} cook={cook} />
            ))}
          </div>

          {favoriteCooks.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-lg">Немате омилени готвачи.</p>
              <Button href="/cooks">Одете на готвачи</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteCooksPage;
