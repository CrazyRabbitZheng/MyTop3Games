import { View } from "react-native";
import { useState } from "react";
import Game from "../components/Game.jsx";
import Button from "../components/Button.jsx";

const diablo2 = require("../assets/images/diablo2.png");
const diablo4 = require("../assets/images/diablo4.png");
const rdr2 = require("../assets/images/rdr2.png");

const images = {
  diablo2,
  diablo4,
  rdr2
};

import gameData from "../assets/games.json";

export default function Index() {
  const [gameIndex, setGameIndex] = useState(0);

  return (
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
  );
}
