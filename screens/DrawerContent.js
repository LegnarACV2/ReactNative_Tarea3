import React, {BackHandler} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch}  from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import IconF  from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon  from 'react-native-vector-icons/Ionicons';
import color from 'color';
import { ExitToApp } from '@material-ui/icons';
import RNExitApp from 'react-native-exit-app';

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

    const componentWillMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
     }
     
    const componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
     }
     
    const backPressed = () => {
       Alert.alert(
         'Exit App',
         'Do you want to exit?',
         [
           {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
           {text: 'Yes', onPress: () => RNExitApp.exitApp()},
         ],
         { cancelable: false });
         return true;
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image 
                                source={require('../assets/Rangel.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Rangel Francisco Acevedo Frías</Title>
                                <Caption style={styles.caption}>rangelfco123@gmail.com</Caption>
                            </View>
                    
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>Materia: </Paragraph>
                                <Caption style={styles.caption}>Int. Al Desarrollo de Apps Moviles</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({color, size}) => (
                                <IconF
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="ios-calculator"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sumadora"
                            onPress={() => {props.navigation.navigate('Calculator')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <IconF
                                    name="translate"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Traductor"
                            onPress={() => {props.navigation.navigate('TranslateNum')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="ios-calculator-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Multiplicador"
                            onPress={() => {props.navigation.navigate('Multiplicator')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="ios-logo-youtube"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="React Native"
                            onPress={() => {props.navigation.navigate('React Native')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Tema Oscuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <IconF
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Salir"
                    onPress={backPressed}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
drawerContent: {
    flex: 1,
    },
    userInfoSection: {
    paddingLeft: 20,
    },
    title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    },
    caption: {
    fontSize: 14,
    lineHeight: 14,
    },
    row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    },
    section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    },
    paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    },
    drawerSection: {
    marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    },
});