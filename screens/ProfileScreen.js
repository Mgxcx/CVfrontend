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
import { Overlay } from "react-native-elements";
import { Button, FAB, TextInput } from "react-native-paper";
import GradientButton from "react-native-gradient-buttons";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { moderateScale } from "react-native-size-matters";
import socketIOClient from "socket.io-client";
import { Avatar } from "react-native-paper";

const urlBack = "http://192.168.1.17:3000";
const socket = socketIOClient(urlBack);

const ProfileScreen = ({ navigation }) => {
  //états liés au FAB Group React Native Paper
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  //état et fonction gérant l'overlay du chat
  const [overlayVisible2, setOverlayVisible2] = useState(false);
  const toggleOverlay2 = () => {
    setOverlayVisible2(!overlayVisible2);
  };

  //Gestion des messages du chat
  const [currentMessage, setCurrentMessage] = useState(null);
  const [listChatMessages, setListChatMessages] = useState([]);

  //Définition du nom du faux recruteur qui m'écrit
  let username = "Gabriel, recruteur IT";

  //UI des bulles de chat en fonction du "username"
  const chatMessages = listChatMessages.map((e, i) => {
    if (e.username != "Margaux") {
      return (
        <View key={i} style={styles.chat1}>
          <Avatar.Icon size={24} icon="account" style={styles.avatar1} />
          <View style={[styles.bubble, styles.bubbleIn]}>
            <View style={[styles.balloon, { backgroundColor: "#5ca784" }]}>
              <Text style={styles.textchat}>{e.currentMessage}</Text>
              <Text style={styles.smalltextchat1}>{e.username}</Text>
              <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
                <Svg
                  style={styles.arrowLeft}
                  width={moderateScale(15.5, 0.6)}
                  height={moderateScale(17.5, 0.6)}
                  viewBox="32.485 17.5 15.515 17.5"
                  enable-background="new 32.485 17.5 15.515 17.5"
                >
                  <Path
                    d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                    fill="#5ca784"
                    x="0"
                    y="0"
                  />
                </Svg>
              </View>
            </View>
          </View>
        </View>
      );
    } else
      return (
        <View key={i} style={styles.chat2}>
          <View style={[styles.bubble, styles.bubbleOut]}>
            <View style={[styles.balloon, { backgroundColor: "#3c6f75" }]}>
              <Text style={styles.textchat}>{e.currentMessage}</Text>
              <Text style={styles.smalltextchat2}>{e.username}</Text>
              <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
                <Svg
                  style={styles.arrowRight}
                  width={moderateScale(15.5, 0.6)}
                  height={moderateScale(17.5, 0.6)}
                  viewBox="32.485 17.5 15.515 17.5"
                  enable-background="new 32.485 17.5 15.515 17.5"
                >
                  <Path d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z" fill="#3c6f75" x="0" y="0" />
                </Svg>
              </View>
            </View>
          </View>
          <Avatar.Image size={24} source={require("../assets/avatar.png")} style={styles.avatar2} />
        </View>
      );
  });

  //useEffect qui met à jour la liste des messages à afficher dans l'overlay de chat
  useEffect(() => {
    socket.on("sendMessageToAll", (newMessage) => {
      var regexSmile = /:\)/;
      var regexHyperSmile = /:D/;
      var regexSad = /:\(/;
      var regexLangue = /:\P/;
      var regexFuck = /fuck[a-z]*/i;
      var newStr = newMessage.currentMessage
        .replace(regexSmile, "\u263A")
        .replace(regexHyperSmile, "\ud83d\ude03")
        .replace(regexSad, "\u2639")
        .replace(regexLangue, "\uD83D\uDE1B")
        .replace(regexFuck, "\u2022\u2022\u2022");
      newMessage.currentMessage = newStr;
      setListChatMessages([...listChatMessages, newMessage]);
    });
  }, [listChatMessages]);

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
          <FAB.Group
            open={open}
            icon={open ? "calendar-account" : "plus"}
            actions={[
              {
                icon: "plus",
                color: "#4f8868",
                style: { backgroundColor: "#e8fcf6" },
                onPress: () => console.log("Pressed add"),
              },
              {
                icon: "email-outline",
                color: "#4f8868",
                style: { backgroundColor: "#e8fcf6" },
                onPress: () => console.log("Pressed star"),
              },
              {
                icon: "chat-processing-outline",
                color: "#4f8868",
                style: { backgroundColor: "#e8fcf6" },
                onPress: toggleOverlay2,
              },
              {
                icon: "bell-outline",
                color: "#4f8868",
                style: { backgroundColor: "#e8fcf6" },
                onPress: () => console.log("Pressed notifications"),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
            fabStyle={styles.fab}
            style={styles.fab2}
          />
          <View style={styles.lastbuttoncontainer}>
            <Button style={styles.button2} labelStyle={styles.buttontext2}>
              Recrutez-moi !
            </Button>
          </View>
        </View>
        <Overlay isVisible={overlayVisible2} overlayStyle={styles.overlay} onBackdropPress={toggleOverlay2}>
          <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>{chatMessages}</ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
              <View style={styles.inputandsend}>
                <TextInput
                  label="Start typing..."
                  value={currentMessage}
                  onChangeText={(e) => setCurrentMessage(e)}
                  style={styles.input}
                  mode="outlined"
                />
                <FontAwesome
                  name="send-o"
                  size={27}
                  color="#4f8868"
                  onPress={() => {
                    socket.emit("sendMessage", { currentMessage, username });
                    setCurrentMessage("");
                  }}
                  style={styles.send}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </Overlay>
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
  fab: {
    backgroundColor: "#6dcaa4",
  },
  overlay: {
    backgroundColor: "#e8fcf6",
    width: "80%",
    height: "75%",
    borderRadius: 20,
    opacity: 0.95,
    margin: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    width: "90%",
    height: 35,
    alignSelf: "center",
  },
  inputandsend: {
    flexDirection: "row",
    alignItems: "center",
  },
  send: {
    marginTop: 3,
    marginLeft: 4,
  },
  chat1: {
    flexDirection: "row",
    flex: 1.5,
    alignSelf: "flex-start",
  },
  chat2: {
    flexDirection: "row",
    flex: 1.5,
    alignSelf: "flex-end",
  },
  bubble: {
    marginVertical: moderateScale(7, 2),
    width: 230,
  },
  bubbleIn: {
    marginLeft: 10,
  },
  bubbleOut: {
    marginRight: 10,
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
  textchat: {
    fontSize: 15,
    color: "#e8fcf6",
    padding: 5,
  },
  smalltextchat1: {
    fontSize: 10,
    color: "#e8fcf6",
    textAlign: "right",
    padding: 5,
  },
  smalltextchat2: {
    fontSize: 10,
    color: "#e8fcf6",
    textAlign: "left",
    padding: 5,
  },
  avatar1: {
    alignSelf: "flex-end",
  },
  avatar2: {
    alignSelf: "flex-end",
    backgroundColor: "#3c6f75",
  },
});

export default ProfileScreen;
