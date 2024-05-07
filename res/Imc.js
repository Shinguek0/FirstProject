import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setIMC(imcCalculado.toFixed(2));
    } else {
      alert('Por favor, preencha os campos de altura e peso.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={text => setAltura(text)}
        style={styles.input}
      />
      <TextInput
        label="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={text => setPeso(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={calcularIMC} style={styles.button}>
        Calcular IMC
      </Button>
      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {imc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
