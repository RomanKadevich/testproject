import { useSearchUsersQuery } from "../store/github/github.api.ts";
import { useState, useEffect } from "react";
export const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery("romankad");
  const [search, setSearch]= useState('');
  useEffect(()=>{

  }, [search])

  console.log(data);
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
            onChange={e => setSearch(e.target.value)}
          />
          <div className="absolute top-[42px] left-0 right-0 max-[200px] shadow-md bg-white">{search}</div>
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
