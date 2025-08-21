// app/location-preview/index.js
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Linking, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useImage } from '../../context/ImageContext';

// Conditionally import react-native-maps
let MapView, Marker;
if (Platform.OS !== 'web') {
  try {
    const maps = require('react-native-maps');
    MapView = maps.default;
    Marker = maps.Marker;
  } catch (e) {
    console.log('react-native-maps not available');
  }
}

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

  const openInMaps = () => {
    if (currentLocation) {
      const url = `https://www.google.com/maps?q=${currentLocation.latitude},${currentLocation.longitude}`;
      Linking.openURL(url);
    }
  };

  if (!currentLocation) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text className="text-lg">No location data to display</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="p-4 bg-blue-500">
          <Text className="text-white text-xl font-bold text-center">📍 Location Details</Text>
        </View>

        {/* Map Section */}
        <View className="p-4">
          {Platform.OS !== 'web' && MapView ? (
            <View className="h-80 rounded-lg overflow-hidden mb-4">
              <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  }}
                  title="Your Location"
                />
              </MapView>
            </View>
          ) : (
            <View className="h-40 bg-blue-100 rounded-lg mb-4 items-center justify-center">
              <Text className="text-center text-blue-800">Map view is only available on mobile devices</Text>
            </View>
          )}

          {/* Location Details */}
          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="text-lg font-bold mb-3">Location Coordinates</Text>
            
            <View className="mb-3">
              <Text className="text-sm text-gray-600">Latitude</Text>
              <Text className="text-base font-mono">{currentLocation.latitude}</Text>
            </View>
            
            <View className="mb-3">
              <Text className="text-sm text-gray-600">Longitude</Text>
              <Text className="text-base font-mono">{currentLocation.longitude}</Text>
            </View>
            
            {currentLocation.accuracy && (
              <View className="mb-4">
                <Text className="text-sm text-gray-600">Accuracy</Text>
                <Text className="text-base">{currentLocation.accuracy.toFixed(2)} meters</Text>
              </View>
            )}

            {/* Action Buttons */}
            <TouchableOpacity 
              className="bg-blue-500 py-3 px-4 rounded-lg items-center mb-3"
              onPress={openInMaps}
            >
              <Text className="text-white font-bold">Open in Google Maps</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-gray-500 py-3 px-4 rounded-lg items-center"
              onPress={() => router.back()}
            >
              <Text className="text-white font-bold">Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}