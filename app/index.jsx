// app/index.js
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useImage } from "../context/ImageContext";

export default function HomeScreen() {
  const [time, setTime] = useState(new Date());
  const { imageUri, location } = useImage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  // const openLocationInMaps = () => {
  //   if (location) {
  //     const url = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
  //     Linking.openURL(url);
  //   }
  // };

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

        {/* Image Section - Only show if there's an image */}
        {imageUri && (
          <View className="mx-4 my-4 p-4 bg-gray-100 rounded-lg">
            <Text className="text-lg font-bold mb-2">Last Captured Image</Text>

            {/* Image */}
            <Link href="/image-preview" asChild>
              <TouchableOpacity>
                <Image
                  source={{ uri: imageUri }}
                  style={{ width: "100%", height: 200, borderRadius: 8 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </Link>
          </View>
        )}

        {/* Location Section - Only show if there's location data */}
        {location && (
          <View className="mx-4 my-4 p-4 bg-gray-100 rounded-lg">
            <Text className="text-lg font-bold mb-2">📍 Current Location</Text>

            {/* Simple location display without map */}
            <View className="h-40 bg-blue-100 rounded-lg my-2 items-center justify-center">
              <Ionicons name="map" size={40} color="blue" />
              <Text className="mt-2 text-center">View detailed location in preview</Text>
            </View>

            {/* Location Data */}
            <View className="mt-4">
              <Text className="text-md font-semibold mb-1">
                Location Details:
              </Text>
              <Text className="text-sm">Latitude: {location.latitude}</Text>
              <Text className="text-sm">Longitude: {location.longitude}</Text>
              {location.accuracy && (
                <Text className="text-sm">
                  Accuracy: {location.accuracy.toFixed(2)} meters
                </Text>
              )}

              {/* <TouchableOpacity
                className="mt-3 bg-blue-500 py-2 px-4 rounded-lg items-center"
                onPress={openLocationInMaps}
              >
                <Text className="text-white">Open in Google Maps</Text>
              </TouchableOpacity> */}

              <Link href="/location-preview" asChild>
                <TouchableOpacity className="mt-3 bg-green-500 py-2 px-4 rounded-lg items-center">
                  <Text className="text-white">View Detailed Location</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        )}

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

          {imageUri && (
            <Link href="/image-preview" asChild>
              <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-pink-100 shadow">
                <Ionicons name="image" size={30} color="blue" />
                <Text className="mt-2 text-sm font-medium">Image Preview</Text>
              </TouchableOpacity>
            </Link>
          )}

          {location && (
            <Link href="/location-preview" asChild>
              <TouchableOpacity className="w-[40%] h-28 my-2 rounded-2xl items-center justify-center bg-teal-100 shadow">
                <Ionicons name="map" size={30} color="blue" />
                <Text className="mt-2 text-sm font-medium">Location Preview</Text>
              </TouchableOpacity>
            </Link>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}