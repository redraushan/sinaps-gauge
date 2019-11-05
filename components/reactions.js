import React from "react";
import ReactionGauge from "./reaction-gauge";
import ReactionPicker from "./reaction-picker";
import ReactionBar from "./reaction-bar";
import { StyleSheet, View } from "react-native";

export default class Reactions extends React.Component {
  reactions = [
    { id: 1, value: 33 },
    { id: 2, value: 22 },
    { id: 3, value: 0 },
    { id: 4, value: 45 }
  ];
  state = {
    isOpen: true,
    reactions: this.reactions
  };

  toggleReaction = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleReaction = reactionId => {
    console.log(`reaction picked: ${reactionId}`);
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      reactionId: prevState.reactionId === reactionId ? null : reactionId,
      reactions:
        prevState.reactionId === reactionId
          ? this.reactions
          : [{ id: reactionId, value: 100 }]
    }));
  };

  render() {
    console.log("rendering reactions..");
    const { style } = this.props;
    const { isOpen, reactionId, reactions } = this.state;
    return (
      <React.Fragment>
        <View style={{ ...styles.container, ...style }}>
          <ReactionGauge
            selectedReaction={reactionId}
            onPress={this.toggleReaction}
          />
          {isOpen ? (
            <ReactionPicker
              selectedReaction={reactionId}
              onPress={this.handleReaction}
            />
          ) : null}
        </View>
        <ReactionBar reactions={reactions} />
      </React.Fragment>
    );
  }
}

Reactions.defaultProps = {
  onClick: () => {}
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center"
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
    width: 20,
    height: 20
  }
});
