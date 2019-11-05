import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";

export default function ReactionPicker({ style, onPress, selectedReaction }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableOpacity onPress={() => onPress(1)}>
        <View
          style={{
            ...styles.emoticon1,
            ...(selectedReaction !== 1
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/1.png")}
          />
          {selectedReaction === 1 && (
            <View
              style={{
                ...styles.picked,
                transform: [{ translateX: 0 }],
                backgroundColor: "#56CCF2"
              }}
            >
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(2)}>
        <View
          style={{
            ...styles.emoticon2,
            ...(selectedReaction !== 2
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/2.png")}
          />

          {selectedReaction === 2 && (
            <View style={{ ...styles.picked, backgroundColor: "#2D9CDB" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(3)}>
        <View
          style={{
            ...styles.emoticon3,
            ...(selectedReaction !== 3
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/3.png")}
          />
          {selectedReaction === 3 && (
            <View style={{ ...styles.picked, backgroundColor: "#2F80ED" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(4)}>
        <View
          style={{
            ...styles.emoticon4,
            ...(selectedReaction !== 4
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/4.png")}
          />
          {selectedReaction === 4 && (
            <View style={{ ...styles.picked, backgroundColor: "#936FCF" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(5)}>
        <View
          style={{
            ...styles.emoticon5,
            ...(selectedReaction !== 5
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/5.png")}
          />
          {selectedReaction === 5 && (
            <View style={{ ...styles.picked, backgroundColor: "#E167FF" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(6)}>
        <View
          style={{
            ...styles.emoticon6,
            ...(selectedReaction !== 6
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/6.png")}
          />

          {selectedReaction === 6 && (
            <View style={{ ...styles.picked, backgroundColor: "#FF6767" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(7)}>
        <View
          style={{
            ...styles.emoticon7,
            ...(selectedReaction !== 7
              ? { borderWidth: 3 }
              : { borderWidth: 0 })
          }}
        >
          <Image
            style={{ ...styles.emoticons }}
            source={require("../assets/7.png")}
          />
          {selectedReaction === 7 && (
            <View style={{ ...styles.picked, backgroundColor: "#D02222" }}>
              <Text style={styles.pickedTick}>&#10004;</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: "solid",
    transform: [{ translateX: -12 }]
  },
  emoticons: {
    width: 22,
    height: 22
  },

  picked: {
    position: "absolute",
    width: 26,
    height: 26,
    transform: [{ translateX: -3 }],
    borderRadius: 50
  },

  pickedTick: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 4.5
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
