import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";

function StackScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.text}>Discover my Stack </Text>
      <View style={styles.stackview}>
        <View style={styles.stack1}>
          <FontAwesome5 name="react" size={56} color="#4b93a0" />
        </View>
        <View style={styles.stack2}>
          <Image source={require("../assets/reactnative.png")} style={styles.logo} />
        </View>
        <View style={styles.stack3}>
          <FontAwesome5 name="node" size={46} color="#3c6f75" />
        </View>
      </View>
      <View style={styles.stackview}>
        <View style={styles.stack4}>
          <FontAwesome5 name="js-square" size={50} color="#F9FAF9" />
        </View>
        <View style={styles.stack5}>
          <Image source={require("../assets/expressjs.png")} style={styles.logo2} />
        </View>
        <View style={styles.stack6}>
          <Fontisto name="mongodb" size={56} color="#F9FAF9" />
        </View>
        <View style={styles.stack7}>
          <Fontisto name="redux" size={48} color="#4f8868" style={styles.redux} />
        </View>
      </View>
      <Image source={require("../assets/stack.jpg")} style={styles.image} />
      <Text style={styles.text}>And my tools... </Text>
      <View style={styles.stackview}>
        <View style={styles.stack11}>
          <Image source={require("../assets/jest.png")} style={styles.logo4} />
        </View>
        <View style={styles.stack9}>
          <FontAwesome5 name="gitkraken" size={50} color="#4f8868" style={styles.gitkraken} />
        </View>
        <View style={styles.stack10}>
          <FontAwesome name="github-alt" size={51} color="#F9FAF9" />
        </View>
        <View style={styles.stack8}>
          <Image source={require("../assets/postman.png")} style={styles.logo3} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7F7E7",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  stackview: {
    flexDirection: "row",
  },
  image: {
    width: "80%",
    height: 230,
    marginTop: 30,
    marginBottom: 30,
  },
  logo: {
    alignSelf: "center",
    width: 52,
    height: 41,
    marginBottom: 10,
  },
  logo2: {
    alignSelf: "center",
    width: 52,
    height: 41,
  },
  logo3: {
    width: 46,
    height: 47,
    marginLeft: 3,
    marginBottom: 3,
  },
  logo4: {
    width: 46,
    height: 47,
    marginRight: 3,
  },
  text: {
    textAlign: "center",
    color: "#3c6f75",
    fontWeight: "bold",
    fontSize: 18,
  },
  stack1: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#e8fcf6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stack2: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#3c6f75",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stack3: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#e8fcf6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  stack4: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#6dcaa4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stack5: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#e8fcf6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stack6: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#4f8868",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stack7: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#6dcaa4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  stack8: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#F9FAF9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  stack9: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#e8fcf6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
  },
  stack10: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#5ca784",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
  },
  stack11: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    backgroundColor: "#F9FAF9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
  },

  gitkraken: {
    marginTop: 3,
  },
  redux: {
    marginBottom: 8,
  },
});

export default StackScreen;
