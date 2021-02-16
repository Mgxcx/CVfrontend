import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text } from "react-native";
import Timeline from "react-native-timeline-flatlist";

function ExperiencesScreen() {
  const data = [
    {
      time: "Sept. 2020    Aujourd'hui",
      title: "WEB DEVELOPER FULLSTACK JS  LA CAPSULE",
      description:
        "Conception et prototypage d’applications      Réalisation de 10 projets (HTML, CSS, JS (Es6), React, React Native), et d'autres projets persos à découvrir sur mon GitHub!",
      lineColor: "#3C7B9A",
      icon: require("../assets/avatar3.png"),
      imageUrl: "https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg",
    },
    {
      time: "10:45",
      title: "Play Badminton",
      description: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
      icon: require("../assets/avatar2.png"),
      imageUrl: "https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg",
    },
    {
      time: "12:00",
      title: "Lunch",
      icon: require("../assets/avatar.png"),
    },
    {
      time: "14:00",
      title: "Watch Soccer",
      description: "Team sport played between two teams of eleven players with a spherical ball. ",
      lineColor: "#3C7B9A",
      icon: require("../assets/avatar4.png"),
      imageUrl: "https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg",
    },
    {
      time: "16:30",
      title: "Go to Fitness center",
      description: "Look out for the Best Gym & Fitness Centers around me :)",
      icon: require("../assets/avatar.png"),
      imageUrl: "https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg",
    },
  ];

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={20}
        circleColor="#B6B5AD"
        lineColor="#9B8878"
        timeContainerStyle={styles.datecontainer}
        timeStyle={styles.date}
        titleStyle={styles.title}
        descriptionStyle={styles.textdescription}
        options={{
          style: { paddingTop: 10 },
        }}
        innerCircle={"icon"}
        separator={false}
        detailContainerStyle={styles.details}
        columnFormat="two-column"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAF9",
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9FAF9",
    textAlign: "center",
  },
  textdescription: {
    color: "#F9FAF9",
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  datecontainer: {
    minWidth: 52,
    marginTop: -5,
  },
  date: {
    textAlign: "center",
    backgroundColor: "#1A1332",
    color: "#F9FAF9",
    padding: 5,
    borderRadius: 13,
  },
  details: {
    marginLeft: 7,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#B6B5AD",
    borderRadius: 10,
    width: 150,
  },
});

export default ExperiencesScreen;
