import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const Meal = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  color,
}) => {
  const navigation = useNavigation();
  const handleMealPress = () => {
    navigation.navigate("MealDetails", {
      title: title,
      mealId: id,
      categoryColor: color,
    });
  };
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        android_ripple={{ color: "lightgray" }}
        style={[styles.mealContainer, { borderColor: color }]}
        onPress={handleMealPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.img} />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>
            Duration : <Text style={styles.highLightText}>{duration}~MINS</Text>
          </Text>
          <Text style={styles.textStyle}>
            Complexity :{" "}
            <Text style={styles.highLightText}>{complexity.toUpperCase()}</Text>
          </Text>
          <Text style={styles.textStyle}>
            Affordabilty :{" "}
            <Text style={styles.highLightText}>
              {affordability.toUpperCase()}
            </Text>
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "100%",
    marginVertical: 12,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  mealContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    width: "100%",
    backgroundColor: "#15191f",
    borderWidth: 1,
    borderRadius: 8,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  textStyle: {
    fontFamily: "monospace",
    color: "gray",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderStyle: "dotted",
    borderColor: "lightgray",
    marginVertical: 4,
    borderRadius: 4,
  },
  highLightText: {
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "lightgray",
  },
});
