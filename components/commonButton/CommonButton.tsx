// CommonButton.tsx
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CommonButtonProps {
  onPress?: () => void;
  label: string;
  bgColor?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  fontColor?: string;
  borderWidth?: number;
  borderClr?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  onPress,
  label,
  bgColor,
  icon: Icon,
  fontColor,
  borderWidth,
  borderClr,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: bgColor ? bgColor : "#F16023",
          borderWidth: borderWidth,
          borderColor: borderClr,
        },
      ]}
    >
      {Icon ? (
        <View style={styles.labelWithIcon}>
          <Icon width={20} height={20} fill={fontColor ? fontColor : "white"} />
          <Text
            style={[styles.label, { color: fontColor ? fontColor : "white" }]}
          >
            {label.toUpperCase()}
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
    gap: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 13,
  },
});
