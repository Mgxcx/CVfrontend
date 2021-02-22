import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { SocialIcon } from "react-native-elements";
import Svg, { Path } from "react-native-svg";
import { moderateScale } from "react-native-size-matters";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import GradientButton from "react-native-gradient-buttons";

import { LogBox } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <ImageBackground source={require("../assets/landscape1.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>Margaux Chevreux</Text>
          <Text style={styles.text}>Votre future {"\n"}développeuse</Text>
          <GradientButton
            style={styles.button}
            textStyle={styles.buttontext}
            gradientBegin="#3c6f75"
            gradientEnd="#5ca784"
            gradientDirection="diagonal"
            height={43}
            width={180}
            radius={17}
            impact
            impactStyle="Light"
            onPressAction={() => navigation.navigate("Expériences")}
          >
            Recherche par métier
          </GradientButton>
          <GradientButton
            style={styles.button}
            textStyle={styles.buttontext}
            gradientBegin="#4b93a0"
            gradientEnd="#3c6f75"
            gradientDirection="diagonal"
            height={43}
            width={195}
            radius={17}
            impact
            impactStyle="Light"
            onPressAction={() => navigation.navigate("Loisirs")}
          >
            Recherche par passion
          </GradientButton>
          <GradientButton
            style={styles.button}
            textStyle={styles.buttontext}
            gradientBegin="#3c6f75"
            gradientEnd="#5ca784"
            gradientDirection="diagonal"
            height={43}
            width={210}
            radius={17}
            impact
            impactStyle="Light"
            onPressAction={() => navigation.navigate("Formations")}
          >
            Recherche par formation
          </GradientButton>
          <View style={styles.lastbuttoncontainer}></View>
          <Button style={styles.button2} labelStyle={styles.buttontext2}>
            Recrutez-moi !
          </Button>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  lastbuttoncontainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#4f8868",
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    color: "#4b93a0",
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 45,
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
  },
  button: {
    marginBottom: 15,
  },
  buttontext: {
    fontSize: 14,
    textAlign: "center",
  },
  button2: {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
    marginBottom: 30,
  },
  buttontext2: {
    fontSize: 11,
    color: "white",
    textAlign: "center",
  },
});

export default ProfileScreen;
