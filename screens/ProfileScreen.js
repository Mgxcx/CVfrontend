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

function ProfileScreen() {
  const [avatarImage, setAvatarImage] = useState("normal");

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <ImageBackground source={require("../assets/background8.jpg")} style={styles.image}>
        <View style={styles.viewavatar}>
          {avatarImage ? (
            <>
              {avatarImage == "normal" && (
                <Image
                  animation="fadeIn"
                  duration={1000}
                  source={require("../assets/avatar.png")}
                  style={styles.avatar}
                />
              )}
              {avatarImage == "hospitality" && (
                <Animatable.View style={styles.split2} animation="fadeIn" duration={1000}>
                  <View style={[styles.bubble, styles.bubbleOut]}>
                    <View style={[styles.balloon, { backgroundColor: "#934D78" }]}>
                      <Text style={styles.textround}>Des soft skills du tonnerre pour une dev volontaire !</Text>
                      <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
                        <Svg
                          style={styles.arrowRight}
                          width={moderateScale(15.5, 0.6)}
                          height={moderateScale(17.5, 0.6)}
                          viewBox="32.485 17.5 15.515 17.5"
                          enable-background="new 32.485 17.5 15.515 17.5"
                        >
                          <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill="#934D78" x="0" y="0" />
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <Image source={require("../assets/avatar2.png")} style={styles.avatar} />
                </Animatable.View>
              )}
              {avatarImage == "development" && (
                <Animatable.View style={styles.split2} animation="fadeIn" duration={1000}>
                  <View style={[styles.bubble, styles.bubbleOut]}>
                    <View style={[styles.balloon, { backgroundColor: "#934D78" }]}>
                      <Text style={styles.textround}>Fan de React Native et React, très motivée !</Text>
                      <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
                        <Svg
                          style={styles.arrowRight}
                          width={moderateScale(15.5, 0.6)}
                          height={moderateScale(17.5, 0.6)}
                          viewBox="32.485 17.5 15.515 17.5"
                          enable-background="new 32.485 17.5 15.515 17.5"
                        >
                          <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill="#934D78" x="0" y="0" />
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <Image source={require("../assets/avatar3.png")} style={styles.avatar} />
                </Animatable.View>
              )}
              {avatarImage == "excited" && (
                <Animatable.View style={styles.split2} animation="fadeIn" duration={1000}>
                  <View style={[styles.bubble, styles.bubbleOut]}>
                    <View style={[styles.balloon, { backgroundColor: "#934D78" }]}>
                      <Text style={styles.textround}>Et un peu de gourmandise :P</Text>
                      <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
                        <Svg
                          style={styles.arrowRight}
                          width={moderateScale(15.5, 0.6)}
                          height={moderateScale(17.5, 0.6)}
                          viewBox="32.485 17.5 15.515 17.5"
                          enable-background="new 32.485 17.5 15.515 17.5"
                        >
                          <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill="#934D78" x="0" y="0" />
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <Image source={require("../assets/avatar4.png")} style={styles.avatar} />
                </Animatable.View>
              )}
            </>
          ) : (
            <Text>Error</Text>
          )}
        </View>
        <View style={styles.split}>
          <Animatable.View style={styles.round} animation="shake" duration={7000} iterationCount="infinite">
            <FontAwesome name="hotel" size={24} color="#F9FAF9" style={{ marginBottom: 10 }} />
            <Text
              style={styles.textround}
              onPress={() => {
                setAvatarImage("hospitality");
              }}
            >
              7 années dans l'hôtellerie
            </Text>
          </Animatable.View>

          {avatarImage ? (
            <>
              {avatarImage == "hospitality" && (
                <View style={styles.round4}>
                  <Text
                    style={styles.textround}
                    onPress={() => {
                      setAvatarImage("hospitality");
                    }}
                  >
                    Dont 5 {"\n"} dans la vente ;)
                  </Text>
                </View>
              )}
            </>
          ) : (
            <Text>Error</Text>
          )}
        </View>
        <View style={styles.split2}>
          {avatarImage ? (
            <>
              {avatarImage == "development" && (
                <SocialIcon
                  title="Mon GitHub !"
                  button
                  type="github-alt"
                  style={styles.github}
                  iconSize={13}
                  iconStyle={styles.githubicon}
                  fontStyle={styles.githubtext}
                  onPress={() => {
                    Linking.openURL("https://github.com/Mgxcx");
                  }}
                />
              )}
            </>
          ) : (
            <Text>Error</Text>
          )}
          <Animatable.View style={styles.round2} animation="tada" duration={2000} iterationCount="infinite">
            <FontAwesome5 name="laptop-code" size={24} color="#F9FAF9" style={{ marginBottom: 15 }} />
            <Text
              style={styles.textround}
              onPress={() => {
                setAvatarImage("development");
              }}
            >
              (Presque) 1 année de dév !
            </Text>
          </Animatable.View>
        </View>
        <Animatable.View style={styles.round3} animation="pulse" duration={800} iterationCount="infinite">
          <FontAwesome5 name="coffee" size={24} color="#F9FAF9" style={{ marginBottom: 10 }} />
          <Text
            style={styles.textround}
            onPress={() => {
              setAvatarImage("excited");
            }}
          >
            2 cafés par jour
          </Text>
        </Animatable.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAF9",
  },
  viewavatar: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  split: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  split2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  round: {
    width: 120,
    height: 120,
    alignSelf: "flex-start",
    backgroundColor: "#1A1332",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1A1332",
    borderRadius: 60,
    marginLeft: 50,
  },
  round2: {
    marginTop: 10,
    marginRight: 40,
    width: 140,
    height: 140,
    backgroundColor: "#3C7B9A",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3C7B9A",
    borderRadius: 70,
  },
  round3: {
    display: "flex",
    marginTop: 45,
    marginRight: 70,
    width: 120,
    height: 120,
    alignSelf: "center",
    backgroundColor: "#9B8878",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9B8878",
    borderRadius: 60,
  },
  round4: {
    marginLeft: 60,
    marginBottom: 40,
    width: 120,
    height: 50,
    alignSelf: "flex-end",
    backgroundColor: "#9B8878",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9B8878",
    borderRadius: 20,
  },
  textround: {
    textAlign: "center",
    fontSize: 14,
    color: "#F9FAF9",
  },
  avatar: {
    marginTop: 30,
    width: 120,
    height: 120,
  },
  image: {
    height: 660,
    width: 380,
  },
  github: {
    alignSelf: "flex-start",
    height: 40,
    width: 150,
    backgroundColor: "#9B8878",
    marginTop: 60,
    marginRight: 30,
  },
  githubtext: {
    fontSize: 13,
  },
  bubble: {
    marginTop: 40,
    marginVertical: moderateScale(7, 2),
    width: 180,
    height: 80,
  },
  bubbleIn: {
    marginLeft: 10,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
});

export default ProfileScreen;
