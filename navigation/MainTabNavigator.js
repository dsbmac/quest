import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AllTasksScreen from "../screens/AllTasksScreen";
import ManagerScreen from "../screens/ManagerScreen";
import LinksScreen from "../screens/LinksScreen";
import CreatorScreen from "../screens/CreatorScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "All",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

const ManagerStack = createStackNavigator({
  Home: ManagerScreen
});

ManagerStack.navigationOptions = {
  tabBarLabel: "Programs",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

const AllTasksStack = createStackNavigator({
  Home: AllTasksScreen
});

AllTasksStack.navigationOptions = {
  tabBarLabel: "All",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Active",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"}
    />
  )
};

const CreatorStack = createStackNavigator({
  Settings: CreatorScreen
});

CreatorStack.navigationOptions = {
  tabBarLabel: "Creator",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-checkmark-circle-outline"
          : "md-checkmark-circle-outline"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Completed",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-checkmark-circle-outline"
          : "md-checkmark-circle-outline"
      }
    />
  )
};

export default createBottomTabNavigator({
  CreatorStack,
  AllTasksStack,
  ManagerStack,
  LinksStack,

  SettingsStack
});
