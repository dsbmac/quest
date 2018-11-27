import React from "react";
import { Container, Fab, Icon } from "native-base";
import { Text, View } from "react-native";

export default class AddToDoButton extends React.Component {
  render() {
    return (
      <Container>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => console.log("Add todo button clicked")}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
