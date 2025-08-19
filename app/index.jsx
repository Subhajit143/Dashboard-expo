import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top Bar */}
      {/* <View className="flex-row items-center p-4 bg-white shadow">
        <Ionicons name="menu" size={28} color="black" />
        <Text className="ml-3 text-lg font-bold">BAIDYA Healthcare</Text>
      </View> */}

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Clock Section */}
        <View className="items-center my-6">
          <View className="w-44 h-44 rounded-full border-2 border-orange-500 bg-white items-center justify-center shadow">
            <Text className="text-2xl font-bold">01:26</Text>
            <Text className="text-sm">AM</Text>
            <Text className="text-sm text-blue-500 mt-2">Start Working</Text>
          </View>
        </View>

        {/* Grid Buttons */}
        <View className="flex-row flex-wrap justify-around mt-2">
          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-purple-100 shadow">
            <Ionicons name="calendar" size={30} color="blue" />
            <Link href="/visit" className="mt-2 text-sm font-medium">Visits</Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-red-100 shadow">
            <Ionicons name="person" size={30} color="blue" />
            <Link href="/client" className="mt-2 text-sm font-medium">Client</Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-emerald-100 shadow">
            <Ionicons name="medkit" size={30} color="blue" />
            <Link href="/hospital" className="mt-2 text-sm font-medium">Hospitals</Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-gray-100 shadow">
            <Ionicons name="document-text" size={30} color="blue" />
            <Link href="/report" className="mt-2 text-sm font-medium">Report</Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-cyan-100 shadow">
            <Ionicons name="notifications" size={30} color="blue" />
            <Link href="/reminder" className="mt-2 text-sm font-medium">Reminder</Link>
          </TouchableOpacity>

          <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-indigo-100 shadow">
            <Ionicons name="settings" size={30} color="blue" />
            <Link href="/admin" className="mt-2 text-sm font-medium">Admin</Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
