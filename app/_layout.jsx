import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Drawer navigator as a screen */}
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="client/index" options={{ title: "Client" }} />
      <Stack.Screen name="admin/index" options={{ title: "Admin" }} />
      <Stack.Screen name="hospital/index" options={{ title: "Hospital" }} />
      <Stack.Screen name="reminder/index" options={{ title: "Reminder" }} />
      <Stack.Screen name="report/index" options={{ title: "Report" }} />
      <Stack.Screen name="camera/index" options={{ title: "Camera" }} />
      <Stack.Screen name="location/index" options={{ title: "Location" }} />
    </Stack>
  );
}
