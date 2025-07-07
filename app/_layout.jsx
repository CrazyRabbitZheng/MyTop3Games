import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GameContext } from "../components/GameContext";
import { useState } from 'react';
import gameObject from "../assets/games.json";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout() {

  const [gameData, setGameData] = useState(gameObject);
  console.log(gameData);

  return (
      <GameContext.Provider value={{gameData, setGameData }}>
      <Tabs>
        <Tabs.Screen name="index"
            options={{
            title: "Game Home",
            tabBarIcon: ({color}) => <MaterialIcons size={28} name="home"  color={color} />,
            }}
        />
        <Tabs.Screen name="updateGame"
                    options={{
                    title: "Update Games",
                    tabBarIcon: ({color}) => <MaterialIcons size={28} name="update"  color={color} />,
                    }}
                />
        <Tabs.Screen name="games"
                    options={{
                    title: "Game Info",
                    tabBarIcon: ({color}) => <MaterialIcons size={28} name="videogame-asset"  color={color} />,
                    }}
                />
      </Tabs>
      </GameContext.Provider>
      )
}