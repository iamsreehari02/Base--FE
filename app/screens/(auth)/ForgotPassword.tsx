import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import AuthHeader from "@/components/authHeader/AuthHeader";
import { globalStyles } from "@/constants/globalStyles";
import { ThemedText } from "@/components/ThemedText";
import TextInput from "@/components/textInput/TextInput";
import CommonButton from "@/components/commonButton/CommonButton";
import { router } from "expo-router";

const ForgotPassword = () => {
  return (
    <ThemedView
      style={[
        globalStyles.container,
        { paddingTop: "35%", justifyContent: "flex-start" },
      ]}
    >
      <AuthHeader title="Forgot Password" />
      <ThemedText
        style={{ width: "100%", textAlign: "left", marginTop: "15%" }}
      >
        Please enter your email for reset password link
      </ThemedText>
      <TextInput placeholder="Enter your email address" />
      <View style={globalStyles.absoluteBTN}>
        <CommonButton
          label="Submit"
          onPress={() => router.push("/screens/Verification")}
        />
      </View>
    </ThemedView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
