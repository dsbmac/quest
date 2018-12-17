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
import AddProgramButton from '../components/add_program_button';
import NewProgram from '../components/new_program';

export default class ProgramEditorHome extends React.Component {
  constructor(props) {
    super(props);
    const tasks = [];
    this.state = {
      editorPage: 0,
    };
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
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
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
        <AddProgramButton changePage={this.props.changePage} />
      </Container>
    );
  }
}
