import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheetComponent, { BottomSheetRef } from "./BottomSheet";

import { Button } from "react-native";
const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          name="search-outline"
          size={20}
          color={Colors.medium}
          style={{ right: 10, top: 10, paddingLeft: 20 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Restraunts , Dishes , Groceries"></TextInput>
      </View>

      <Link href={"/(modal)/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = ({ onPress }: any) => {
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const dismiss = () => { bottomSheetRef.current?.close() };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheetComponent ref={bottomSheetRef}>
        <Text style={{ fontSize: 20 }}>Hello from Bottom Sheet!</Text>
        
      </BottomSheetComponent>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => onPress()}>
          <Image
            style={styles.bike}
            source={require("../assets/images/bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress()}
          style={styles.locationContainer}>
          <Text style={styles.locationTitle}>Delivery . Now</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.subTitle}>Lahore, Pakistan</Text>
            <Ionicons name="chevron-down" color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "green",
  },
  bike: {
    height: 40,
    width: 40,
  },

  locationContainer: {
    flex: 1,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 8,
    borderRadius: 30,
  },

  locationTitle: {
    fontSize: 14,
    color: Colors.medium,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  searchContainer: {
    height: 55,
    backgroundColor: "white",
  },

  searchSection: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },

  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    flexDirection: "row",
  },
  optionButton: {
    padding: 8,
    borderRadius: 50,
  },

  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
});

export default CustomHeader;
