import React from "react";
import { StyleSheet, View } from "react-native";

export default function ReactionBar() {
  return <View style={{ ...styles.container }}></View>;
}

ReactionBar.defaultProps = {
  onPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    backgroundColor: "#fff",
    borderRadius: 500,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  }
});
