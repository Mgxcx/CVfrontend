import React from "react";
import { LogBox } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

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
    <Tab.Navigator>
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
