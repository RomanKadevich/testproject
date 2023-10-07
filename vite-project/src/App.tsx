import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavouritesPages } from "./pages/FavouritesPages";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPages />} />
      </Routes>
    </>
  );
}
