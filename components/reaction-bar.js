import React from "react";
import { StyleSheet, View } from "react-native";
import { REACTION_COLOR } from "./constant";

export default function ReactionBar({ reactions }) {
  const totalReactions = reactions.reduce((pv, cv) => {
    return pv + cv.value;
  }, 0);

  const getPercentage = reaction => {
    return (reaction / totalReactions) * 100;
  };
  return (
    <View style={styles.container}>
      {reactions.map((reaction, index, arr) => {
        return reaction.value > 0 ? (
          <View
            key={reaction.id}
            style={{
              ...styles.bar,
              backgroundColor: REACTION_COLOR[reaction.id],
              width: `${getPercentage(reaction.value)}%`,
              borderTopLeftRadius: index === 0 ? 500 : 0,
              borderBottomLeftRadius: index === 0 ? 500 : 0,
              borderTopRightRadius: index === arr.length - 1 ? 500 : 0,
              borderBottomRightRadius: index === arr.length - 1 ? 500 : 0
            }}
          ></View>
        ) : null;
      })}
    </View>
  );
}

ReactionBar.defaultProps = {
  onPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
    width: "100%"
  },
  bar: {
    height: 10
  }
});
