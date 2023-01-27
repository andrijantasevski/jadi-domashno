import { SearchIcon } from "@/components/icons";

const SearchInput = () => {
  return (
    <label className="bg-background-main hidden items-center gap-2 rounded-full border border-gray-400 py-2 px-3 xl:flex">
      <SearchIcon className="h-4 w-4" />
      <input
        id="search-navbar"
        className="bg-transparent focus:outline-none"
        type="search"
        placeholder="Пребарај"
      />
    </label>
  );
};

export default SearchInput;
