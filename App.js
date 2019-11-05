import React from "react";
import Reactions from "./components/reactions";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Reactions style={styles.reactionGauge} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  reactionGauge: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 10
  }
});
