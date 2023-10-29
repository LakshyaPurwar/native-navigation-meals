import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const categoryColor = route.params.categoryColor;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryId = route.params.categoryId;
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id == categoryId;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MealsList displayedMeals={displayedMeals} categoryColor={categoryColor}></MealsList>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    // backgroundColor : "pink",
  },
  
});
