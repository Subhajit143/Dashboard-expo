// app/location-preview/index.js
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useImage } from '../../context/ImageContext';

export default function LocationPreview() {
  const router = useRouter();
  const { location } = useImage();
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (location) {
      setCurrentLocation(location);
    } else {
      // If no location in context, go back
      router.back();
    }
  }, [location]);

  

 

 

  if (!currentLocation) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text className="text-lg">No location data to display</Text>
        <TouchableOpacity 
          className="mt-4 bg-blue-500 py-2 px-4 rounded-lg"
          onPress={() => router.back()}
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="p-4 bg-blue-500 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold text-center flex-1">📍 Location Details</Text>
        </View>

        {/* Location Visualization */}
        <View className="p-4">
          <View className="h-64 bg-blue-50 rounded-lg mb-6 items-center justify-center border-2 border-blue-200">
            <Ionicons name="location" size={64} color="#3b82f6" />
            <Text className="text-blue-800 text-lg font-semibold mt-4">GPS Coordinates</Text>
            <Text className="text-blue-600 text-sm mt-2">Your current position</Text>
          </View>

          {/* Location Details */}
          <View className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">📍 Location Coordinates</Text>
            
            <View className="mb-5 bg-white p-4 rounded-lg shadow-sm">
              <Text className="text-sm text-gray-500 mb-1">Latitude</Text>
              <Text className="text-xl font-mono text-gray-800">{currentLocation.latitude.toFixed(6)}</Text>
            </View>
            
            <View className="mb-5 bg-white p-4 rounded-lg shadow-sm">
              <Text className="text-sm text-gray-500 mb-1">Longitude</Text>
              <Text className="text-xl font-mono text-gray-800">{currentLocation.longitude.toFixed(6)}</Text>
            </View>
            
            {currentLocation.accuracy && (
              <View className="mb-6 bg-white p-4 rounded-lg shadow-sm">
                <Text className="text-sm text-gray-500 mb-1">Accuracy</Text>
                <Text className="text-lg text-gray-800">{currentLocation.accuracy.toFixed(2)} meters</Text>
                <Text className="text-xs text-gray-400 mt-1">Lower values are more accurate</Text>
              </View>
            )}

            {/* Map Services */}
            {/* <View className="mb-6">
              <Text className="text-lg font-semibold text-gray-700 mb-3">Open in Maps</Text>
              
              <TouchableOpacity 
                className="bg-red-500 py-4 px-4 rounded-lg items-center mb-3 flex-row justify-center"
                onPress={openInGoogleMaps}
              >
                <Ionicons name="logo-google" size={20} color="white" />
                <Text className="text-white font-bold ml-2">Open in Google Maps</Text>
              </TouchableOpacity>

              {Platform.OS === 'ios' && (
                <TouchableOpacity 
                  className="bg-black py-4 px-4 rounded-lg items-center mb-3 flex-row justify-center"
                  onPress={openInAppleMaps}
                >
                  <Ionicons name="logo-apple" size={20} color="white" />
                  <Text className="text-white font-bold ml-2">Open in Apple Maps</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity 
                className="bg-gray-600 py-4 px-4 rounded-lg items-center flex-row justify-center"
                onPress={openInMaps}
              >
                <Ionicons name="map" size={20} color="white" />
                <Text className="text-white font-bold ml-2">Open in Default Maps</Text>
              </TouchableOpacity>
            </View> */}

            {/* Additional Information */}
            <View className="bg-blue-50 p-4 rounded-lg">
              <Text className="text-blue-800 font-semibold mb-2">📍 What this means:</Text>
              <Text className="text-blue-700 text-sm">
                • Latitude: North/South position (closer to 0 = equator){'\n'}
                • Longitude: East/West position (closer to 0 = prime meridian){'\n'}
                • Accuracy: How precise this location measurement is
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="mt-6">
              <TouchableOpacity 
                className="bg-blue-500 py-4 px-4 rounded-lg items-center mb-3"
                onPress={() => router.push('/location')}
              >
                <Text className="text-white font-bold">Get New Location</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className="bg-gray-500 py-3 px-4 rounded-lg items-center"
                onPress={() => router.back()}
              >
                <Text className="text-white">Go Back to Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}