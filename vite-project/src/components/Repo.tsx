import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

export const Repo = ({ repo }: { repo: IRepo }) => {
  const {favourites} = useAppSelector(state=>state.github)
  const [isFav, setIsFav] =useState(favourites.includes(repo.html_url));
  const {addFavourite, removeFavourite} = useActions();
  const addToFav=(event:React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault();
      addFavourite(repo.html_url)
      setIsFav(true)
  }
  const removeFromFav=(event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    removeFavourite(repo.html_url)
    setIsFav(false)
}
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>
      </a>

      {!isFav&&<button className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
      onClick={addToFav}>
        Add
      </button>}
     {isFav&& <button className="py-2 px-4 ml-2 bg-red-400 rounded hover:shadow-md transition-all"
      onClick={removeFromFav}>
        Remove
      </button>}
    </div>
  );
};
