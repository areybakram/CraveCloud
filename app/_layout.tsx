import CustomHeader from "@/Components/CustomHeader";
import { Stack } from "expo-router";

export const unstable_settings = {
  // anchor: '(tabs)',
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        header: () => <CustomHeader/>,
      }} />
      {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
    </Stack>
  );
}
