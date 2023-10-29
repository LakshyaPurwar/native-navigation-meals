import { createContext , useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteIds((prevIds) => {
      return prevIds.filter((currentId) => currentId != id);
    });
  };

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
