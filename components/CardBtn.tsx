
import { ReactElement } from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
interface Props {
  data: {
    backgroundColor: string;
    text?: string;
    overlay?: ReactElement | string;
    onPress?: any;
    width?: any;
    fontSize?: number;
    textCenter?: boolean;
  };
}
const CardBtn = (props: Props) => {
  const {
    fontSize,
    width,
    overlay,
    backgroundColor,
    text,
    onPress,
    textCenter,
  } = props.data;
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(backgroundColor, false)}
    >
      <View
        style={{
          backgroundColor,
          height: 140,
          width: width || "100%",
          display: "flex",
          justifyContent: "center",
          padding: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: fontSize || 40,
            color: "white",
            textAlign: textCenter ? "center" : "left",
          }}
        >
          {text}
        </Text>
        {typeof overlay === "string" ? (
          <Text
            style={{
              position: "absolute",
              right: 15,
              fontSize: 100,
              transform: [{ rotate: "8deg" }],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {overlay}
          </Text>
        ) : (
          overlay
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default CardBtn;
