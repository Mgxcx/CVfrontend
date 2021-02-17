import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, ImageBackground } from "react-native";

function StackScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <ImageBackground source={require("../assets/stack.jpg")} style={styles.image}>
        <Text style={styles.text}>Stack</Text>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F7E7",
    justifyContent: "center",
  },
  image: {
    marginTop: 140,
    width: "100%",
    height: "60%",
  },
  text: {
    textAlign: "center",
  },
});

export default StackScreen;
