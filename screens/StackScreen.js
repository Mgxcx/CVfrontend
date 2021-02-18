import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image } from "react-native";

function StackScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.text}>Discover my Stack !! </Text>
      <Image source={require("../assets/stack.jpg")} style={styles.image} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F7E7",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 230,
  },
  text: {
    textAlign: "center",
    color: "#3c6f75",
    fontWeight: "bold",
  },
});

export default StackScreen;
