import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress, selected }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, selected && styles.selected]}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
