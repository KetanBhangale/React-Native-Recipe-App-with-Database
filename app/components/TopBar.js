//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopButton from '../components/TopButton'

// create a component
const TopBar = () => {
    return (
        <>
        <View style={styles.containe2}>
        <View style={styles.container}>
           
       
        </View>
         <View style={styles.container1}>
   
         
     </View>
     </View>
     </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:50,
        height:50,
        backgroundColor:'yellow',
        // justifyContent: "flex-start",
        // alignItems: 'flex-start',
       
       
        
        
    },
    container1: {
        width:50,
        height:50,
        backgroundColor:'red',
        // justifyContent: "flex-end",
        // alignItems: 'flex-end',
       
        
        
    },
    container2: {
     flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    backButton:{
        
    },
    favButton:{

    }
});

//make this component available to the app
export default TopBar;
