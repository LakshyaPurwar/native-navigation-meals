import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const Meal = ({ title, imageUrl, duration, complexity, affordability , onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "lightgray" }}
        style={styles.mealContainer}
        onPress = {onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.img} />
          </View>

          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Duration : {duration}</Text>
          <Text style={styles.textStyle}>
            Complexity : {complexity.toUpperCase()}
          </Text>
          <Text style={styles.textStyle}>
            Affordabilty : {affordability.toUpperCase()}
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
    // backgroundColor: "red",
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
    marginVertical : 4,
  },
  imageContainer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    overflow: "hidden",
    borderWidth: 2,
    borderColor : 'gray',
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
});
