import { Text, View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Welcome to Zheng's Games</Text>
        <Button onPress={() => router.navigate('/games')} title="Games"></Button>
       </View>
  );
}