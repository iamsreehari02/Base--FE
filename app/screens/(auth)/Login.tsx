import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "../../../constants/globalStyles";
import BackButton from "@/components/backbutton/BackButton";
import TextInput from "@/components/textInput/TextInput";
import { loginInputData, socialLoginButtons } from "@/constants/data";
import CommonButton from "@/components/commonButton/CommonButton";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import AuthHeader from "@/components/authHeader/AuthHeader";
import { Checkbox } from "react-native-paper";
interface LoginInputData {
  id: number;
  placeholder: string;
}

const Login: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  return (
    <ThemedView style={globalStyles.container}>
      <AuthHeader title="Welcome Back" />
      <ThemedText>Login to your account</ThemedText>
      {loginInputData.map((data: LoginInputData) => (
        <TextInput placeholder={data.placeholder} key={data.id} />
      ))}
      <View style={styles.rememberMeSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            color={checked ? "#DF5A22" : "white"}
          />
          <ThemedText>Remember Me</ThemedText>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/screens/ForgotPassword")}
        >
          <ThemedText type="link">Forgot Password?</ThemedText>
        </TouchableOpacity>
      </View>
      <CommonButton label="Login" onPress={() => router.push("/home")} />
      <View style={{ gap: 10, width: "100%", marginVertical: 10 }}>
        {socialLoginButtons.map((data) => (
          <CommonButton
            key={data.id}
            icon={data.icon}
            label={data.label}
            bgColor={data.bgColor}
            fontColor={data.fontColor}
            borderWidth={1}
            borderClr="#D9D9D9"
          />
        ))}
      </View>
      <TouchableOpacity
        style={{ marginTop: "5%" }}
        onPress={() => router.push("/screens/SignUp")}
      >
        <ThemedText style={{ alignItems: "center" }}>
          Don’t have an account? <ThemedText type="link">Register</ThemedText>
        </ThemedText>
      </TouchableOpacity>
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
