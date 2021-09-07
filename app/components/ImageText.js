//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomText from './CustomText';

// create a component
const ImageText = ({imageName, text}) => {
    
    return (
        <View style={styles.container}>
           <Icon name={imageName} size={30} />
           <CustomText style={styles.customText}>{text}</CustomText>
        </View>
    );
};

//clock-time-four-outline
// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    customText:{
        marginLeft:3,
        marginRight:5,
        overflow:'hidden'
    }
});

//make this component available to the app
export default ImageText;
