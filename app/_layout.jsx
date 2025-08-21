// app/_layout.js
import { Drawer } from "expo-router/drawer";
import { ImageProvider } from "../context/ImageContext";
import "../global.css";

export default function RootLayout() {
  return (
    <ImageProvider>
      <Drawer>
        {/* Your visible screens */}
        <Drawer.Screen name="index" options={{ title: "Baidya Healthcare" }} />
        <Drawer.Screen name="client/index" options={{ title: "Client" }} />
        <Drawer.Screen name="admin/index" options={{ title: "Admin" }} />
        <Drawer.Screen name="hospital/index" options={{ title: "Hospital" }} />
        <Drawer.Screen name="reminder/index" options={{ title: "Reminder" }} />
        <Drawer.Screen name="report/index" options={{ title: "Report" }} />
        <Drawer.Screen name="camera/index" options={{ title: "Camera" }} />
        <Drawer.Screen name="location/index" options={{ title: "Location" }} />
        
        {/* Hide these screens from drawer */}
        <Drawer.Screen 
          name="visit/index" 
          options={{ drawerItemStyle: { display: "none" } }} 
        />
        <Drawer.Screen 
          name="image-preview/index" 
          options={{ drawerItemStyle: { display: "none" } }} 
        />
        <Drawer.Screen 
          name="location-preview/index" 
          options={{ drawerItemStyle: { display: "none" } }} 
        />
        <Drawer.Screen 
          name="(drawer)" 
          options={{ drawerItemStyle: { display: "none" } }} 
        />
      </Drawer>
    </ImageProvider>
  );
}