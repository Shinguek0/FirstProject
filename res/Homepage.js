import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = () => {
    // Parse input values as numbers
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Check if both inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      // Perform addition and update the result state
      const sum = num1 + num2;
      setResult(sum.toString());
    } else {
      // If either input is not a valid number, display an error message
      setResult('Invalid input');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Num 1"
          onChangeText={setInput1}
          value={input1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Num 2"
          onChangeText={setInput2}
          value={input2}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {result ? <Text style={styles.result}>{result}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 300,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
