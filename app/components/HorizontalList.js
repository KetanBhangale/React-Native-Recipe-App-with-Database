//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableWithoutFeedback, ActivityIndicator, Dimensions } from 'react-native';
import BigCard from './BigCard';
import SmallCard from './SmallCard';
import { useNavigation } from '@react-navigation/native'
import recipeAPI from '../network/RecipeAPIs'
import CustomText from './CustomText';
import CustomProgressBar2 from '../components/CustomProgressBar2'
import CustomProgressBar from './CustomProgressBar';
import { openDatabase } from 'react-native-sqlite-storage';

const database = openDatabase({
    name: 'RecipeDB',
})

const { height } = Dimensions.get('window')
// create a component
const HorizontalList = ({ data }) => {
    const navigation = useNavigation()
    const [mealList, setMealList] = useState([])
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)


    const getMealListByCategory = (category) => {
        setLoading(true)
        getMealListByCategoryFromAPI(category)
        getMealDataFromDBIfExists(category)
        setLoading(false)

    }

    const getMealListByCategoryFromAPI = async (category) => {
        setLoading(true)
        setCategory(category)
        await recipeAPI.getMealByCategory(category)

    }

    const getMealDataFromDBIfExists = async (category) => {
        console.log("category123", category)
        await database.transaction(txn => {
            txn.executeSql(
                'select * from MEALSBYCATEGORY where strCategory=\'' + category + '\'',
                [],
                (txn, res) => {
                    console.log("meal data read successful")
                    let len = res.rows.length
                    //console.log("meal length=", len)
                    if (len >= 0) {
                        let result = []

                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i)
                            result.push({ idMeal: item.idMeal, strCategory: item.strCategory, strMeal: item.strMeal, strMealThumb: item.strMealThumb })
                        }
                        setMealList(result)
                        //return result
                    } else {
                        console.log("error in getMealDataIfExists")
                        setMealList([])
                        setCategory('No Data Found')
                        //return ''

                    }
                },
                error => {
                    console.log("unable to read getMealDataIfExists")
                    setMealList([])
                    setCategory('No Data Found')
                    //setMealList([])

                }
            )
        })
    }

    useEffect(() => {
        // getMealDataFromDBIfExists('Beef')
        // getMealListByCategoryFromAPI('Beef')
        getMealListByCategory('Beef')
    }, [])

    return (
        <>
            <CustomProgressBar2 visibilty={loading} />
            <View style={styles.container}>

                <FlatList data={data} keyExtractor={item => item.idCategory} horizontal showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SmallCard onPress={() => getMealListByCategory(item.strCategory)} item={item} />
                    }>
                </FlatList>
            </View>


            {/* <View style={styles.container1}> */}

            {/* <CustomProgressBar visibility={loading} style={styles.indicator}/> */}
            <View style={styles.container}>
                <CustomText font="gilroy_bold" size={25} style={styles.nameText}>{category}</CustomText>
                <FlatList data={mealList} keyExtractor={item => item.idMeal} horizontal showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <BigCard item={item} onPress={() => navigation.navigate('DetailScreen', item.idMeal)} />
                    }
                ></FlatList>
            </View>
            {/* </View> */}



        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 5,

    },
    container1: {
        width: '100%',
        height: height / 2 - 20,

    },
    nameText: {
        margin: 10,
    },
    indicator: {
        width: '100%',
        height: height / 2 - 100,
        zIndex: 1,
    },
});

//make this component available to the app
export default HorizontalList;
