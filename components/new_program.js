import React from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
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
import SaveProgramButton from "../components/save_program_button";
import AddToDoButton from "./add_todo_button";

@inject("rootStore")
class NewProgram extends React.Component {
  @observable agenda = this.props.rootStore.agendaStore.createAgenda();

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
                // onChangeText={txt => this.setStateUtil("title", txt)}
                onSubmitEditing={txt => (this.agenda.title = txt)}
              />
            </Item>
            <Item>
              <Label>Description</Label>
              <Input />
            </Item>
            <Item>
              <Label>Tasks</Label>
              <Button iconRight rounded>
                <Text>Edit</Text>
                <Icon name="md-create" />
              </Button>
            </Item>
            <List>
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
          </Form>
        </Content>
        <AddToDoButton />
      </Container>
    );
  }
}

export default NewProgram;
