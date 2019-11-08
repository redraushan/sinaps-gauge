import React from "react";
import Reactions from "./components/reactions";
import { StyleSheet, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{margin: 20, borderRadius: 15, backgroundColor: '#F1F3F7', justifyContent : 'center', padding: 30, marginTop: 100 }}>
        <Reactions style={styles.reactionGauge} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  reactionGauge: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 10
  }
});
