import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LocationFunction() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    // Ask permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    // Get current position
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  };

  useEffect(() => {
    getLocation(); // get location when component loads
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Current Location</Text>

      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <View>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longitude: {location.longitude}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Fetching location...</Text>
      )}

      <Button title="Refresh Location" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 4 },
  error: { color: "red", fontSize: 16, marginVertical: 4 },
});
