//import liraries
import React  from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import { HeaderBackground } from 'react-navigation-stack';
import TopButton from '../components/TopButton'

const Stack = createNativeStackNavigator()

// create a component
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerTransparent: true,
                headerShadowVisible: false,
                headerTintColor:'white',
                headerTitle:'',
               
                   }
        }>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
                
          headerTitle: '',
          headerRight: () => (
            <TopButton imageName="favorite" /> 
          ),
        //   headerLeft: () => (
        //     <TopButton imageName="arrow-back" /> 
        //   )
        }}/>
        
       
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
   
});

//make this component available to the app
export default AppNavigator;
