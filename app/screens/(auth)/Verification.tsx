import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import AuthHeader from "@/components/authHeader/AuthHeader";
import { globalStyles } from "@/constants/globalStyles";
import OTPTextInput from "react-native-otp-textinput";
import CommonButton from "@/components/commonButton/CommonButton";
import { ThemedText } from "@/components/ThemedText";

const Verification = () => {
  return (
    <ThemedView style={globalStyles.container}>
      <AuthHeader title="Verification" />
      <ThemedText style={{ marginVertical: "5%" }}>
        Please verify the OTP send to your email
      </ThemedText>
      <OTPTextInput tintColor="#F16023" />
      <View style={globalStyles.absoluteBTN}>
        <CommonButton label="Submit" />
      </View>
    </ThemedView>
  );
};

export default Verification;

const styles = StyleSheet.create({});
