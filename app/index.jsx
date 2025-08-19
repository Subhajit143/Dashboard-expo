import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12 || 12; // 12-hr format
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Clock Section */}
        <View className="items-center my-6">
          <View className="w-44 h-44 rounded-full border-2 border-orange-500 bg-white items-center justify-center shadow">
            <Text className="text-2xl font-bold">
              {hours}:{minutes}:{seconds}
            </Text>
            <Text className="text-sm">{ampm}</Text>
            <Text className="text-sm text-blue-500 mt-2">Start Working</Text>
          </View>
        </View>

        {/* Grid Buttons */}
        <View className="flex-row flex-wrap justify-around mt-2">
          <Link href="/visit" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-purple-100 shadow">
              <Ionicons name="calendar" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Visits</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/client" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-red-100 shadow">
              <Ionicons name="person" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Client</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/hospital" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-emerald-100 shadow">
              <Ionicons name="medkit" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Hospitals</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/report" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-gray-100 shadow">
              <Ionicons name="document-text" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Report</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/reminder" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-cyan-100 shadow">
              <Ionicons name="notifications" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Reminder</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/admin" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-indigo-100 shadow">
              <Ionicons name="settings" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Admin</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/camera" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-yellow-100 shadow">
              <Ionicons name="camera" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Camera</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/location" asChild>
            <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-green-100 shadow">
              <Ionicons name="location" size={30} color="blue" />
              <Text className="mt-2 text-sm font-medium">Location</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
