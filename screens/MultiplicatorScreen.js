import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput,  Modal} from 'react-native';

const MultiplicatorScreen = ({navigation}) => {

  const [NumValue, setNumValue] = useState(0);
  const [isModalVisible, setModalVisible] = useState(true);
  const [isFocus, setFocus] = useState(false);

  var MyElements = [];

  for(let i = 1; i <= 13; i++){
    console.log(5 * i);
    MyElements.push(
      <Text>5 x {i} = {5*i}</Text>,
    );
  }

  if (NumValue == 0) {
    setNumValue(1);
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

  return (
    <View  style={styles.container}>
      <Button title="Nuevo" onPress={toggleModalVisibility}/>

      <Modal 
        animationType='slide'
        transparent visible={isModalVisible}
        presentationStyle='overFullScreen'
        onDismiss={toggleModalVisibility}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <TextInput
                style={isFocus ? styles.textinputFocus : styles.textinput}
                placeholder="Ingrese un Número"
                keyboardType="numeric"
                onChangeText={inputOnChangeText}
                onFocus={ChangeFocus}
              />
              <Button title="Ok" onPress={toggleModalVisibility}/>
            </View>
          </View>

      </Modal>
    
      <Text style={styles.textOutput}>{NumValue} x 1 = {NumValue * 1}</Text>
      <Text style={styles.textOutput}>{NumValue} x 2 = {NumValue * 2}</Text>
      <Text style={styles.textOutput}>{NumValue} x 3 = {NumValue * 3}</Text>
      <Text style={styles.textOutput}>{NumValue} x 4 = {NumValue * 4}</Text>
      <Text style={styles.textOutput}>{NumValue} x 5 = {NumValue * 5}</Text>
      <Text style={styles.textOutput}>{NumValue} x 6 = {NumValue * 6}</Text>
      <Text style={styles.textOutput}>{NumValue} x 7 = {NumValue * 7}</Text>
      <Text style={styles.textOutput}>{NumValue} x 8 = {NumValue * 8}</Text>
      <Text style={styles.textOutput}>{NumValue} x 9 = {NumValue * 9}</Text>
      <Text style={styles.textOutput}>{NumValue} x 10 = {NumValue * 10}</Text>
      <Text style={styles.textOutput}>{NumValue} x 11 = {NumValue * 11}</Text>
      <Text style={styles.textOutput}>{NumValue} x 12 = {NumValue * 12}</Text>
      <Text style={styles.textOutput}>{NumValue} x 13 = {NumValue * 13}</Text>

    </View>
  );
};

export default MultiplicatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#003c71'
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 1,
    transform: [{ translateX: -(392.72 * 0.4) }, 
                { translateY: -90 }],
    height: 180,
    width: 392.72 * 0.8,
    backgroundColor: "#fff",
    borderRadius: 50,
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
    color: '#2ecc71',
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderWidth: 2,
    borderColor: '#2ecc71',
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor: '#caf7e3',
    width: 340,
    textAlign: 'center',
    margin: 3,
    marginTop: 10
  },
});
