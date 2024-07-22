import React from "react";
import Svg, { G, Path, ClipPath, Defs, Rect } from "react-native-svg";
import { TouchableOpacity, GestureResponderEvent } from "react-native";
import { router } from "expo-router";

interface NextButtonProps {
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const BackButton: React.FC<NextButtonProps> = ({ color, onPress }) => {

  const handleBack = () => {
router.back()
  };

  return (
    <TouchableOpacity onPress={handleBack}>
      <Svg width="10" height="18" viewBox="0 0 10 18" fill={color ? color : "black"}>
        <G clipPath="url(#clip0_117_1530)">
          <Path
            d="M9.16658 0.818176L0.833252 8.99999L9.16658 17.1818"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_117_1530">
            <Rect width="10" height="18" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};

export default BackButton;
