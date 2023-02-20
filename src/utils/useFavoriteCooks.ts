import { Cook } from "@/components/common/CookCard";
import { useEffect, useState } from "react";

export default function useFavoriteCooks() {
  const [favoriteCooks, setFavoriteCooks] = useState<Cook[]>([]);

  useEffect(() => {
    const favoriteCooks = localStorage.getItem("favoriteCooks");

    if (favoriteCooks) {
      const favoriteCooksParsed = JSON.parse(favoriteCooks);
      setFavoriteCooks(favoriteCooksParsed);
    }
  }, []);

  function addRemoveFavoriteCook(cook: Cook) {
    const favoriteCooksLS = localStorage.getItem("favoriteCooks");

    if (favoriteCooksLS) {
      const favoriteCooksParsed: Cook[] = JSON.parse(favoriteCooksLS);

      const isCookAlreadyFavorite = favoriteCooksParsed.some(
        (favoriteCook) => favoriteCook.id === cook.id
      );

      if (isCookAlreadyFavorite) {
        const filteredFavoriteCooks = favoriteCooksParsed.filter(
          (favoriteCook) => favoriteCook.id !== cook.id
        );
        localStorage.setItem(
          "favoriteCooks",
          JSON.stringify(filteredFavoriteCooks)
        );
        setFavoriteCooks(filteredFavoriteCooks);
      } else {
        const newFavoriteCooks = [...favoriteCooksParsed, cook];
        localStorage.setItem("favoriteCooks", JSON.stringify(newFavoriteCooks));
        setFavoriteCooks(newFavoriteCooks);
      }
    } else {
      const newFavoriteCooks = [cook];
      localStorage.setItem("favoriteCooks", JSON.stringify(newFavoriteCooks));
      setFavoriteCooks(newFavoriteCooks);
    }
  }

  return { favoriteCooks, addRemoveFavoriteCook };
}
