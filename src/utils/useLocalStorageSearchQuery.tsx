import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface SearchQuery {
  searchQuery: string;
  id: string;
}

export default function useLocalStorageSearchQuery() {
  const [searchQueries, setSearchQueries] = useState<SearchQuery[]>([]);

  useEffect(() => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");
    if (areQueriesInLocalStorage) {
      const parsedSearchQueries: SearchQuery[] = JSON.parse(
        areQueriesInLocalStorage
      );
      setSearchQueries(parsedSearchQueries);
    }
  }, []);

  const addSearchQueryToLocalStorage = (searchQuery: string) => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");

    if (areQueriesInLocalStorage) {
      const parsedSearchQueries = JSON.parse(areQueriesInLocalStorage);
      const newSearchQueries = [
        ...parsedSearchQueries,
        { searchQuery, id: uuidv4() },
      ];

      localStorage.setItem("searchQueries", JSON.stringify(newSearchQueries));
    } else {
      localStorage.setItem(
        "searchQueries",
        JSON.stringify([{ searchQuery, id: uuidv4() }])
      );
    }
  };

  const removeSearchQueryFromLocalStorage = (searchQuery: SearchQuery) => {
    const areQueriesInLocalStorage = localStorage.getItem("searchQueries");

    if (areQueriesInLocalStorage) {
      const parsedSearchQueries: SearchQuery[] = JSON.parse(
        areQueriesInLocalStorage
      );
      const newSearchQueries = parsedSearchQueries.filter(
        (query) => query.id !== searchQuery.id
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
