import { Text, View, Image, StyleSheet } from "react-native";

export default function Game({ gameData, image }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Fav Top 3 Games</Text>

      <Text style={styles.title}>Title: {gameData.title}</Text>
      <Text style={styles.year}>Year: {gameData.year}</Text>
      <Text style={styles.description}>Description: {gameData.description}</Text>

      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  year: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 150,
    marginTop: 10,
  },
});
