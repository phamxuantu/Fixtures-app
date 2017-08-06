"use strict";

var React = require("react-native");

var { StyleSheet } = React;

var window = require('Dimensions').get("window");

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3"
  },
  news: {
    width: window.width,
    height: window.width,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  thumbnail: {
    width: window.width,
    height: 3 * window.width / 5
  },
  imgThumbnail: {
    width: window.width,
    height: 3 * window.width / 5
  },
  title: {
    width: window.width,
    height: window.width / 5,
    padding: 10
  },
  datePost: {
    width: window.width,
    height: window.width / 5,
    alignItems: "flex-end",
    padding: 10
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
