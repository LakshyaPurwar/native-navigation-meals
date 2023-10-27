import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const MealDetails = ({navigation , route}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            title : route.params.title,
        });
    },[]);
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>This is the Meal Details Screen</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "monospace",
    color: "gray",
  },
});
