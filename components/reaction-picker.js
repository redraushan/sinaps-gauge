import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";

export default function ReactionPicker({ style, onPress }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableOpacity onPress={() => onPress(1)}>
        <View style={styles.emoticon1}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/1.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(2)}>
        <View style={styles.emoticon2}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/2.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(3)}>
        <View style={styles.emoticon3}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/3.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(4)}>
        <View style={styles.emoticon4}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/4.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(5)}>
        <View style={styles.emoticon5}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/5.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(6)}>
        <View style={styles.emoticon6}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/6.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(7)}>
        <View style={styles.emoticon7}>
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/7.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    transform: [{ translateX: -12 }]
  },
  emoticons: {
    width: 22,
    height: 22
  },

  emoticon1: {
    margin: 5,
    borderColor: "#56CCF2",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon2: {
    margin: 5,
    borderColor: "#2D9CDB",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon3: {
    margin: 5,
    borderColor: "#2F80ED",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon4: {
    margin: 5,
    borderColor: "#936FCF",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon5: {
    margin: 5,
    borderColor: "#E167FF",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon6: {
    margin: 5,
    borderColor: "#FF6767",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  },
  emoticon7: {
    margin: 5,
    borderColor: "#D02222",
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid"
  }
});
