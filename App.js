import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  createNativeDrawerNavigator,
} from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";
import MealDetails from "./screens/MealDetails";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavouritesContextProvider from "./store/context/favouritesContext";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1E2227" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: 14,
          },
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: "#1E2227",
          },
          sceneContainerStyle: {
            backgroundColor: "#1E2227",
          },
        }}
      >
        <Drawer.Screen
          name="AllCategories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            title: "Favourites",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#1E2227" },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 14,
              },
              contentStyle: {
                backgroundColor: "#1E2227",
              },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{ title: "All Categories", headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ navigation, route }) => {
              //   const categoryId = route.params.categoryId;
              //   const categoryTitle = CATEGORIES.find((category) => {
              //     return category.id == categoryId;
              //   }).title;
              //   return { title: categoryTitle };
              // }}
            />

            <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
