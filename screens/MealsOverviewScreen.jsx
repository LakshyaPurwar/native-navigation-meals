import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../components/Meal";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

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

  const renderMealItem = (itemData) => {
    const handleMealPress = () => {
      navigation.navigate("MealDetails" , {
        title : itemData.item.title,
      });
    };

    const mealItem = itemData.item;
    const mealItemProps = {
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      affordability: mealItem.affordability,
      complexity: mealItem.complexity,
      duration: mealItem.duration,
    };
    return <Meal {...mealItemProps} onPress = {handleMealPress} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        contentContainerStyle={styles.listStyle}
      />
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
  listStyle: {
    // backgroundColor : "lightpink",
    width: 360,
  },
});
