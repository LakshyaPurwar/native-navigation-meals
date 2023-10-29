import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { Platform } from "react-native";

const CategoriesScreen = ({ navigation }) => {

  const renderCategoryItem = (itemData) => {

    const pressHandler = () => {
      navigation.navigate("MealsOverview" , {
        categoryId : itemData.item.id,
        categoryColor : itemData.item.color,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.listStyle}
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    marginTop: Platform.OS === "android" ? 24 : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  listStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});
