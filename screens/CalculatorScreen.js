import React, { useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CalculatorScreen = ({navigation}) => {
  const [num1Value, setNum1Value] = useState(0);
  const [num2Value, setNum2Value] = useState(0);
  const [isFocusNum1, setFocusNum1] = useState(false);
  const [isFocusNum2, setFocusNum2] = useState(false);

  const Sumar = () =>{
    let ResultSuma = Number.parseInt(num1Value) + Number.parseInt(num2Value) ;
    return ResultSuma;   
  }

  const ChangeFocusNum1 = () =>{
    setFocusNum1(!isFocusNum1);
    setFocusNum2(false);
  }

  const ChangeFocusNum2 = () =>{
    setFocusNum2(!isFocusNum2);
    setFocusNum1(false);
  }

  let inputOnChangeTextNum1 = (e) => {
    setNum1Value(e)
  }
  let inputOnChangeTextNum2 = (e) => {
    setNum2Value(e)
  }

  let TextResult = '0';

  if (Sumar() > 0) {
    TextResult = Sumar();
  }
  else{
    TextResult = '0';
  }

  return (
      <View  style={styles.container}>
        <TextInput
          style={isFocusNum1 ? styles.textinputFocus : styles.textinput}
          placeholder="Ingrese Primer numero"
          keyboardType="numeric"
          onChangeText={inputOnChangeTextNum1}
          onFocus={ChangeFocusNum1}
        />
        <TextInput
          style={isFocusNum2 ? styles.textinputFocus : styles.textinput}
          placeholder="Ingrese el Segundo numero"
          keyboardType="numeric"
          onChangeText={inputOnChangeTextNum2}
          onFocus={ChangeFocusNum2}
        />
        <Text style={styles.textOutput}>{TextResult}</Text>
      </View>
    );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#003c71',
    },
    textinput: {
      margin: 10,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#3edbf0',
      paddingVertical: 14,
      paddingHorizontal: 10,
      width: 200,
      color: '#1b2021',
      borderRadius: 30, 
      textAlign: 'center',
      textShadowColor: '#1b2021',
    },
    textinputFocus: {
      margin: 10,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#2ecc71',
      paddingVertical: 14,
      paddingHorizontal: 10,
      width: 280,
      color: '#1b2021',
      borderRadius: 30, 
      textAlign: 'center',
      textShadowColor: '#1b2021',
    }
    ,
    textOutput: {
      color: '#2ecc71',
      fontSize: 80,
    }
});
