import { View, FlatList, StyleSheet } from "react-native";
import Meal from "./Meal";
import { MEALS } from "../../data/dummy-data";

const MealsList = ({ displayedMeals, categoryColor }) => {
  const renderMealItem = (itemData) => {
    const mealItem = itemData.item;
    const mealItemProps = {
      id: mealItem.id,
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      affordability: mealItem.affordability,
      complexity: mealItem.complexity,
      duration: mealItem.duration,
      color: categoryColor,
    };
    return <Meal {...mealItemProps} />;
  };

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
      contentContainerStyle={styles.listStyle}
    />
  );
};

export default MealsList;

const styles = StyleSheet.create({
  listStyle: {
    width: 360,
  },
});
