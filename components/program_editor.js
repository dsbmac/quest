import React from "react";
import { connect } from "react-redux";
import { inject, observer } from "mobx-react";
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
  Label
} from "native-base";

import ProgramEditorHome from "../components/program_editor_home";
import TodoStub from "../components/todo_stub";
import NewProgram from "../components/new_program";
import { addProgram, deleteProgram, updateProgram } from "../store/reducers";

@inject("rootStore")
@observer
class ProgramEditor extends React.Component {
  constructor(props) {
    super(props);
    const tasks = [];
    this.state = {
      editorPage: this.props.editorPage
    };
    console.log(this.props.rootStore.agendaStore.agendas);
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    switch (this.props.editorPage) {
      case "NEW_PROGRAM":
        return (
          <NewProgram
            addProgram={addProgram}
            updateProgram={updateProgram}
            deleteProgram={deleteProgram}
            changePage={this.props.changePage}
          />
        );
      default:
        return <ProgramEditorHome changePage={this.props.changePage} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    programs: state.programs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProgram: program => dispatch(addProgram(program)),
    deleteProgram: program => dispatch(deleteProgram(program)),
    updateProgram: program => dispatch(updateProgram(program))
  };
}

export default ProgramEditor;
