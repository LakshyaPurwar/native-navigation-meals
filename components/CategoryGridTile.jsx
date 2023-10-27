import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color , onPress }) => {
  return (
    <View style={[styles.grid, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "lightgray" }}
        style={({ pressed }) => [
          styles.button,
          Platform.OS === "andriod" && pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  grid: {
    height: 160,
    width: 160,
    borderRadius: 16,
    margin: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" && "hidden",
  },
  button: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 12,
  },
});
