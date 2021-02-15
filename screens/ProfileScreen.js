import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={{ flex: 1 }}>
          <Text>It's Profile Screen!!</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F9FAF9",
    // "#1A1332",
  },
});

export default ProfileScreen;
