import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import categories from "../../assets/data/filter.json";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.ItemContainer}>
      <TouchableOpacity style={styles.Sort}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <View style={styles.TextItems}>
          <Text>Sort</Text>
          <Text style={{ color: Colors.medium, fontSize: 10 }}>
            Recommended
          </Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Sort}>
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <View style={styles.TextItems}>
          <Text>Hygiene</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Sort}>
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <View style={styles.TextItems}>
          <Text>Offers</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Sort}>
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <View style={styles.TextItems}>
          <Text>Dietary</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>

    <Text style={styles.Header}>Categories</Text>
  </>
);

const Filter = () => {
  const [items, setitems] = useState<Category[]>(categories);
  const [selected, setselected] = useState<Category[]>([]);
  const flexibleWidth = useSharedValue(0);
  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false;
      return item;
    });
    setitems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexibleWidth.value,
    };
  });

  const renderItem = ({ item, index }: { item: Category }) => (
    <View style={styles.row}>
      <Text style={styles.propergap}>
        {item.name} ({item.count})
      </Text>
      {/* <BouncyCheckbox
        // size={24}
        fillColor={Colors.primary}
        unfillColor="#FFFFFF"
        disableBuiltInState
        // style={{ padding: 0, margin: 0 }}
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 3,
          borderWidth: 3,
        }}
        isChecked={item.checked}
        
        
        onPress={() => {}}
      /> */}

      <BouncyCheckbox
        disableBuiltInState
        fillColor={Colors.primary}
        unfillColor="#FFFFFF"
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 3,
          borderWidth: 3,
        }}
        isChecked={items[index].checked}
        onPress={() => {
          const updatedItems = items.map((item, i) => {
            if (i === index) {
              return { ...item, checked: !item.checked }; // toggle
            }
            return item;
          });

          setitems(updatedItems);
          //   console.log(updatedItems)
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="clear" onPress={handleClearAll} />
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={ItemBox}
      />
      <View style={{ height: 77 }}></View>
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={styles.fullButton}>
            <Text style={styles.fullButtonText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={styles.fullButton}>
            <Text style={styles.fullButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: Colors.mediumDark,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // justifyContent: "center",
  },
  fullButton: {
    backgroundColor: Colors.primary,
    margin: 16,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  fullButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  ItemContainer: {
    // flexDirection:'row'
    backgroundColor: "white",
    padding: 8,
    marginBottom: 8,
    borderRadius: 16,
  },
  TextItems: {
    flex: 1,
  },
  Sort: {
    flexDirection: "row",
    backgroundColor: "white",
    gap: 20,
    // justifyContent:'center',
    alignItems: "center",
    // borderRadius:16
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  Header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    //  alignItems: "center",
    // justifyContent: "space-between",
  },
  propergap: {
    // flex:1
  },

  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
});

export default Filter;
