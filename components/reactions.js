import React from "react";
import ReactionGauge from "./reaction-gauge";
import ReactionPicker from "./reaction-picker";
import ReactionBar from "./reaction-bar";

import { StyleSheet, View } from "react-native";

export default class Reactions extends React.Component {
  state = {
    isOpen: true
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
      reactionId
    }));
  };

  render() {
    console.log("rendering reactions..");
    const { style } = this.props;
    const { isOpen, reactionId } = this.state;
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
        <ReactionBar />
      </React.Fragment>
    );
  }
}

Reactions.defaultProps = {
  onClick: () => {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
