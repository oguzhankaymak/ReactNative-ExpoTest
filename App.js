import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Navigator from "./src/navigation/NavigationStack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
