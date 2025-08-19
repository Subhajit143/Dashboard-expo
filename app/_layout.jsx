import { Stack } from "expo-router";
import "../global.css";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      {/* ✅ Custom Header */}
      <View className="flex-row items-center p-4 bg-white shadow">
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text className="ml-3 text-lg font-bold">BAIDYA Healthcare</Text>
      </View>

      {/* ✅ Screens (Stack Navigator) */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
