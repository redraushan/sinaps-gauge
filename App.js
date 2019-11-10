import React from "react";
import Reactions from "./components/reactions";
import { StyleSheet, View, ScrollView } from "react-native";

const reactions = [
  { id: 1, value: 33 },
  { id: 2, value: 22 },
  { id: 3, value: 10 },
  { id: 4, value: 50 },
  { id: 5, value: 22 },
  { id: 6, value: 40 },
  { id: 7, value: 60 }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ ...style.reactionContainer }}>
        <Reactions reactions={reactions} style={styles.reactionGauge} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  reactionContainer: {
    margin: 20,
    borderRadius: 15,
    backgroundColor: "#F1F3F7",
    justifyContent: "center",
    padding: 30,
    marginTop: 100
  },
  reactionGauge: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 10
  }
});
