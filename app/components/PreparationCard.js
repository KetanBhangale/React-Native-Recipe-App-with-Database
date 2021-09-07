//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomText from './CustomText';
import ImageText from './ImageText';

// create a component
const PreparationCard = () => {
    return (
        <View style={styles.container}>
            <CustomText size={20} font='gilroy_bold' style={styles.customText}> Recipe Name</CustomText>
            <View style={styles.innerContainer}>
            <ImageText imageName="clock-time-four-outline" text="30 mins"/>
            <ImageText imageName="alert-circle-outline" text="300 cals"/>
            <ImageText imageName="account-supervisor-outline" text="3 Persons"/>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       marginTop:20,
       marginLeft:30,
       marginRight:30,
       padding:15,
        borderRadius:10,
        borderColor:"gray",
        borderWidth:1,
        shadowColor:'gray',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset:{
            width:0,
            height:2
        }
       
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    customText:{
        marginBottom:10,
    }
});

//make this component available to the app
export default PreparationCard;
