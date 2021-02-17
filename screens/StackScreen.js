import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, ImageBackground, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

const WIDTH = Dimensions.get("screen").width;

function StackScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <ImageBackground source={require("../assets/stack.jpg")} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    marginTop: 140,
    width: "100%",
    height: "60%",
  },
});

export default StackScreen;
