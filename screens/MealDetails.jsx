import { useLayoutEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
// import { FavouritesContext } from "../store/context/favouritesContext";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/FavouriteSlice";

const MealDetails = ({ navigation, route }) => {
  const mealId = route.params.mealId;
  const categoryColor = route.params.categoryColor;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const ids = useSelector((state) => state.favourites.ids);
  const dispatch = useDispatch();
  // const FavContext = useContext(FavouritesContext);
  // const ids = FavContext.ids;

  const isMealFavourite = ids.includes(mealId);
  console.log(ids);

  const favouritesStatusHandler = () => {
    // if (isMealFavourite) {
    //   FavContext.removeFavourite(mealId);
    // } else {
    //   FavContext.addFavourite(mealId);
    // }
    if (isMealFavourite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => {
        return (
          <IconButton
            icon="heart"
            color={isMealFavourite ? "red" : "white"}
            onPress={favouritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, favouritesStatusHandler]);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.img} />
        </View>
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.textStyle}> {meal.duration}~MINS</Text>
        <Text style={styles.textStyle}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.textStyle}>{meal.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Ingredients : </Text>
        {meal.ingredients.map((ingredient) => {
          return (
            <Text key={ingredient} style={styles.ingredientTextStyle}>
              <Text style={[styles.step, { color: categoryColor }]}>-</Text>{" "}
              {ingredient}
            </Text>
          );
        })}
      </View>

      <View style={styles.ingredientContainer}>
        <Text style={styles.title}>Steps : </Text>
        {meal.steps.map((step, index) => {
          return (
            <Text key={step} style={styles.ingredientTextStyle}>
              <Text style={[styles.step, { color: categoryColor }]}>
                Step-{index + 1}.
              </Text>{" "}
              {step}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    alignItems: "center",
    padding: 24,
    // justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
    width: "100%",
  },
  textStyle: {
    fontFamily: "monospace",
    color: "lightgray",
  },
  ingredientTextStyle: {
    // flex : 1,
    fontFamily: "monospace",
    color: "gray",
    marginVertical: 4,
  },
  details: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
    width: "100%",
    marginTop: 12,
    padding: 2,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "lightgray",
    marginVertical: 4,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "white",
    marginVertical: 4,
  },
  imageContainer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "gray",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    objectFit: "cover",
    opacity: 0.75,
    padding: 12,
  },
  ingredientContainer: {
    // flex: 1,
    marginVertical: 12,
    width: "100%",
    padding: 24,
    backgroundColor: "#15181e",
    borderRadius: 12,
    // borderWidth : 1,
    borderColor: "#38393a",
    elevation: 2,
    // backgroundColor: "red",
  },
  step: {
    fontFamily: "monospace",
    fontWeight: "bold",
    // color : '#ff67a4',
  },
});
