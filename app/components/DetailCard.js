//import liraries
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CustomText from './CustomText';
import TopButton from './TopButton';

const {width} = Dimensions.get('window')
// create a component
const DetailCard = ({title, data, style, maxLines}) => {
    return (
        <>
        <View style={styles.container}>
              <CustomText size={20} font='gilroy_bold' maxLines={2} style={styles.customText1}>{title}</CustomText>
              </View>
              <View style={[styles.innerContainer,style]}>
              <CustomText size={14} maxLines={maxLines} style={styles.customText2}>{data}</CustomText>
              </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {    
        width:width,
        backgroundColor: 'white',
        marginTop:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    },
    innerContainer: {
        width:width-20,  
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        margin:0,
        backgroundColor: 'white',
        marginTop:-10,
        marginLeft:10,
    },
    customText1:{
        marginBottom:10,
    },
    customText2:{
       padding:10,
    }
});

//make this component available to the app
export default DetailCard;
