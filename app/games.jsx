import { View, Image, Text } from "react-native";
import { useState } from "react";
import gameData from "../assets/games.json";
import Game from "../components/Game.jsx";
import Button from "../components/Button.jsx";

const diablo2_1st = require("../assets/images/diablo2_1st.png");
const diablo2_2nd = require("../assets/images/diablo2_2nd.png");
const diablo4 = require("../assets/images/diablo4.png");
const rdr2 = require("../assets/images/rdr2.png");

const images = {
  "diablo2_1st": diablo2_1st,
  "diablo2_2nd": diablo2_2nd,
  "diablo4": diablo4,
  "rdr2": rdr2
};

export default function Games() {
  const [gameIndex, setGameIndex] = useState(0);

  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        flex: 1,
        padding: 20
      }}
    >
      <Text style={{ color: 'blue', fontSize: 24, fontWeight: 'bold' }}>Game Info Page</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Game
          gameData={gameData[gameIndex]}
          image={images[gameData[gameIndex].image]}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {[0, 1, 2].map((i) => (
            <Button
              key={i}
              label={(i + 1).toString()}
              onPress={() => setGameIndex(i)}
              selected={i === gameIndex}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
