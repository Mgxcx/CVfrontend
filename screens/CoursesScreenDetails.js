import React, { useState, useCallback, useRef } from "react";
import { View, StyleSheet, Text, Image, FlatList, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";
import { Card } from "react-native-shadow-cards";
import { AntDesign } from "@expo/vector-icons";
import StepIndicator from "react-native-step-indicator";
import { connect } from "react-redux";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import { Entypo } from "@expo/vector-icons";

let coursesDetails = [
  {
    title: "Les bases Front-end",
    body:
      "Apprentissage des balises fondamentales en HTML, les feuilles de style en CSS et le positionnement flexbox en passant par le responsive web design et la notion de grille.",
  },
  {
    title: "Les bases Back-end",
    body:
      "Maîtrise de l'environnement Node.js, de la mécanique du framework Express.\nDynamisation des pages avec le moteur de template EJS.",
  },
  {
    title: "Les bases de données",
    body:
      "Maîtrise de la mise en place et du fonctionnement d’une base de données.\nTravail avec MongoDB: création d'une base de données non relationnelle et écriture de requêtes NoSQL pour réaliser des opérations CRUD.\nMaîtrise des différences entre clés étrangères et sous-documents.",
  },
  {
    title: "React, React Native\net Redux",
    body:
      "Apprentissage de React : fluidité des sites et réactivité!\nApprentissage de React Native : déploiement d'une application moblie, découverte des composants.\nUtilisation des fonctionnalités natives: caméra ou géolocalisation, et intégration d’IA.\nDécouverte du temps réel via la librairie socket.io : implémentation d’un chat.\nApprentissage de Redux : optimise les échanges de données dans les applications React et React Native.",
  },
  {
    title: "Création d'API\net Architecture",
    body:
      "Construction d'un Back-end indépendant pour architecturer un projet de façon souple et évolutive.\nConception de l’API d’un Back-end en webservice.\nMise en place d'une architecture REST full et découpage de features en routes spécialisées.\nMaîtrise des notions de module et composants pour factoriser les fonctionnalités et gagner en efficacité.",
  },
  {
    title: "Conception\net Méthode Agile",
    body:
      "Travail sur la conception de l'application :\ndéfinir l'UX / UI à l'aide du parcours utilisateur (user journeys, user stories, etc.),\net création des maquettes, du wireframe et du mockup des pages à l'aide d'outils (Google Drawings, Figma, et Whimsical).\nTravail sur le schéma de la base de données.\nTravail en sprints de développement en équipe.\nApprofondissement de la maîtrise de Git, et Github.",
  },
];

let coursesDetails2 = [
  {
    title: "Marketing,\nDigital et Logistique",
    body:
      "Stratégies digitales dans le tourisme.\nLogistique et transport touristique.\nMarketing et commercialisation du tourisme d’affaires.\nNégociations Internationales.\nStratégies et politiques touristiques.\nMarketing du tourisme et des services.\nCréation graphique dans le domaine du luxe.",
  },
  {
    title: "Management et Pratiques\nTouristiques",
    body:
      "Ressources humaines dans le domaine hôtelier.\nÉvolution des pratiques et comportements touristiques.\nManagement/agence de voyage.\nÉtude de cas Management de projet.\nProjets touristiques - étude des cas.\nYield management.\nManagement international et hôtelier.\nMéthodes du management de projet.\nOrganisation d’événementiel. ",
  },
  {
    title: "Finance, Vente,\net Droit",
    body:
      "Droit des contrats touristiques.\nContrôle de gestion / Analyse des coûts de gestion.\nVente des produits touristiques.\nFormation Amadeus.\nFinancement des projets touristiques.\nAnalyse des coûts de gestion.",
  },
  {
    title: "Anglais et Espagnol\nprofessionnels",
    body:
      "Approfondissement des compétences dans la langue.\nCours de communication écrite mais aussi orale.\nApprentissage de lexique spécifique au tourisme. ",
  },
  {
    title: "Géographie,\ncours culturels",
    body:
      "Culture économique espagnole.\nApproche interculturelle du monde slave.\nApproche interculturelle du Moyen-Orient.\nApproche interculturelle d'Extrême Orient.\nGéographie du tourisme international.\nDéveloppement durable dans le domaine du tourisme.\nDestinations touristiques d’affaires et de luxe.\nTourisme d’affaires.\nLuxe et son environnement.",
  },
];

let coursesDetails3 = [
  {
    title: "Web",
    body:
      "Langages : HTML, CSS, Javascript.\nInitiation à la librairie Jquery.\nCréation de pages statiques : communiqué de presse,\nmise en avant d'une destination et de ses attractivités.",
  },
  {
    title: "Multimédia",
    body: "Apprentissage des bases\nde Photoshop.\n Initiation à InDesign,\n et Illustrator.",
  },
  {
    title: "Territoires",
    body: "Panorama du tourisme.\nGéographie de tourisme.\nIngénierie terrioriale.",
  },
  {
    title: "Anglais\nprofessionnel",
    body: "Approfondissement des compétences dans la langue.\nCours de communication écrite mais aussi orale.",
  },
  {
    title: "Connaissances\nliées au tourisme",
    body:
      "Innovation et tourisme.\nDémarche qualité dans le tourisme.\nCRM et tourisme.\nÉconomie du tourisme.\nCommunication touristique.",
  },
  {
    title: "Compétences\nrelationnelles",
    body: "Nouvelles technologies de la communication.\nGestion des rssources humaines.\nConnaissance de l'entreprise.",
  },
];

let coursesDetails4 = [
  {
    title: "Anglais",
    body: "Grammaire.\nThème.\nCommunication multimédia.\nTraduction.\nPhonétique.\nVersion.",
  },
  {
    title: "Culture des pays\nanglophones",
    body:
      "Compréhension et expression écrites.\nCompréhension et expression orales.\nCivilisation Britannique Contemporaine.\nCivilisation Américaine Contemporaine.\nCivilisation Britannique.\nCivilisation Américaine.\nBusiness English.\nLegal English.",
  },
  {
    title: "Espagnol",
    body: "Traduction.\nCompréhension et expression écrites.\nGrammaire.\nTraduction.\nEspagnol des affaires.",
  },
  {
    title: "Culture des pays\nhispanophones",
    body:
      "Compréhension et expression orales.\nCivilisation Espagnole Contemporaine.\nCivilisation Latino-Américaine.\nCivilisation Espagnole.\n",
  },
  {
    title: "Matières\nprofessionnelles",
    body:
      "Expression et communication françaises.\nÉconomie de l'entreprise.\nIntroduction générale à l'étude du droit.\nDroit des contrats.\nAnalyses et politiques économiques.\nTechniques quantitatives de gestion.",
  },
  {
    title: "LV3 + Informatique",
    body: "LV3 Allemand.\nInformatique.",
  },
];

const stepIndicatorStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#4f8868",
  separatorFinishedColor: "#4f8868",
  separatorUnFinishedColor: "#3c6f75",
  stepIndicatorFinishedColor: "#4f8868",
  stepIndicatorUnFinishedColor: "#3c6f75",
  stepIndicatorCurrentColor: "#e8fcf6",
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: "#4f8868",
  stepIndicatorLabelFinishedColor: "#e8fcf6",
  stepIndicatorLabelUnFinishedColor: "#5ca784",
  labelColor: "#3c6f75",
  labelSize: 14,
  currentStepLabelColor: "#4f8868",
};

const CoursesScreenDetails = ({ navigation, courseposition, route }) => {
  const { course } = route.params;
  const [currentPage, setCurrentPage] = useState(0);
  const viewabilityConfig = { itemVisiblePercentThreshold: 40 };
  const buttonRef = useRef();

  const renderPage = (coursesDetails) => {
    const item = coursesDetails.item;
    return (
      <View style={styles.item}>
        <Text style={styles.title2}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };

  const renderPage2 = (coursesDetails2) => {
    const item2 = coursesDetails2.item;
    return (
      <View style={styles.item}>
        <Text style={styles.title2}>{item2.title}</Text>
        <Text style={styles.body}>{item2.body}</Text>
      </View>
    );
  };

  const renderPage3 = (coursesDetails3) => {
    const item3 = coursesDetails3.item;
    return (
      <View style={styles.item}>
        <Text style={styles.title2}>{item3.title}</Text>
        <Text style={styles.body}>{item3.body}</Text>
      </View>
    );
  };

  const renderPage4 = (coursesDetails4) => {
    const item4 = coursesDetails4.item;
    return (
      <View style={styles.item}>
        <Text style={styles.title2}>{item4.title}</Text>
        <Text style={styles.body}>{item4.body}</Text>
      </View>
    );
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount != 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.topbar}>
        <Animatable.View
          ref={buttonRef}
          animation="fadeIn"
          duration={600}
          delay={300}
          style={[StyleSheet.absoluteFillObject]}
        >
          <AntDesign
            name="back"
            size={32}
            color="#e8fcf6"
            onPress={() => {
              buttonRef.current.fadeOut(100).then(() => {
                navigation.goBack();
              });
            }}
            style={styles.backbutton}
          />
        </Animatable.View>
        <Appbar.Content />
      </Appbar.Header>
      <View style={styles.coursecontainer}>
        <SharedElement id={`course.${course.image}`}>
          <Image source={course.image} style={styles.image} />
        </SharedElement>
        <View style={styles.description}>
          <SharedElement id={`course.${course.title}`}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Entypo name={course.icon} size={22} color="#4f8868" style={styles.icon} />
              <Text style={styles.title}>{course.title}</Text>
            </View>
          </SharedElement>
          <SharedElement id={`course.${course.name}`}>
            <Text style={styles.text}>{course.name}</Text>
          </SharedElement>
          <SharedElement id={`course.${course.date}`}>
            <Text style={styles.date}>{course.date}</Text>
          </SharedElement>
        </View>
      </View>

      {courseposition == 0 && (
        <View style={styles.step}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={6}
              direction="vertical"
              currentPosition={currentPage}
              labels={coursesDetails.map((item) => item.title)}
            />
          </View>
          <FlatList
            style={styles.flatlist}
            data={coursesDetails}
            renderItem={renderPage}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
      )}

      {courseposition == 1 && (
        <View style={styles.step}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={5}
              direction="vertical"
              currentPosition={currentPage}
              labels={coursesDetails2.map((item) => item.title)}
            />
          </View>
          <FlatList
            style={styles.flatlist}
            data={coursesDetails2}
            renderItem={renderPage2}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
      )}

      {courseposition == 2 && (
        <View style={styles.step}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={6}
              direction="vertical"
              currentPosition={currentPage}
              labels={coursesDetails3.map((item) => item.title)}
            />
          </View>
          <FlatList
            style={styles.flatlist}
            data={coursesDetails3}
            renderItem={renderPage3}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
      )}
      {courseposition == 3 && (
        <View style={styles.step}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={6}
              direction="vertical"
              currentPosition={currentPage}
              labels={coursesDetails4.map((item) => item.title)}
            />
          </View>
          <FlatList
            style={styles.flatlist}
            data={coursesDetails4}
            renderItem={renderPage4}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return { courseposition: state.courseposition };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8fcf6",
  },
  coursecontainer: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topbar: {
    width: "100%",
    height: 100,
    backgroundColor: "#3c6f75",
  },
  backbutton: {
    alignSelf: "flex-start",
    marginTop: 6,
    marginLeft: 5,
  },
  card: {
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#6dcaa4",
    height: 260,
  },
  icon: {
    marginRight: 5,
  },
  image: {
    width: 380,
    height: 220,
    borderRadius: 25,
    marginTop: -72,
    marginBottom: 20,
  },
  item: {
    flex: 3,
    paddingVertical: 17,
  },
  step: {
    flexDirection: "row",
    paddingTop: 15,
    height: 360,
    marginLeft: 10,
    marginBottom: 20,
  },
  stepIndicator: {
    marginTop: 10,
    marginBottom: 50,
  },
  flatlist: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 50,
    marginTop: 0,
  },
  descriptionFlatlist: {
    width: 150,
  },
  description: {
    height: 70,
    justifyContent: "flex-end",
  },
  body: {
    flex: 1,
    fontSize: 13,
    color: "#3c6f75",
    lineHeight: 24,
    marginRight: 8,
    textAlign: "center",
    fontWeight: "500",
  },
  title: {
    textAlign: "center",
    marginBottom: 5,
    color: "#3c6f75",
    fontWeight: "800",
    fontSize: 14,
  },
  title2: {
    flex: 1,
    fontSize: 17,
    color: "#4f8868",
    paddingVertical: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 5,
    color: "#4f8868",
    fontWeight: "800",
    fontSize: 14,
  },
  date: {
    textAlign: "center",
    marginBottom: 5,
    color: "#4f8868",
    fontWeight: "600",
    fontSize: 11,
  },
});

CoursesScreenDetails.sharedElements = (route) => {
  const { course } = route.params;
  return [
    {
      id: `course.${course.id}.image`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `course.${course.id}.icon`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `course.${course.id}.title`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `course.${course.id}.name`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `course.${course.id}.date`,
      animation: "move",
      resize: "clip",
    },
  ];
};

export default connect(mapStateToProps, null)(CoursesScreenDetails);
