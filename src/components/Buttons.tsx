import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/global";

interface ButtonProps {
  onPress: () => void;
  title: any;
  isBlue?: boolean;
  isGray?: boolean;
  isWhite?: Boolean;
}

export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
  isWhite,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : isWhite
          ? Styles.btnLight
          : Styles.btnLight
      }
      onPress={onPress}
    >
      {title === "history" ? (
        <svg
          width="48"
          height="41"
          viewBox="0 0 48 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5714 11.3889H25.1429V22.7778L34.9257 28.5633L36.5714 25.8072L28.5714 21.0694V11.3889ZM27.4286 0C21.9727 0 16.7403 2.15981 12.8824 6.00431C9.02448 9.84881 6.85714 15.0631 6.85714 20.5H0L9.05143 29.6794L18.2857 20.5H11.4286C11.4286 16.2713 13.1143 12.2157 16.1149 9.22557C19.1154 6.23541 23.1851 4.55556 27.4286 4.55556C31.672 4.55556 35.7417 6.23541 38.7423 9.22557C41.7429 12.2157 43.4286 16.2713 43.4286 20.5C43.4286 24.7287 41.7429 28.7843 38.7423 31.7744C35.7417 34.7646 31.672 36.4444 27.4286 36.4444C23.0171 36.4444 19.0171 34.645 16.1371 31.7522L12.8914 34.9867C16.6171 38.7222 21.7143 41 27.4286 41C32.8845 41 38.1169 38.8402 41.9748 34.9957C45.8327 31.1512 48 25.9369 48 20.5C48 15.0631 45.8327 9.84881 41.9748 6.00431C38.1169 2.15981 32.8845 0 27.4286 0"
            fill="white"
          />
        </svg>
      ) : (
        <Text style={Styles.smallTextLight}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
