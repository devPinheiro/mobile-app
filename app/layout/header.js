import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  state = {
    isLoggedIn: false,
  };
  toggleUser = () => {
    this.setState({ isLoggedIn: previousLast => !previousLast.isLoggedIn });
  };
  render() {
    let displayUser = this.state.isLoggedIn ? "Sammy" : this.props.message;
    return (
      <View style={style.headerStyle}>
          <Image source={ require('../../assets/spider.jpeg')} 
      style={style.logoStyle}  />
        <Text style={style.headerText} onPress={this.toggleUser}>
          {displayUser}{" "}
        </Text>
      </View> 
    );
  }
} 


const style = StyleSheet.create({
  headerText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    flex: 1
  }, 
  headerStyle: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: "#35eded",
    flex: 1,
    flexDirection: "row"  
  },
  logoStyle: {
      flex: 1,
      width: 40,
      height: 40
  }
});
