import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CxTx(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType || 'default'}
      maxLength={props.maxLength}
      editable={props.editable !== undefined ? props.editable : true}
      multiline={props.multiline || false}
      secureTextEntry={props.secureTextEntry || false}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    width: '90%',
    fontSize: 16,
    height: 50,
  },
});
