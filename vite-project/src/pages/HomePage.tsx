import { useDebounce } from "../debounce/debounce.ts";
import { useSearchUsersQuery } from "../store/github/github.api.ts";
import { useState, useEffect } from "react";
export const HomePage = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 300);
  useEffect(() => {
    console.log(search);
  }, [debounced]);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  return (
    <>
      <div className="flex justify-center flex-wrap pt-10 mx-auto h-screen w-screen">
        <div>
          {isError && (
            <p className="text-center text-red-600">Something get wrong...</p>
          )}
        </div>
        <div className="relative w-[560px]">
          <input
            type="text"
            className="border py-2 px-4 w-full h-[42px] mb-2"
            placeholder="search for Github username..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="absolute top-[42px] left-0 right-0 max-[200px] shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
              >
                {user.login}
              </li>
            ))}
          </ul>
        </div>
        {data?.map((item) => (
          <img
            key={item.id}
            className="object-contain w-[70px] h-[70px]"
            src={item.avatar_url}
          />
        ))}
      </div>
    </>
  );
};
