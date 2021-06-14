import React from 'react';
import {View, Text, Button, StyleSheet, Image, Linking} from 'react-native';
const HomeScreen = ({navigation}) => {
    return (
      <View  style={styles.container}>
        <Text style={styles.title}>Blog Personal</Text>
        <Image 
          source={require('../assets/Rangel.png')}
          style={styles.image}
        />
        <Text style={styles.Subtitle}>Nombre:</Text>
        <Text style={styles.caption}>Rangel Francisco</Text>
        <Text style={styles.Subtitle}>Apellido:</Text>
        <Text style={styles.caption}>Acevedo Frías</Text>
        <Text style={styles.Subtitle}>Acerca de Mi: </Text>
        <Text style={styles.caption,styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolorem voluptate sint quis accusamus, inventore sequi asperiores tempora, porro officia nesciunt culpa facere voluptas recusandae, excepturi perspiciatis molestiae saepe! Fugiat.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio quae praesentium porro neque. Ad, nisi maiores ratione ipsa molestiae dolorem, odio, numquam quisquam autem quae ea sequi enim expedita.</Text>
        <Text style={styles.p_link}>Enviame un Email: </Text>
        <Button
          title="rangelfco123@gmail.com"
          onPress={() => Linking.openURL('mailto:rangelfco123@gmail.com')}
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  image: {height: 200, width: 200, borderRadius: 60, resizeMode: 'contain'},
  Subtitle: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    color: '#343a40',
    marginBottom: 7
  },
  p:{
    textAlign: 'justify',
    width: 300,
    marginTop: 3,
    marginBottom: 20
  },
  p_link:{
    fontWeight: 'bold',
  },
  button: {backgroundColor: 'deepskyblue', padding: 10, marginTop: 7},
});