//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

// create a component
const CustomSearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Search here...."/>
            <View style={styles.icon}>
            <Icon name="search-outline" size={30}/>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'95%',
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
        
    },
    textInput:{
        flex:0.8,
        fontFamily:'gilroy_light',
        fontSize:14,
        padding:10,
    },
    icon:{
        flex:0.2,  
        alignItems:'center',
        justifyContent:'flex-end'
    }
});

//make this component available to the app
export default CustomSearchBar;
