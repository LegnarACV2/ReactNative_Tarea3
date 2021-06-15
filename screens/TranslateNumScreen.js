import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TranslateNumScreen = ({navigation}) => {

  ///Liberia para convertir numeros del 1 al 1000 en letras
  const Unidades = ['','Uno','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve'];
  const Nums10_20 = ['Diez','Once','Doce','Trece','Catorce','Quince','Dieciseis','Diecisiete','Dieciocho','Diecinueve','Veinte'];
  const Decenas=['','Dieci','Veinti','Treinta','Cuarenta','Cincuenta','Sesenta','Setenta','Ochenta','Noventa'];
  const Centenas = ['','Ciento','Doscientos','Trescientos','Cuatrocientos','Quinientos','Seiscientos','Setecientos','Ochocientos','Novecientos'];
  
  const ConvertNumbers = (NumInt)=>{
      let unidad = 0;
      let decena = 0;
      let centena = 0;
      let NumConvert = 'Se escribe: ';

      if (NumInt >= 0 && NumInt <= 99) {
          decena = Number.parseInt(NumInt.toString().substr(0,1));
          unidad = Number.parseInt(NumInt.toString().substr(1));
          if (isNaN(unidad)) {
              NumConvert  = `${Unidades[decena]}`;
          }else if (decena == 1 && unidad >= 0) {
              NumConvert = `${Nums10_20[unidad]}`;
          }else if (NumInt == 20) {
              NumConvert = 'Veinte';
          }else if (unidad == 0) {
              NumConvert = `${Decenas[decena]}`;
          }else{
              NumConvert = `${Decenas[decena]} y ${Unidades[unidad]}`;
          }
      }
      else if(NumInt == 100){
          NumConvert = 'Cien';
      }
      else if (NumInt >= 101 && NumInt <= 999) {
          centena = Number.parseInt(NumInt.toString().substr(0,1));
          decena = Number.parseInt(NumInt.toString().substr(1,1));
          unidad = Number.parseInt(NumInt.toString().substr(2));
          if (decena == 0) {
              NumConvert = `${Centenas[centena]} ${Unidades[unidad]}`;
          }else if (decena == 1) {
              NumConvert = `${Centenas[centena]} ${Nums10_20[unidad]}`;
          }else if (NumInt == 120) {
              NumConvert = 'Ciento Veinte';
          }else if (unidad == 0) {
              NumConvert = `${Centenas[centena]} ${Decenas[decena]}`;
          }else{
              NumConvert = `${Centenas[centena]} ${Decenas[decena]} y ${Unidades[unidad]}`;
          }
      }
      else if(NumInt == 1000){
          NumConvert = 'Mil';
      }
      else if(isNaN(NumInt)){
        NumConvert = '';
      }
      else{
          NumConvert = 'Numero fuera de Rango';
      }
      return NumConvert;
  }

  const [isFocus, setFocus] = useState(false);
  const [NumValue, setNumValue] = useState(0);
  

  const Traducir = () =>{
    let num = Number.parseInt(NumValue);
    
    return num;   
  }

  const ChangeFocus = () =>{
    setFocus(!isFocus);
  }

  let inputOnChangeText = (e) => {
    setNumValue(e)
  }

  const toggleModalVisibility = () =>{
    setModalVisible(!isModalVisible);
  }

  let TextResult = '0';

  if (Traducir() != '') {
    TextResult = `Se escribe: {${ConvertNumbers(Number.parseInt(NumValue))}}`;
  }
  else{
    TextResult = `Se escribe: {${ConvertNumbers(Number.parseInt(NumValue))}}`;
  }

  return (
    <View  style={styles.container}>
      <TextInput
        style={isFocus ? styles.textinputFocus : styles.textinput}
        placeholder="Ingrese un Número"
        keyboardType="numeric"
        onChangeText={inputOnChangeText}
        onFocus={ChangeFocus}
      />
      <Text style={styles.textOutput}>{TextResult}</Text>
    </View>
  );
};

export default TranslateNumScreen; 

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
  },
  textOutput: {
    color: '#1b2021',
    fontSize: 20,
  },
});
