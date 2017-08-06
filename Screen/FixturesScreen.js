import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

export default class MyNotificationsScreen extends Component {

// static navigationOptions = ({ navigation }) => {
//   const {state, setParams} = navigation;
//   const isInfo = state.params.mode === 'info';
//   const {name} = state.params;
//   return {
//     title: isInfo ? `${name}'s Contact Info` : `Chat with ${state.params.name}`,
//     headerRight: (
//       <Button
//         title={isInfo ? 'Done' : `${name}'s info`}
//         onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
//       />
//     ),
//   };
//   };

  render() {
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Text>{params.name}</Text>
        <Button
          title = 'Back'
          onPress = {() => {
            goBack();
          }}
         /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});