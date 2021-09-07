//import liraries
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';

 const{width} = Dimensions.get('window')
// create a component
const BigCard = ({item, onPress}) => {
    return (
        <>
         <TouchableWithoutFeedback onPress = {onPress}>
        <View >
       
            <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.strMealThumb}}></Image> 
            </View>
            <View style={styles.innerContainer}>
            <CustomText size={18} font='gilroy_bold' maxLines={2} style={styles.customText1}>{item.strMeal}</CustomText>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
           </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width/2,
        height:220,
        borderRadius:10,
        backgroundColor: '#a5d6a7',
        marginLeft:10,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    innerContainer: {
        width:width/2,
        
        borderRadius:10,
        backgroundColor: 'white',
        marginLeft:10,
        marginTop:-10,     
    },
    image:{
        width:width/2,
        height: 220,     
       borderRadius:10,
    
    },
    customText1:{
        height:70,
        padding:10
    },
   
});

//make this component available to the app
export default BigCard;
