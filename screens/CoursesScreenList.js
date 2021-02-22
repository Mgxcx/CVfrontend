import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Card } from "react-native-shadow-cards";

const CoursesScreenList = () => {
  let courses = [
    {
      image: require("../assets/lacapsulebootcamp.png"),
      title: "TITRE DÉVELOPPEUSE WEB ET MOBILE FULLSTACK JAVASCRIPT",
      name: "La Capsule Academy",
      date: "Septembre 2020 à Janvier 2021",
    },
    {
      image: require("../assets/ucl.png"),
      title: "MASTER AFFAIRES INTERNATIONALES TRILINGUES PARCOURS TOURISME",
      name: "Université Catholique de Lille",
      date: "Septembre 2014 à Septembre 2016",
    },
    {
      image: require("../assets/umlv.svg.png"),
      title: "LICENCE PROFESSIONNELLE TOURISME ET NOUVELLES TECHNOLOGIES",
      name: "Université Paris-Est Marne-la-Vallée",
      date: "Septembre 2013 à Septembre 2014",
    },
    {
      image: require("../assets/umlv.svg.png"),
      title: "LICENCE EN LANGUES ÉTRANGÈRES APPLIQUÉES",
      name: "Université Paris-Est Marne-la-Vallée",
      date: "Septembre 2011 à Juin 2013",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {courses.map((course, i) => (
          <Card style={styles.card}>
            <Image source={course.image} style={styles.image} />
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.text}>{course.name}</Text>
            <Text style={styles.date}>{course.date}</Text>
          </Card>
          // <Card key={i}>
          //   <Card.Content>
          //     <Title>{course.title}</Title>
          //     <Paragraph>{course.name}</Paragraph>
          //     <Paragraph>{course.date}</Paragraph>
          //   </Card.Content>
          //   <Card.Cover source={course.image} />
          //   <Card.Actions>
          //     <Button>Cancel</Button>
          //     <Button>Ok</Button>
          //   </Card.Actions>
          // </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fcf6",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#6dcaa4",
  },
  image: {
    width: "100%",
    height: 140,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    marginBottom: 5,
    color: "#3c6f75",
    fontWeight: "800",
    fontSize: 14,
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    color: "#C7F7E7",
    fontWeight: "900",
    fontSize: 14,
  },
  date: {
    textAlign: "center",
    marginBottom: 5,
    color: "#e8fcf6",
    fontWeight: "600",
    fontSize: 11,
  },
});

export default CoursesScreenList;
