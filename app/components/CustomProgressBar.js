//import liraries
import React from 'react';
import {ActivityIndicator} from 'react-native'
// create a component
const CustomProgressBar =({visibility})=> {

    if(!visibility){
        return null
    }
    
    return <ActivityIndicator size='large' color="blue"/>

}

//make this component available to the app
export default CustomProgressBar;
