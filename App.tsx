import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardBtn from "./components/CardBtn";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#00152D",
        paddingTop: 35,
        paddingLeft: 25,
        paddingRight: 25,
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <StatusBar style="auto" />
      <LinearGradient
        colors={["#2D625F", "transparent"]}
        style={{ height: 300 }}
      >
        <Text style={{ fontSize: 200, color: "white", textAlign: "center" }}>
          あ
        </Text>
      </LinearGradient>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <CardBtn
          data={{
            backgroundColor: "rgba(126, 216, 200, .9)",
            text: "あ",
            width: "48%",
            textCenter: true,
            fontSize: 30,
          }}
        />
        <CardBtn
          data={{
            backgroundColor: "rgba(126, 216, 200, .9)",
            text: "あ",
            width: "48%",
            textCenter: true,
            fontSize: 30,
          }}
        />
        <CardBtn
          data={{
            backgroundColor: "rgba(126, 216, 200, .9)",
            text: "あ",
            width: "48%",
            textCenter: true,
            fontSize: 30,
          }}
        />
        <CardBtn
          data={{
            backgroundColor: "rgba(126, 216, 200, .9)",
            text: "あ",
            width: "48%",
            textCenter: true,
            fontSize: 30,
          }}
        />
      </View>
    </View>
  );
};

export default App;
