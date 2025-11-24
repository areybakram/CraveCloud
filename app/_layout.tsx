// import CustomHeader from "@/Components/CustomHeader";
// import { Stack } from "expo-router";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// export const unstable_settings = {
//   // anchor: '(tabs)',
//   initialRouteName: "index",
// };

// export default function RootLayout() {
//   return (
//     <BottomSheetModalProvider>
//       <Stack>
//         <Stack.Screen
//           name="index"
//           options={{
//             header: () => <CustomHeader />,
//           }}
//         />
//         {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
//       </Stack>
//     </BottomSheetModalProvider>
//   );
// }

import BottomSheetComponent, { BottomSheetRef } from "@/Components/BottomSheet";
import CustomHeader from "@/Components/CustomHeader";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Link, router, Stack, useNavigation } from "expo-router";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const sheetRef = useRef<BottomSheetRef>(null);
  const dismiss = () => {
    sheetRef.current?.close();
  };

 

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => (
                <CustomHeader onPress={() => sheetRef.current?.open()} />
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              presentation: "modal",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: Colors.lightGrey },
              headerLeft: () => (
                // <View style={{backgroundColor:Colors.lightGrey  }}>
                  <TouchableOpacity
                    onPress={() => {
                      router.back();
                    }}
                    style={{backgroundColor:Colors.lightGrey , }}>
                    <Ionicons
                      name="close"
                      size={28}
                      color={Colors.primary}
                      style={{
                        backgroundColor: Colors.lightGrey,  
                      }}></Ionicons>
                  </TouchableOpacity>
                // </View>
              ),
            }}
          />
        </Stack>
        <BottomSheetComponent ref={sheetRef}>
          <View style={styles.container}>
            <View style={styles.toggle}>
              <TouchableOpacity style={styles.toggleActive}>
                <Text style={styles.activeText}>Delivery</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.toggleInactive}>
                <Text style={styles.InactiveText}>Pickup</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subHeader}>Your Location</Text>

            <Link href={"/"} asChild>
              <TouchableOpacity>
                <View style={styles.subheaderItems}>
                  <Ionicons
                    name="location-sharp"
                    size={24}
                    color={Colors.medium}
                    style={{ marginRight: 8 }}
                  />
                  <Text style={{ flex: 1 }}>Current Location</Text>
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color={Colors.primary}
                  />
                </View>
              </TouchableOpacity>
            </Link>

            <Text style={styles.subHeader}>Arrival Time</Text>
            <TouchableOpacity>
              <View style={styles.subheaderItems}>
                <Ionicons
                  name="stopwatch-outline"
                  size={24}
                  color={Colors.medium}
                  style={{ marginRight: 8 }}
                />
                <Text style={{ flex: 1 }}>Now</Text>
                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color={Colors.primary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BgButton} onPress={() => dismiss()}>
              <Text style={styles.confirmButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetComponent>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: -16,
  },
  confirmButton: {
    color: "white",
    fontWeight: "bold",
  },
  BgButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: "center",
    marginTop: 32,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    // backgroundColor:Colors.grey,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 32,
  },
  toggleInactive: {},

  activeText: {
    color: "white",
    fontWeight: "bold",
  },
  InactiveText: {
    color: Colors.primary,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 12,
    marginLeft: 16,
  },
  subheaderItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 12,
    borderColor: Colors.grey,
    borderWidth: 1,
    alignItems: "center",
  },
});
