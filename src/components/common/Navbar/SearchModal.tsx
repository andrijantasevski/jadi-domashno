import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon, XMarkIcon } from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import useLocalStorageSearchQuery from "@/components/utils/useLocalStorageSearchQuery";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const SearchModal = ({ isModalOpen, closeModal }: Props) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    addSearchQueryToLocalStorage,
    searchQueries,
    removeSearchQueryFromLocalStorage,
  } = useLocalStorageSearchQuery();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSearchQueryToLocalStorage(searchQuery);
    router.push({
      pathname: "/search",
      query: { searchQuery },
    });
  };

  useEffect(() => {
    setSearchQuery(
      router.query.searchQuery ? (router.query.searchQuery as string) : ""
    );
  }, [router.query]);

  const addPastSearchToInput = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative grid w-full max-w-xl transform grid-cols-1 gap-4 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <form onSubmit={handleSearch}>
                  <label
                    htmlFor="search-navbar"
                    className="flex items-center gap-2 rounded-lg border border-gray-400 py-2 px-3"
                  >
                    <SearchIcon className="h-4 w-4" />
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      id="search-navbar"
                      className="w-full bg-transparent focus:outline-none"
                      type="search"
                      placeholder="Пребарајте"
                    />
                  </label>
                </form>

                {searchQueries.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2">
                    <p className="font-medium">Претходни пребарувања</p>

                    <div className="grid grid-cols-1 gap-2">
                      {searchQueries.map((searchQuery, index) => (
                        <div
                          key={index}
                          onClick={() => addPastSearchToInput(searchQuery)}
                          className="flex cursor-pointer items-center justify-between"
                        >
                          <p>{searchQuery}</p>

                          <IconButton
                            onClick={() =>
                              removeSearchQueryFromLocalStorage(searchQuery)
                            }
                          >
                            <XMarkIcon className="h-3 w-3" />
                          </IconButton>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <p>Немате претходни пребарувања.</p>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SearchModal;