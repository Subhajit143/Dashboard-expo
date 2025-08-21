// components/location/locationFunction.js
import * as Location from "expo-location";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";
import { useImage } from "../../context/ImageContext";

export default function LocationFunction() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLocationFetched, setIsLocationFetched] = useState(false);
  const { updateLocation } = useImage();

  const getLocation = async () => {
    // Ask permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    // Get current position
    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);
    updateLocation(location.coords);
    setIsLocationFetched(true);
  };

  const openInMaps = () => {
    if (currentLocation) {
      const url = `https://www.google.com/maps?q=${currentLocation.latitude},${currentLocation.longitude}`;
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Current Location</Text>

      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : currentLocation ? (
        <View>
          <Text style={styles.text}>Latitude: {currentLocation.latitude}</Text>
          <Text style={styles.text}>Longitude: {currentLocation.longitude}</Text>
          {currentLocation.accuracy && (
            <Text style={styles.text}>Accuracy: {currentLocation.accuracy.toFixed(2)} meters</Text>
          )}
          
          <Button title="Open in Google Maps" onPress={openInMaps} />
        </View>
      ) : (
        <Text style={styles.text}>Fetching location...</Text>
      )}

      <Button title="Refresh Location" onPress={getLocation} />
      
      {/* Only show Go to Home button after location is fetched */}
      {isLocationFetched && (
        <View style={styles.homeButton}>
          <Link href="/" asChild>
            <Button title="Go to Home" />
          </Link>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 4 },
  error: { color: "red", fontSize: 16, marginVertical: 4 },
  homeButton: { marginTop: 20 }
});