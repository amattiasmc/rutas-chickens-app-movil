import { Stack } from "expo-router";
import { SolicitudesProvider } from "../context/SolicitudesContext";

export default function RootLayout() {
  return (
    <SolicitudesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SolicitudesProvider>
  );
}
