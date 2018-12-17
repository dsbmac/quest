import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import { Text, View } from 'react-native';

export default class AddProgramButton extends React.Component {
  onAddNewProgram = (page) => {
    this.setState({
      editorPage: page,
    });
  };

  render() {
    return (
      <Container>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          // onPress={() => console.log("Add Program button clicked")}
          onPress={() => this.props.changePage('NEW_PROGRAM')}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
