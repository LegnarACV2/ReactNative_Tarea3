//import React
import React from 'react';

//Import funciones para crear elementos de navegacion
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//import Icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';

//import vistas y elementos para navegacion
import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';
import MultiplicatorScreen from './MultiplicatorScreen';
import TranslateNumScreen from './TranslateNumScreen';
import YoutubeScreen from './YoutubeScreen';

const HomeStack = createStackNavigator();
const CalculatorStack = createStackNavigator();
const TranslateNumStack = createStackNavigator();
const MultiplicatorStack = createStackNavigator();
const YoutubeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

//Create funciones que devuelven el cuerpo de cada vista a la que navegamos

const HomeStackScreen = ({navigation}) =>(
<HomeStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#009387'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold' }
}}>
    <HomeStack.Screen name="Home" component={HomeScreen} options=
    {{
        title:'Home',
        headerLeft: () => (
        <Icon.Button 
            name="ios-menu" 
            size={25}
            backgroundColor="#009387" 
            onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        )
    }}
    /> 
</HomeStack.Navigator>
);

const CalculatorStackScreen = ({navigation}) =>(
<CalculatorStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#1f65ff'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold' }
}}>
    <CalculatorStack.Screen name="Sumadora" component={CalculatorScreen} options=
    {{
        headerLeft: () => (
        <Icon.Button 
            name="ios-menu" 
            size={25}
            backgroundColor="#1f65ff" 
            onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        )
    }}/> 
</CalculatorStack.Navigator>
);    

const TranslateNumStackScreen = ({navigation}) =>(
<TranslateNumStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#694fad'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold' }
}}>
    <TranslateNumStack.Screen name="Traductor" component={TranslateNumScreen} options=
    {{
        headerLeft: () => (
        <Icon.Button 
            name="ios-menu" 
            size={25}
            backgroundColor="#694fad" 
            onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        )
    }}/> 
</TranslateNumStack.Navigator>
);

const MultiplicatorStackScreen = ({navigation}) =>(
<MultiplicatorStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#d02860'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold' }
}}>
    <MultiplicatorStack.Screen name="Multiplicador" component={MultiplicatorScreen} options=
    {{
        headerLeft: () => (
        <Icon.Button 
            name="ios-menu" 
            size={25}
            backgroundColor="#d02860" 
            onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        )
    }}/> 
</MultiplicatorStack.Navigator>
);

const YoutubeStackScreen = ({navigation}) =>(
<YoutubeStack.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#FF0000'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold' }
}}>
    <YoutubeStack.Screen name="React Native" component={YoutubeScreen} options=
    {{
        headerLeft: () => (
        <Icon.Button 
            name="ios-menu" 
            size={25}
            backgroundColor="#FF0000" 
            onPress={() => {navigation.openDrawer()}}
        ></Icon.Button>
        )
    }}/> 
</YoutubeStack.Navigator>
);

// Funcion principal del cuerpo para la vista Main: la que se exporta
const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <Icon name='ios-home' color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Calculator"
            component={CalculatorStackScreen}
            options={{
                tabBarLabel: 'Sumadora',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                    <Icon name='ios-calculator' color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="TranslateNum"
            component={TranslateNumStackScreen}
            options={{
                tabBarLabel: 'Traductor',
                tabBarColor: '#694fad',
                tabBarIcon: ({color}) => (
                    <IconF name='translate' color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Multiplicator"
            component={MultiplicatorStackScreen}
            options={{
                tabBarLabel: 'Multiplicador',
                tabBarColor: '#d02860',
                tabBarIcon: ({color}) => (
                    <Icon name='ios-calculator-outline' color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="React Native"
            component={YoutubeStackScreen}
            options={{
                tabBarLabel: 'YouTube',
                tabBarColor: '#FF0000',
                tabBarIcon: ({color}) => (
                    <Icon name='ios-logo-youtube' color={color} size={26}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;