import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "../../../constants/globalStyles";
import BackButton from "@/components/backbutton/BackButton";

const Login: React.FC = () => {
  return (
    <ThemedView style={globalStyles.container}>
      <View style={styles.absoluteBackBTN}>
        <BackButton />
      </View>
      <Text>Login</Text>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  absoluteBackBTN: {
    position: "absolute",
    top: "10%",
    left: "8%",
  },
});
