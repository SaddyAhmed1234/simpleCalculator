import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SingleNumber from "./SingleNumber";

export default function NumberLine({
  num1,
  num2,
  num3,
  num4,
  num1Press,
  num2Press,
  num3Press,
  num4Press,
}) {
  return (
    <View style={styles.container}>
      <SingleNumber num={num1} onPress={num1Press} />
      <SingleNumber num={num2} onPress={num2Press} />
      <SingleNumber num={num3} onPress={num3Press} />
      <SingleNumber num={num4} onPress={num4Press} />
    </View>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  text: {
    color: "red",
    fontSize: 35,
  },
});
