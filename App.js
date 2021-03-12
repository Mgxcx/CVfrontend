import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

import { Avatar, Chip } from "react-native-paper";
import { View, StyleSheet, Text, LogBox, Linking } from "react-native";

import ProfileScreen from "./screens/ProfileScreen";
import ExperiencesScreen from "./screens/ExperiencesScreen";
import CoursesScreenList from "./screens/CoursesScreenList";
import CoursesScreenDetails from "./screens/CoursesScreenDetails";
import StackScreen from "./screens/StackScreen";
import HobbiesScreen from "./screens/HobbiesScreen";

import { Provider as StoreProvider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import courseposition from "./reducers/courseposition.reducer";

const store = createStore(combineReducers({ courseposition }));

const Drawer = createDrawerNavigator();
const Stack = createSharedElementStackNavigator();
const Tab = createMaterialBottomTabNavigator();

LogBox.ignoreAllLogs();

//Personnalisation du thème React Native Paper
const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    disabled: "#5ca784",
    placeholder: "#5ca784",
    text: "#5ca784",
    background: "#e8fcf6",
    surface: "#5ca784",
    primary: "#5ca784",
    accent: "#5ca784",
  },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Profil") {
            iconName = focused ? (
              <FontAwesome name="user-circle" size={21} color={color} />
            ) : (
              <FontAwesome name="user-circle-o" size={20} color={color} />
            );
          } else if (route.name === "Expériences") {
            iconName = focused ? (
              <MaterialIcons name="work" size={22} color={color} />
            ) : (
              <MaterialIcons name="work-outline" size={20} color={color} />
            );
          } else if (route.name === "Stack") {
            iconName = focused ? (
              <Ionicons name="code-slash" size={22} color={color} />
            ) : (
              <Ionicons name="code-slash-outline" size={20} color={color} />
            );
          } else if (route.name === "Formations") {
            iconName = focused ? (
              <Entypo name="graduation-cap" size={22} color={color} />
            ) : (
              <SimpleLineIcons name="graduation" size={20} color={color} />
            );
          } else if (route.name === "Loisirs") {
            iconName = focused ? (
              <MaterialCommunityIcons name="emoticon-lol" size={22} color={color} />
            ) : (
              <MaterialCommunityIcons name="emoticon-lol-outline" size={20} color={color} />
            );
          }

          return <Text> {iconName} </Text>;
        },
      })}
      activeColor="#3c6f75"
      inactiveColor="#5ca784"
      barStyle={{ backgroundColor: "#e8fcf6" }}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Expériences" component={ExperiencesScreen} />
      <Tab.Screen name="Stack" component={StackScreen} />
      <Tab.Screen name="Formations" component={CoursesStack} />
      <Tab.Screen name="Loisirs" component={HobbiesScreen} />
    </Tab.Navigator>
  );
};

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const CoursesStack = () => {
  return (
    <Stack.Navigator headerMode="none" initalRouteName="CoursesScreenList">
      <Stack.Screen name="CoursesScreenList" component={CoursesScreenList} />
      <Stack.Screen name="CoursesScreenDetails" component={CoursesScreenDetails} options={() => options} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={122} source={require("./assets/profile2.jpeg")} style={styles.avatar} />
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#F9FAF9" }}>
        <MaterialIcons name="auto-fix-high" size={18} color="#3c6f75" /> Perfectionniste
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#F9FAF9" }}>
        <FontAwesome5 name="hand-holding-heart" size={18} color="#3c6f75" /> Empathique
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#F9FAF9" }}>
        <FontAwesome5 name="autoprefixer" size={18} color="#3c6f75" /> Rigoureuse
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#F9FAF9" }}>
        <FontAwesome5 name="paint-brush" size={18} color="#3c6f75" /> Créative
      </Chip>
      <View style={styles.container2}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="linkedin-square"
            size={40}
            color="#3c6f75"
            style={styles.socialicon}
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/in/margaux-chevreux-377586a4/");
            }}
          />
          <FontAwesome
            name="github-square"
            size={40}
            color="#3c6f75"
            onPress={() => {
              Linking.openURL("https://github.com/Mgxcx");
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="twitter-square"
            size={40}
            color="#3c6f75"
            style={styles.socialicon}
            onPress={() => {
              Linking.openURL("https://twitter.com/mgxcx");
            }}
          />
          <FontAwesome5
            name="instagram-square"
            size={40}
            color="#3c6f75"
            onPress={() => {
              Linking.openURL("https://www.instagram.com/mgxcx/");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Tab" component={TabNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C7F7E7",
  },
  container2: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#C7F7E7",
  },
  avatar: {
    marginBottom: 20,
  },
  chip: {
    marginTop: 15,
    backgroundColor: "#5ca784",
  },
  text: {
    color: "#F9FAF9",
    fontSize: 18,
    marginBottom: 20,
  },
  socialicon: {
    marginRight: 15,
    marginBottom: 15,
  },
});
