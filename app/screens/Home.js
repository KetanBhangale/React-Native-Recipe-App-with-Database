//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomText from '../components/CustomText';
import HorizontalList from '../components/HorizontalList';
import CustomSearchBar from '../components/CustomSearchBar';
import useRecipies from '../hooks/useRecipies'
import CustomProgressBar2 from '../components/CustomProgressBar2';
import RecipeAPIs from '../network/RecipeAPIs';

const { width, height } = Dimensions.get('window')

// create a component
const Home = () => {
    const [
        mainCategoies,
        loading
    ] = useRecipies()

    return (
        <>
            <CustomProgressBar2 visibility={loading} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                <CustomText font="gilroy_bold" size={25} style={styles.recipeText}>All Recipies</CustomText>
                <CustomSearchBar />
                <HorizontalList data={mainCategoies} />
                {/* <HorizontalList /> */}
            </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,

        backgroundColor: '#E3E0E0',
    },
    recipeText: {
        padding: 15,
    },

});

//make this component available to the app
export default Home;
