import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          return pressed && { opacity: 0.25 };
        }}
      >
        <Ionicons name={icon} color={color} size={24} />
      </Pressable>
    </View>
  );
};

export default IconButton;
