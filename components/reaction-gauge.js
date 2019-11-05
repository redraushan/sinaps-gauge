import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";

export default function ReactionGauge({ style, onPress, selectedReaction }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View style={{ ...styles.container, ...style }}>
        {!selectedReaction ? (
          <React.Fragment>
            <Image
              style={styles.emoticon}
              source={require("../assets/1.png")}
            />
            <Image
              style={{ ...styles.emoticon, ...styles.emoticonB }}
              source={require("../assets/2.png")}
            />
            <Image
              style={{ ...styles.emoticon, ...styles.emoticonC }}
              source={require("../assets/7.png")}
            />
          </React.Fragment>
        ) : null}

        {selectedReaction === 1 && (
          <Image style={styles.emoticon} source={require("../assets/1.png")} />
        )}

        {selectedReaction === 2 && (
          <Image style={styles.emoticon} source={require("../assets/2.png")} />
        )}

        {selectedReaction === 3 && (
          <Image style={styles.emoticon} source={require("../assets/3.png")} />
        )}

        {selectedReaction === 4 && (
          <Image style={styles.emoticon} source={require("../assets/4.png")} />
        )}

        {selectedReaction === 5 && (
          <Image style={styles.emoticon} source={require("../assets/5.png")} />
        )}

        {selectedReaction === 6 && (
          <Image style={styles.emoticon} source={require("../assets/6.png")} />
        )}

        {selectedReaction === 7 && (
          <Image style={styles.emoticon} source={require("../assets/7.png")} />
        )}
      </View>
    </TouchableOpacity>
  );
}

ReactionGauge.defaultProps = {
  onPress: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    transform: [{ translateX: 2 }]
  },
  emoticonB: {
    transform: [{ translateX: -18 }],
    zIndex: -1
  },
  emoticonC: {
    transform: [{ translateX: -35 }],
    zIndex: -2
  },
  emoticon: {
    width: 30,
    height: 30
  }
});