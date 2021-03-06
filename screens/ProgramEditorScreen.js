import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { WebBrowser } from "expo";
import PropTypes from "prop-types";

import { addProgram, deleteProgram, updateProgram } from "../store/reducers";
import ProgramEditor from "../components/program_editor";


class ProgramEditorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_program: false,
      editorPage: false
    };
  }

  changePage = page => {
    console.log("changing page");
    this.setState({
      editorPage: page
    });
  };

  saveProgramData = program => {
    console.log("Todo is: " + program.title);
    addProgram(program);
  };

  addNewProgram = show => {
    this.setState({
      new_program: show
    });
  };

  static navigationOptions = {
    header: null
  };

  render() {
    const { editorPage } = this.state;
    return (
      <ProgramEditor
        editorPage={editorPage}
        changePage={this.changePage.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

export default ProgramEditorScreen;
