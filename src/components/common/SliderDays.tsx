import { useEffect, useState } from "react";
import { ChevronRight } from "@/components/icons";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRouter } from "next/router";
import dayjs from "dayjs";

interface SingleDay {
  id: number;
  day: string;
  date: string;
  month: string;
}

interface SingleDayProps {
  singleDay: SingleDay;
  activeDay: number;
  handleSearchByDay: (id: number) => void;
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
        onClick={() => handleSearchByDay(id)}
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
  const now = dayjs();
  const next28Days = Array.from({ length: 28 }, (_, i) => {
    return {
      id: i,
      day: i === 0 ? "денес" : now.add(i, "day").locale("mk").format("ddd"),
      date: now.add(i, "day").locale("mk").format("DD"),
      month: now.add(i, "day").locale("mk").format("MMM"),
    };
  });

  useEffect(() => {
    if (router.query.day) {
      setActiveDay(Number(router.query.day));
    } else {
      setActiveDay(0);
    }
  }, [router.query]);

  const handleSearchByDay = (id: number) => {
    router.push({
      pathname: "/menu",
      query: { day: id },
    });
  };

  return (
    <Splide
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

export default SliderDays;
