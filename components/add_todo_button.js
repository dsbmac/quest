import React from "react";
import { Container, Fab, Icon } from "native-base";
import { Text, View } from "react-native";

export default class AddToDoButton extends React.Component {
  render() {
    const { onAddNewToDo } = this.props;
    return (
      <Container>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => onAddNewToDo((show = true))}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
