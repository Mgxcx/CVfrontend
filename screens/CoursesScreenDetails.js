import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text } from "react-native";

const CoursesScreenDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ flex: 1 }}>
          <Text>It's Courses Screen Details!!</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CoursesScreenDetails;
