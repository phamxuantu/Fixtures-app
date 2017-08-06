import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import NewsScreen from './Screen/NewsScreen';
import FixturesScreen from "./Screen/FixturesScreen";
import SingleNewsScreen from "./Screen/SingleNewsScreen";

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  DrawerItems
} from "react-navigation";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const StackNavigation = StackNavigator({
  News: { screen: NewsScreen },
  SingleNewsScreen: { screen: SingleNewsScreen }
});

const MenuNavigator = DrawerNavigator(
  {
    News: {
      screen: StackNavigation,
      navigationOptions: {
        drawerLabel: () =>
          <Text style={{ fontSize: 20, padding: 10 }}>News</Text>,
        drawerIcon: <FontAwesome name="newspaper-o" size={20} />
      }
    },
    Fixtures: {
      screen: FixturesScreen,
      navigationOptions: {
        drawerLabel: () =>
          <Text style={{ fontSize: 20, padding: 10 }}>Fixtures</Text>,
        drawerIcon: <FontAwesome name="calendar" size={20} />
      }
    }
  },
  {
    contentComponent: props =>
      <View>
        <DrawerItems {...props} />
      </View>
  }
);

export default MenuNavigator;