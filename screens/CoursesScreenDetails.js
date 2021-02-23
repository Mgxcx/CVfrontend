import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Appbar } from "react-native-paper";
import { Card } from "react-native-shadow-cards";
import { AntDesign } from "@expo/vector-icons";
import StepIndicator from "react-native-step-indicator";
import { connect } from "react-redux";

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
    title: "Redux, React et React Native",
    body:
      "Apprentissage de la librairie React : apport de fluidité aux sites et réactivité quasi-instantanée !\nApprentissage des applications mobiles React Native : déploiement d'une application sur Android ou iOS, découverte des composants React Native clé en main !\nUtilisation des fonctionnalités natives de l'appareil: caméra ou géolocalisation, et intégration de l’intelligence artificielle via un webservice.\nDécouverte du potentiel du temps réel via la librairie socket.io et l'implémentation d’un chat.\nApprentissage de Redux : une bibliothèque qui optimise les échanges de données dans des applications React et React Native.",
  },
  {
    title: "Création d'API et Architecture",
    body:
      "Construction d'un Back-end indépendant pour architecturer un projet de façon souple et évolutive.\nConception de l’API d’un Back-end en webservice.\nMise en place d'une architecture REST full et découpage de features en routes spécialisées.\nMaîtrise des notions de module et composants pour factoriser les fonctionnalités et gagner en efficacité.",
  },
  {
    title: "Conception et Méthode Agile",
    body:
      "Travail sur la conception de l'application :\ndéfinir l'UX / UI à l'aide du parcours utilisateur (user journeys, user stories, etc.),\net création des maquettes, du wireframe et du mockup des pages à l'aide d'outils (Google Drawings, Figma, et Whimsical).\nTravail sur le schéma de la base de données.\nTravail en sprints de développement en équipe.\nApprofondissement de la maîtrise de Git, et Github.",
  },
];

let coursesDetails2 = [
  {
    title: "Marketing, Digital et Logistique",
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
    title: "Géographie, cours culturels",
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
    title: "Compétences relationnelles",
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
  stepStrokeCurrentColor: "#3c6f75",
  separatorFinishedColor: "#3c6f75",
  separatorUnFinishedColor: "#3c6f75",
  stepIndicatorFinishedColor: "#3c6f75",
  stepIndicatorUnFinishedColor: "#3c6f75",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 10,
  stepIndicatorLabelCurrentColor: "#3c6f75",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#3c6f75",
  labelSize: 11,
  currentStepLabelColor: "#3c6f75",
};

const CoursesScreenDetails = ({ navigation, courseposition }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const viewabilityConfig = { itemVisiblePercentThreshold: 40 };

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
      <View style={styles.container1}>
        <Appbar.Header style={styles.topbar}>
          <AntDesign
            name="back"
            size={32}
            color="#e8fcf6"
            onPress={() => {
              navigation.navigate("CoursesScreenList");
            }}
            style={styles.backbutton}
          />
          <Appbar.Content />
        </Appbar.Header>

        {courseposition == 0 && (
          <Card style={styles.card} key={courseposition}>
            <Image source={courses[0].image} style={styles.image} />
            <Text style={styles.title}>{courses[0].title}</Text>
            <Text style={styles.text}>{courses[0].name}</Text>
            <Text style={styles.date}>{courses[0].date}</Text>
          </Card>
        )}
        {courseposition == 1 && (
          <Card style={styles.card} key={courseposition}>
            <Image source={courses[1].image} style={styles.image} />
            <Text style={styles.title}>{courses[1].title}</Text>
            <Text style={styles.text}>{courses[1].name}</Text>
            <Text style={styles.date}>{courses[1].date}</Text>
          </Card>
        )}
        {courseposition == 2 && (
          <Card style={styles.card} key={courseposition}>
            <Image source={courses[2].image} style={styles.image} />
            <Text style={styles.title}>{courses[2].title}</Text>
            <Text style={styles.text}>{courses[2].name}</Text>
            <Text style={styles.date}>{courses[2].date}</Text>
          </Card>
        )}
        {courseposition == 3 && (
          <Card style={styles.card} key={courseposition}>
            <Image source={courses[3].image} style={styles.image} />
            <Text style={styles.title}>{courses[3].title}</Text>
            <Text style={styles.text}>{courses[3].name}</Text>
            <Text style={styles.date}>{courses[3].date}</Text>
          </Card>
        )}
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
        <View style={styles.step2}>
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
        <View style={styles.step3}>
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
        <View style={styles.step4}>
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
    backgroundColor: "#e8fcf6",
  },
  container1: {
    flex: 1,
    backgroundColor: "#e8fcf6",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topbar: {
    width: "100%",
    height: 100,
    backgroundColor: "#64b893",
  },
  backbutton: {
    alignSelf: "flex-start",
    marginTop: 6,
  },
  card: {
    marginTop: 45,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#6dcaa4",
    height: 210,
  },
  image: {
    width: "100%",
    height: 90,
    marginBottom: 20,
    borderRadius: 5,
  },
  step: {
    justifyContent: "flex-end",
    marginTop: 280,
    flexDirection: "row",
    height: 400,
    marginLeft: 10,
  },
  step2: {
    justifyContent: "flex-end",
    marginTop: 280,
    flexDirection: "row",
    height: 400,
    marginLeft: 10,
  },
  step3: {
    justifyContent: "flex-end",
    marginTop: 280,
    flexDirection: "row",
    height: 400,
    marginLeft: 10,
  },
  step4: {
    justifyContent: "flex-end",
    marginTop: 280,
    flexDirection: "row",
    height: 400,
    marginLeft: 10,
  },
  stepIndicator: {
    marginVertical: 50,
  },
  flatlist: {
    flexGrow: 1,
    padding: 20,
  },
  descriptionFlatlist: {
    width: 150,
  },
  item: {
    flex: 3,
    paddingVertical: 17,
  },
  title2: {
    flex: 1,
    fontSize: 20,
    color: "#3c6f75",
    paddingVertical: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: "#3c6f75",
    lineHeight: 24,
    marginRight: 8,
    textAlign: "center",
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

export default connect(mapStateToProps, null)(CoursesScreenDetails);
