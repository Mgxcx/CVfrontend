import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";
import { connect } from "react-redux";
import { SharedElement } from "react-navigation-shared-element";
import { Entypo } from "@expo/vector-icons";

const CoursesScreenList = ({ navigation, onSubmitCoursePosition }) => {
  let courses = [
    {
      id: 1,
      image: require("../assets/lacapsule2.jpg"),
      icon: "graduation-cap",
      title: "TITRE DÉVELOPPEUSE WEB\nET MOBILE FULLSTACK JAVASCRIPT",
      name: "La Capsule Academy",
      date: "Septembre 2020 à Janvier 2021",
    },
    {
      id: 2,
      image: require("../assets/ucl.jpg"),
      icon: "graduation-cap",
      title: "MASTER AFFAIRES INTERNATIONALES\nTRILINGUES PARCOURS TOURISME",
      name: "Université Catholique de Lille",
      date: "Septembre 2014 à Septembre 2016",
    },
    {
      id: 3,
      image: require("../assets/upemlv-ifis.jpg"),
      icon: "graduation-cap",
      title: "LICENCE PROFESSIONNELLE\nTOURISME ET NOUVELLES TECHNOLOGIES",
      name: "Université Paris-Est Marne-la-Vallée (IFIS)",
      date: "Septembre 2013 à Septembre 2014",
    },
    {
      id: 4,
      image: require("../assets/upemlv.jpg"),
      icon: "graduation-cap",
      title: "LICENCE EN LANGUES ÉTRANGÈRES\nAPPLIQUÉES",
      name: "Université Paris-Est Marne-la-Vallée",
      date: "Septembre 2011 à Juin 2013",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {courses.map((course, i) => (
          <TouchableOpacity
            key={course.id}
            onPress={() => {
              navigation.navigate("CoursesScreenDetails", { course });
              onSubmitCoursePosition(i);
            }}
          >
            <Card style={styles.card}>
              <SharedElement id={`course.${course.image}`}>
                <Image source={course.image} style={styles.image} />
              </SharedElement>
              <SharedElement id={`course.${course.title}`}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <Entypo name={course.icon} size={22} color="#4b93a0" style={styles.icon} />
                  <Text style={styles.title}>{course.title}</Text>
                </View>
              </SharedElement>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitCoursePosition: function (courseposition) {
      dispatch({ type: "saveCoursePosition", courseposition });
    },
  };
}

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
    backgroundColor: "#C7F7E7",
  },
  icon: {
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: 130,
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
    color: "#4b93a0",
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

export default connect(null, mapDispatchToProps)(CoursesScreenList);
