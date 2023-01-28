import { useEffect, useState } from "react";

export default function useLocalStorageSearchQuery() {
  const [searchQueries, setSearchQueries] = useState<string[]>([]);

  useEffect(() => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");
    if (areQueriesInLocalStorage) {
      const parsedSearchQueries = JSON.parse(areQueriesInLocalStorage);
      setSearchQueries(parsedSearchQueries);
    }
  }, []);

  const addSearchQueryToLocalStorage = (searchQuery: string) => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");

    if (areQueriesInLocalStorage) {
      const parsedSearchQueries = JSON.parse(areQueriesInLocalStorage);
      const newSearchQueries = [...parsedSearchQueries, searchQuery];

      localStorage.setItem("searchQueries", JSON.stringify(newSearchQueries));
    } else {
      localStorage.setItem("searchQueries", JSON.stringify([searchQuery]));
    }
  };

  const removeSearchQueryFromLocalStorage = (searchQuery: string) => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");

    if (areQueriesInLocalStorage) {
      const parsedSearchQueries = JSON.parse(areQueriesInLocalStorage);
      const newSearchQueries = parsedSearchQueries.filter(
        (query: string) => query !== searchQuery
      );

      localStorage.setItem("searchQueries", JSON.stringify(newSearchQueries));
      setSearchQueries(newSearchQueries);
    }
  };

  return {
    searchQueries,
    addSearchQueryToLocalStorage,
    removeSearchQueryFromLocalStorage,
  };
}
