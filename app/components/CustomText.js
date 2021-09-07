//import liraries
import React from 'react';
import {StyleSheet, Text} from 'react-native';

// create a component
const CustomText = ({ children ,size=16, font='gilroy_light', maxLines=2, style}) => {
    return  <Text 
                numberOfLines={maxLines} 
                style={[{fontFamily:`${font}`, fontSize:size}, style]}>
                    {children}
            </Text>
  
};

export default CustomText;
