import React from "react";
import { LogBox } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { Avatar, Chip } from "react-native-paper";

import { View, StyleSheet, Text } from "react-native";

import ProfileScreen from "./screens/ProfileScreen";
import ExperiencesScreen from "./screens/ExperiencesScreen";
import CoursesScreen from "./screens/CoursesScreen";
import StackScreen from "./screens/StackScreen";
import HobbiesScreen from "./screens/HobbiesScreen";

const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs();

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Profil") {
            iconName = focused ? (
              <FontAwesome name="user-circle" size={22} color={color} />
            ) : (
              <FontAwesome name="user-circle-o" size={22} color={color} />
            );
          } else if (route.name === "Expériences") {
            iconName = focused ? (
              <MaterialIcons name="work" size={22} color={color} />
            ) : (
              <MaterialIcons name="work-outline" size={22} color={color} />
            );
          } else if (route.name === "Stack") {
            iconName = focused ? (
              <Ionicons name="code-slash" size={22} color={color} />
            ) : (
              <Ionicons name="code-slash-outline" size={22} color={color} />
            );
          } else if (route.name === "Formations") {
            iconName = focused ? (
              <Entypo name="graduation-cap" size={22} color={color} />
            ) : (
              <SimpleLineIcons name="graduation" size={22} color={color} />
            );
          } else if (route.name === "Loisirs") {
            iconName = focused ? (
              <MaterialCommunityIcons name="emoticon-lol" size={24} color={color} />
            ) : (
              <MaterialCommunityIcons name="emoticon-lol-outline" size={24} color={color} />
            );
          }

          return <Text> {iconName} </Text>;
        },
      })}
      activeColor="#9B8878"
      inactiveColor="#B6B5AD"
      barStyle={{ backgroundColor: "#F9FAF9" }}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Expériences" component={ExperiencesScreen} />
      <Tab.Screen name="Stack" component={StackScreen} />
      <Tab.Screen name="Formations" component={CoursesScreen} />
      <Tab.Screen name="Loisirs" component={HobbiesScreen} />
    </Tab.Navigator>
  );
};

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar.Image size={122} source={require("./assets/profile.jpg")} style={styles.avatar} />
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#3C7B9A" }}>
        <MaterialIcons name="auto-fix-high" size={18} color="#9B8878" /> Perfectionniste
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#3C7B9A" }}>
        <FontAwesome5 name="hand-holding-heart" size={18} color="#9B8878" /> Empathique
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#3C7B9A" }}>
        <FontAwesome5 name="autoprefixer" size={18} color="#9B8878" /> Rigoureuse
      </Chip>
      <Chip mode="outlined" style={styles.chip} textStyle={{ color: "#3C7B9A" }}>
        <FontAwesome5 name="paint-brush" size={18} color="#9B8878" /> Créative
      </Chip>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Tab" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#3C7B9A",
  },
  avatar: {
    marginTop: 80,
    marginBottom: 20,
  },
  chip: {
    marginTop: 15,
    backgroundColor: "#B6B5AD",
  },
  text: {
    color: "#B6B5AD",
    fontSize: 18,
    marginBottom: 20,
  },
});
