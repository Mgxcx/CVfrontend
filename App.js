import React from "react";
import { LogBox } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Avatar } from "react-native-paper";

import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Button } from "react-native";

import ShortProfileScreen from "./screens/ShortProfileScreen";
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

          if (route.name === "Profile") {
            iconName = focused ? (
              <FontAwesome name="user-circle" size={22} color={color} />
            ) : (
              <FontAwesome name="user-circle-o" size={22} color={color} />
            );
          } else if (route.name === "Experiences") {
            iconName = focused ? (
              <MaterialIcons name="work" size={22} color={color} />
            ) : (
              <MaterialIcons name="work-outline" size={22} color={color} />
            );
          } else if (route.name === "Courses") {
            iconName = focused ? (
              <Entypo name="graduation-cap" size={22} color={color} />
            ) : (
              <SimpleLineIcons name="graduation" size={22} color={color} />
            );
          } else if (route.name === "Stack") {
            iconName = focused ? (
              <Ionicons name="code-slash" size={22} color={color} />
            ) : (
              <Ionicons name="code-slash-outline" size={22} color={color} />
            );
          } else if (route.name === "Hobbies") {
            iconName = focused ? (
              <MaterialCommunityIcons name="emoticon-lol" size={24} color={color} />
            ) : (
              <MaterialCommunityIcons name="emoticon-lol-outline" size={24} color={color} />
            );
          }

          return <Text> {iconName} </Text>;
        },
      })}
      activeColor="#E8C518"
      inactiveColor="#FFFEFA"
      barStyle={{ backgroundColor: "#694fad" }}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Experiences" component={ExperiencesScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Stack" component={StackScreen} />
      <Tab.Screen name="Hobbies" component={HobbiesScreen} />
    </Tab.Navigator>
  );
};

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar.Image size={122} source={require("./assets/profile.jpg")} style={styles.avatar} />
      <Text>Hello !!!</Text>
      <Button
        title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate("SomeScreen");
        }}
      />
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
    backgroundColor: "lightgreen",
  },
  avatar: {
    marginTop: 80,
    marginBottom: 20,
  },
});
