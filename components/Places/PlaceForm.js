import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  function changeTitlehandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitlehandler}
          value={enteredTitle}
        />
        <ImagePicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
