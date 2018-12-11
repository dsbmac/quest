import React from "react";
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

export default class NewProgram extends React.Component {
  constructor(props) {
    super(props);
    const title = "";
    const description = "";
    const tasks = [];
    const createdAt = "";

    this.state = {
      title,
      description,
      createdAt,
      tasks
    };
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    const { completed, title } = this.state;
    const { onPress, onCancel } = this.props;

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
              <Input />
            </Item>
            <Item>
              <Label>Description</Label>
              <Input />
            </Item>
            <Item>
              <Label>Tasks</Label>
              <Button iconRight>
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
      </Container>
    );
  }
}
