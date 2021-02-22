import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import * as Animatable from "react-native-animatable";

const ExperiencesScreen = () => {
  const data = [
    {
      time: "Aujourd'hui \nSept. 2020",
      title: "WEB DEVELOPER FULLSTACK JS",
      description:
        "Conception et prototypage d’applications \nRéalisation de 10 projets (HTML, CSS, JS (Es6), React, React Native)\nEt des projets persos à découvrir sur mon GitHub!",
      lineColor: "#5ca784",
      icon: require("../assets/avatar3.png"),
      imageUrl: "https://res.cloudinary.com/drchl4shw/image/upload/v1613648279/logocapsule_xj6roz.png",
    },
    {
      time: "Mars 2020 \nAvril 2019",
      title: "SALES MANAGER",
      description:
        "Développement du CA des trois Hôtels et du portefeuille clients \nOrganisation du plan d’actions \nParticipation aux salons\nVeille concurrentielle \nMaj de la base de données, et des sites \nReporting des chiffres \nRéalisation d’e-mailings et de supports de communication",
      icon: require("../assets/avatar2.png"),
      imageUrl:
        "https://res.cloudinary.com/drchl4shw/image/upload/v1613577787/Capture_d_e%CC%81cran_2021-02-17_a%CC%80_16.55.40_xbsicx.png",
    },
    {
      time: "Avril 2019 \nFévrier 2018",
      title: "SALES EXECUTIVE",
      description:
        "Groupes affaires : qualification, proposition, négociation et contrat\nPlan d’actions\nSupports de communication\nAnalyse de la concurrence\nDémarchage",
      icon: require("../assets/avatar.png"),
      lineColor: "#5ca784",
      imageUrl:
        "https://res.cloudinary.com/drchl4shw/image/upload/v1613578058/Capture_d_e%CC%81cran_2021-02-17_a%CC%80_16.54.37_qwgpql.png",
    },
    {
      time: "Février 2018 \nAvril 2016",
      title: "SALES EXECUTIVE",
      description:
        "Groupes affaires et loisirs : qualification, proposition, négociation et contrat\nPlan d’actions\nMaj sites distributeurs\nSupports de communication\nGestion de l’e-réputation\nOrganisation d’événements ",
      icon: require("../assets/avatar4.png"),
      imageUrl:
        "https://res.cloudinary.com/drchl4shw/image/upload/v1613578321/Capture_d_e%CC%81cran_2021-02-17_a%CC%80_16.55.04_tkifu9.png",
    },
    {
      time: "Août 2015 \nMars 2015",
      title: "SALES & MARKETING ASSISTANT",
      description:
        "Plan d’actions\nRéalisation de sites web et de flyers\nGestion des sites distributeurs et de l’e-réputation\nGestion de la centrale de réservations\nDémarchage\nRéférencement\nGestion des promotions et tarifs\nGestion de l’établissement",
      icon: require("../assets/avatar.png"),
      lineColor: "#5ca784",
      imageUrl: "https://res.cloudinary.com/drchl4shw/image/upload/v1614009054/logo_leckod_wk1s13_c13o9i.png",
    },
    {
      time: "Août 2014 \nSept. 2013",
      title: "VERSATILE RECEPTIONIST",
      description: " ",
      icon: require("../assets/avatar4.png"),
      imageUrl:
        "https://res.cloudinary.com/drchl4shw/image/upload/v1613578794/Capture_d_e%CC%81cran_2021-02-17_a%CC%80_16.58.52_wzbagp.png",
    },
    {
      time: "Juillet 2013 \nJuin 2013",
      title: "PRODUCTION OPERATOR",
      description: " ",
      icon: require("../assets/avatar2.png"),
      lineColor: "#5ca784",
      imageUrl: "https://res.cloudinary.com/drchl4shw/image/upload/v1613579355/img-0476-2-_vr0sn1.jpg",
    },
    {
      time: "Octobre 2012 \nJanvier 2012",
      title: "ORDER PICKER",
      description: " ",
      icon: require("../assets/avatar.png"),
      imageUrl:
        "https://res.cloudinary.com/drchl4shw/image/upload/v1613579833/Capture_d_e%CC%81cran_2021-02-17_a%CC%80_17.35.27_balywt.png",
    },
  ];

  const renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text style={styles.title}>{rowData.title}</Text>;
    let desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptioncontainer}>
          <Animatable.Image
            source={{ uri: rowData.imageUrl }}
            style={styles.image}
            animation="pulse"
            duration={1200}
            iterationCount="infinite"
          />
          <Text style={styles.textdescription}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={32}
        circleColor="#5ca784"
        lineColor="#3c6f75"
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
        renderDetail={renderDetail}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fcf6",
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3c6f75",
    textAlign: "center",
  },
  descriptioncontainer: {
    flex: 1,
    alignItems: "center",
  },
  textdescription: {
    marginTop: 5,
    color: "#3c6f75",
    textAlign: "center",
  },
  image: {
    marginTop: 5,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#F9FAF9",
    borderWidth: 1,
  },
  datecontainer: {
    minWidth: 52,
    marginTop: -5,
  },
  date: {
    textAlign: "center",
    backgroundColor: "#3c6f75",
    color: "#F9FAF9",
    fontWeight: "bold",
    padding: 5,
    borderRadius: 13,
  },
  details: {
    alignSelf: "center",
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#C7F7E7",
    borderRadius: 20,
    width: 160,
  },
});

export default ExperiencesScreen;
