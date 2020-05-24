import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "@views/home/Home";
import Card from "@components/Card";

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
