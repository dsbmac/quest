import React from "react";
import { Content, Header, Button, Container, Fab, Icon } from "native-base";
import { Text, View } from "react-native";

export default class CreatorAddToDoButton extends React.Component {
  render() {
    const { onAddNewToDo } = this.props;
    return (
      <Container>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          // onPress={() => console.log("Add todo button clicked")}
          onPress={() => onAddNewToDo((show = true))}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
