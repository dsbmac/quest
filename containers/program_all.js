import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  Icon,
} from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import NewProgram from '../components/new_program';
import { connect } from 'react-redux';
import {
  addProgram,
  deleteProgram,
  updateProgram,
} from '../store/reducers/program_reducer';

import { CheckBox, ListItem } from 'native-base';

class ProgramAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_program: false,
    };
  }

  saveProgramData = (program) => {
    this.addNewProgram((show = false));
    this.props.addProgram(program);
  };

  addNewProgram = (show) => {
    this.setState({
      new_program: show,
    });
  };

  screenFilterPrograms = () => {
    const { screen, programs } = this.props;
    if (screen == 'Active') {
      return programs.filter(function(program) {
        return !program.completed;
      });
    } else if (screen == 'Completed') {
      return programs.filter(function(program) {
        return program.completed;
      });
    } else {
      return programs;
    }
  };

  render() {
    const { new_program } = this.state;
    const { programs, screen, deleteProgram, updateProgram } = this.props;

    let listItm = [];
    if (programs.length > 0) {
      let scrPrograms = this.screenFilterPrograms();
      listItm = scrPrograms.map((program, index) => (
        <ProgramItem
          key={index}
          program={program}
          deleteProgram={deleteProgram}
          updateProgram={updateProgram}
        />
      ));
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>{screen}</Title>
          </Body>
        </Header>
        <Content>{listItm}</Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    programs: state.program_reducer.programs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProgram: (program) => dispatch(addProgram(program)),
    deleteProgram: (program) => dispatch(deleteProgram(program)),
    updateProgram: (program) => dispatch(updateProgram(program)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramAll);
