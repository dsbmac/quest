import React from 'react';
import {
  Separator,
  Button,
  List,
  Container,
  Header,
  Content,
  Input,
  Item,
  Body,
  Icon,
  CheckBox,
  ListItem,
  Title,
  Form,
  Textarea,
  Text,
  Label,
} from 'native-base';

import ProgramEditorHome from '../components/program_editor_home';
import TodoStub from '../components/todo_stub';
import NewProgram from '../components/new_program';

export default class ProgramEditor extends React.Component {
  constructor(props) {
    super(props);
    const tasks = [];
    this.state = {
      editorPage: this.props.editorPage,
    };
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    switch (this.props.editorPage) {
      case 'NEW_PROGRAM':
        return <NewProgram changePage={this.props.changePage} />;
      default:
        return <ProgramEditorHome changePage={this.props.changePage} />;
    }
  }
}