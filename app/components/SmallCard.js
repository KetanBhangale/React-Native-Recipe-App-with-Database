//import liraries
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import CustomText from './CustomText';


 const{width} = Dimensions.get('window')
// create a component
const SmallCard = ({item, onPress}) => {
   
    return (
        <>
      
        <TouchableWithoutFeedback onPress={onPress}>
            
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <Image style={styles.image} source={{uri: item.strCategoryThumb}}></Image> 
            </View>
            <View style={styles.content}>
            <CustomText size={20} font='gilroy_bold' maxLines={2} style={styles.customText1}>{item.strCategory}</CustomText>
            <CustomText size={14} font='gilroy_light' maxLines={4} style={styles.customText2}>{item.strCategoryDescription}</CustomText>
                </View>
        </View>
        </TouchableWithoutFeedback>
        {}
           </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width/2 -20,
        height:220,
        borderRadius:50,
        backgroundColor: '#a5d6a7',
        margin:10,
       
        
    },
    innerContainer: {
       flexDirection:'column-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',   
      
    },
    content: {
        flex:1,
        flexDirection:'column',
         justifyContent: "flex-end",
         alignItems: 'flex-start',  
          
     },
    image:{
        width:80,
        height:80,
        borderRadius:10,
       marginTop: -10,
       marginRight:-15
    
    },
    customText1:{
        marginTop:30, 
        padding:10
    },
    customText2:{
        width:'100%',
        padding:5, 
        backgroundColor:'white', 
        borderRadius:7,

    }
});

//make this component available to the app
export default SmallCard;
