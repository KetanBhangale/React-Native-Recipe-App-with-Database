//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
// create a component
const TopButton = ({imageName, style, style1}) => {
    return (
        <View style={[styles.container1,style1]}>
        <View style={[styles.container, style]}>
            <Icon name={imageName} size={30} color="white" />
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container1: {
        width:100,
        height:120,
        borderRadius:10,
        marginTop:20,
        position:'absolute',
       
    },
    container: {
        width:50,
        height:50,
        borderRadius:10,
        marginTop:40,
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
       

    },
    
});

//make this component available to the app
export default TopButton;
