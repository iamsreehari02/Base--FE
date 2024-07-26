// CommonButton.tsx
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface CommonButtonProps {
  onPress?: () => void;
  label: string;
  bgColor?: string;
  icon?: string;
  fontColor?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  onPress,
  label,
  bgColor,
  icon,
  fontColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: bgColor ? bgColor : "#F16023" },
      ]}
    >
      {icon ? (
        <View style={styles.labelWithIcon}>
          <Image
            source={icon}
            alt="Social Input Icons"
            width={10}
            height={10}
          />
          <Text
            style={[styles.label, { color: fontColor ? fontColor : "white" }]}
          >
            {label}
          </Text>
        </View>
      ) : (
        <Text
          style={[styles.label, { color: fontColor ? fontColor : "white" }]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    borderRadius: 18,
    paddingVertical: 13,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  labelWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 16,
  },
});
