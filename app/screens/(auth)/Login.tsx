import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "../../../constants/globalStyles";
import BackButton from "@/components/backbutton/BackButton";
import TextInput from "@/components/textInput/TextInput";
import { loginInputData, socialLoginButtons } from "@/constants/data";
import CommonButton from "@/components/commonButton/CommonButton";
import { ThemedText } from "@/components/ThemedText";

interface LoginInputData {
  id: number;
  placeholder: string;
}

const Login: React.FC = () => {
  return (
    <ThemedView style={globalStyles.container}>
      <View style={styles.absoluteBackBTN}>
        <BackButton />
      </View>
      {loginInputData.map((data) => (
        <TextInput placeholder={data.placeholder} key={data.id} />
      ))}
      <View style={styles.rememberMeSection}>
        <ThemedText>Remember Me</ThemedText>
        <Text style={globalStyles.orangeText}>Forgot Password?</Text>
      </View>
      <CommonButton label="Login" />
      {socialLoginButtons.map((data) => (
        <CommonButton
          key={data.id}
          icon={data.icon}
          label={data.label}
          bgColor={data.bgColor}
          fontColor={data.fontColor}
        />
      ))}
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
  rememberMeSection: {
    width: "100%",
    marginTop: "5%",
    marginBottom: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
