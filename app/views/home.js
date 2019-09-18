import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../layout/header";
import Hero from "../layout/hero";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Click here to login" />
        <Hero />
        <Text>Open up App.js to start working on your app! Got it Sammy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
