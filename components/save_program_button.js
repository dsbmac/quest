import React from "react";
import { Container, Fab, Icon } from "native-base";
import { Text, View } from "react-native";
// import {
//   addProgram,
//   deleteProgram,
//   updateProgram
// } from "../store/reducers/program_reducer";

export default class SaveProgramButton extends React.Component {
  saveToDoData = todo => {
    this.props.addTodo(todo);
  };

  render() {
    const { onAddNewToDo } = this.props;
    return (
      <Container>
        <Fab
          warning
          position="bottomRight"
          onPress={() => {
            console.log("Save program button clicked");
          }}
          // onPress={() => onAddNewToDo((show = true))}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
