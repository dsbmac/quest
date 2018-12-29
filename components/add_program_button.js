import React from "react";
import { inject } from "mobx-react";
import { Container, Fab, Icon } from "native-base";
import { Text, View } from "react-native";
import RootStore from "../RootStore";

@inject("rootStore")
class AddProgramButton extends React.Component {
  onAddNewProgram = page => {
    this.setState({
      editorPage: page
    });
  };

  render() {
    return (
      <Container>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          // onPress={() => console.log("Add Program button clicked")}
          onPress={() => {
            this.props.changePage("NEW_PROGRAM");
          }}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default AddProgramButton;
