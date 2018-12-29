import React from "react";
import { inject } from "mobx-react";
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
import AddProgramButton from "../components/add_program_button";
import NewProgram from "../components/new_program";

@inject("rootStore")
class ProgramEditorHome extends React.Component {
  constructor(props) {
    super(props);
    const tasks = [];
    this.state = {
      editorPage: 0
    };
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    const agendasList = this.props.rootStore.agendaStore.agendas.map(agenda => {
      <ListItem>
        <Text>{agenda.title}</Text>
      </ListItem>;
    });

    return (
      <Container>
        <Header>
          <Body>
            <Title>Program Editor</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Challenges</Text>
            </ListItem>
            {agendasList}
          </List>
        </Content>
        <AddProgramButton changePage={this.props.changePage} />
      </Container>
    );
  }
}

export default ProgramEditorHome;
