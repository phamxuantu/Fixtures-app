import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
var styles = require("../Style/NewsStyle");

const MenuButton = (props) =>
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate("DrawerOpen");
    }}
  >
    <FontAwesome name='bars' size={30} style={{marginLeft: 10}}/>
</TouchableOpacity>;

export default class MyHomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'News',
    headerLeft: <MenuButton navigation={ navigation }/>,
    headerStyle: {backgroundColor: '#00CC33'}
  });

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
                "DetailNews"
              )}>
            <View style={styles.news}>
              <View style={styles.thumbnail}>
                <Image style={styles.imgThumbnail} source={require("../images/thumbnail.jpg")} />
              </View>
              <View style={styles.title}>
                <Text style={styles.textTitle}>
                  Hiệu ứng Neymar 222 triệu euro: Ronaldo dọa rời Real, trở
                  lại MU
                </Text>
              </View>
              <View style={styles.datePost}>
                <Text>06/08/2014</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.news}>
            <View style={styles.thumbnail}>
              <Image style={styles.imgThumbnail} source={require("../images/thumbnail.jpg")} />
            </View>
            <View style={styles.title}>
              <Text style={styles.textTitle}>
                Hiệu ứng Neymar 222 triệu euro: Ronaldo dọa rời Real, trở
                lại MU
              </Text>
            </View>
            <View style={styles.datePost}>
              <Text>06/08/2014</Text>
            </View>
          </View>
        </ScrollView>
      </View>;
  }
}