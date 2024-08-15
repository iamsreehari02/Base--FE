import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { globalStyles } from "../../../constants/globalStyles";
import TextInput from "@/components/textInput/TextInput";
import CommonButton from "@/components/commonButton/CommonButton";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { singupInputData, socialLoginButtons } from "@/constants/data";
import AuthHeader from "@/components/authHeader/AuthHeader";
import BaseLogo from "../../../assets/svg/base_auth_logo.svg";

interface SignUpInputData {
  id: Number;
  placeholder: string;
  inputType?: string;
  secureTextEntry?: boolean;
}

const SignUp: React.FC = () => {
  return (
    <ThemedView style={globalStyles.container}>
      <AuthHeader title="Create account" />
      <ThemedText style={{ marginVertical: "5%" }}>
        Begin your journey with us !
      </ThemedText>
      <View style={styles.rowContainer}>
        {singupInputData.slice(0, 2).map((data: SignUpInputData) => (
          <TextInput
            placeholder={data.placeholder}
            key={data.id}
            keyboardType={data.inputType}
            secureTextEntry={data.secureTextEntry}
            inLineDesign={true}
          />
        ))}
      </View>

      <View style={styles.inputContainer}>
        {singupInputData.slice(2).map((data: SignUpInputData) => (
          <TextInput
            placeholder={data.placeholder}
            key={data.id}
            keyboardType={data.inputType}
            secureTextEntry={data.secureTextEntry}
          />
        ))}
      </View>
      <CommonButton label="Sign Up" />
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
        style={styles.loginLink}
        onPress={() => router.push("/screens/Login")}
      >
        <ThemedText>
          Already have an account? <ThemedText type="link">Login</ThemedText>
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    width: "100%",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  nameInput: {
    flex: 1,
    marginRight: 8,
  },
  phoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  picker: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
  phoneNumberInput: {
    flex: 2,
  },
  signUpButton: {
    marginVertical: 20,
  },
  loginLink: {
    marginTop: 20,
    alignItems: "center",
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
