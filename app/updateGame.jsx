import { Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { useContext } from 'react';
import { GameContext } from '../components/GameContext';

export default function UpdateGame() {


    const [currentGame, setCurrentGame] = useState(0)

    const { gameData, setGameData } = useContext(GameContext);

    const [title, setTitle] = useState(gameData[currentGame].title)
    const [year, setYear] = useState(gameData[currentGame].year)
    const [description, setDescription] = useState(gameData[currentGame].description);
    const [image, setImage] = useState(gameData[currentGame].image)

    const changeYear = (value) => {
        const updatedYear = parseInt(value);
        setYear(updatedYear);
    }

    const changeDescription = (value) => {
        const updatedArray = value.split(',');
        setDescription(updatedArray)
    }

    const updateGameData = () => {

        const updatedData = {
            title: title,
            year: year,
            description: description,
            image: image
        }

        console.log(updatedData);
        gameData[currentGame] = updatedData
        setGameData(gameData)
    }

    const changeGameIndex = (index) => {
        setTitle(gameData[index].title);
        setDescription(gameData[index].description);
        setYear(gameData[index].year);
        setImage(gameData[index].image);
        setCurrentGame(index);
    }

    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, padding: 20}}>
            <Text>Game Index</Text>
            <Picker
              selectedValue={currentGame}
              onValueChange={(itemValue, itemIndex) =>
                changeGameIndex(itemIndex)
              }>
              <Picker.Item label="Game 1" value={0} />
              <Picker.Item label="Game 2" value={1} />
              <Picker.Item label="Game 3" value={2} />
            </Picker>

            <Text>Title</Text>
            <TextInput value={title} onChangeText={setTitle}/>

            <Text>Year</Text>
            <TextInput value={year.toString()} onChangeText={changeYear}/>

            <Text>Description</Text>
            <TextInput value={description.toString()} onChangeText={changeDescription} />

            <Text>Image</Text>
            <Picker
              selectedValue={image}
              onValueChange={(itemValue, itemIndex) =>
                setImage(itemValue)
              }>
              <Picker.Item label="Diablo II #1" value="diablo2_1st" />
              <Picker.Item label="Diablo II #2" value="diablo2_2nd" />
              <Picker.Item label="Diablo IV #1" value="diablo4" />
              <Picker.Item label="Red Dead Redemption II #1" value="rdr2" />
            </Picker>
            <Button title="Update" onPress={updateGameData} />

        </View>

    )


}