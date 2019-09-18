import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Hero extends Component {
  render() {
    return (
      <View style={style.heroStyle}>
        <Image
          source={require("../../assets/spidey.jpeg")} 
          style={style.logoStyle}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  heroStyle: {
        width: undefined,
        height: undefined,
        flex: 4
  }
});
