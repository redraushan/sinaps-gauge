import React from "react";
import PropTypes from "prop-types";
import ReactionGauge from "./reaction-gauge";
import ReactionPicker from "./reaction-picker";
import ReactionBar from "./reaction-bar";
import { View, TouchableOpacity } from "react-native";

export default class Reactions extends React.Component {
  state = {
    isOpen: false
  };

  toggleReaction = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleReaction = reactionId => {
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
    const { style, reactions } = this.props;
    const { isOpen, reactionId } = this.state;
    return (
      <React.Fragment>
        <View style={{ ...style }}>
          <ReactionGauge
            selectedReaction={reactionId}
            onPress={this.toggleReaction}
            style={{ flex: 1, flexGrow: 5 }}
          />

          {isOpen ? (
            <TouchableOpacity
              onPress={this.toggleReaction}
              style={{
                position: "absolute",
                backgroundColor: "tranparent",
                paddingBottom: 400,
                paddingTop: 400,
                paddingLeft: 400,
                right: 0
              }}
            >
              <ReactionPicker
                selectedReaction={reactionId}
                onPress={this.handleReaction}
                style={{ flex: 1, flexGrow: 3 }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <ReactionBar reactions={reactions} />
      </React.Fragment>
    );
  }
}

Reactions.defaultProps = {
  onClick: () => {},
  reactions: [{ id: 1, value: 100 }]
};

Reactions.propTypes = {
  onClick: PropTypes.func,
  reactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, value: PropTypes.number })
  )
};
