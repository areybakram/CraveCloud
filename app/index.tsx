import React from "react";
import { Text, View } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const Page = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Page</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Page;
