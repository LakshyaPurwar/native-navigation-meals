import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favouritesContext";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen() {
  //   const FavContext = useContext(FavouritesContext);
  //   const ids = FavContext.ids;
  const ids = useSelector((state) => state.favourites.ids);
  const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  let content = (
    <MealsList categoryColor={"hotpink"} displayedMeals={favouriteMeals} />
  );
  if (favouriteMeals.length === 0) {
    content = <Text style={styles.text}>No Favourite meals added yet !</Text>;
  }
  return <View style={styles.container}>{content}</View>;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "monospace",
    color: "lightgray",
    fontWeight: "bold",
  },
});
