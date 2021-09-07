//import liraries
import React, { Component } from 'react';
import{View, StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native';
// create a component
const CustomProgressBar2 =({visibility})=> {

    if(!visibility){
        return null
    }
    
    return(
        <View style={styles.container}>
            <LottieView source={require('../../assets/progressbar2.json')} autoPlay loop/>
        </View>
    ) 
    

}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1
    },
    
});
//make this component available to the app
export default CustomProgressBar2;
