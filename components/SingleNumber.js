import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";

export default function SingleNumber({ num, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{num}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: width / 4,
    height: width / 4,
    borderRightColor: "grey",
    borderRightWidth: 1,
  },
  text: {
    color: "#fff",
    fontSize: 35,
  },
});
