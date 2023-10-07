import { useAppSelector } from "../hooks/redux";

export const FavouritesPages = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0) return <p className="text-center">NO ITEMS</p>;
  return (
    <div className="flex justify-center flex-wrap pt-10 mx-auto h-screen w-screen">
      <ul className="none">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
