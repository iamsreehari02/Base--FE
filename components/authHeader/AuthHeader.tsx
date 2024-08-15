import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../backbutton/BackButton";
import { ThemedView } from "../ThemedView";
import { StatusBar } from "expo-status-bar";
import { ThemedText } from "../ThemedText";

interface AuthHeaderProps {
  title: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title }) => {
  return (
    <ThemedView style={styles.container}>
      <BackButton />
      <ThemedText style={styles.title} type="title">
        {title}
      </ThemedText>
      <View style={{ width: 25 }} />
    </ThemedView>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 9,
    paddingVertical: 8,
    position: "absolute",
    top: "9%",
    backgroundColor: "white",
    zIndex: 999,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
