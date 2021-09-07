//import liraries
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import useRecipies from './useRecipies';

export default useDatabase = () => {
    const [mainCategoies1, setMainCategories1] = useState([])
    const database = openDatabase({
        name: 'RecipeDB',
    })
    // const [
    //     mainCategoies,

    // ] = useRecipies()


    const createTables = async () => {
        await database.transaction(txn => {
            txn.executeSql(
                'CREATE TABLE IF  NOT EXISTS RECIPE_CATEGORIES(ID INTEGER, CATEGORY VARCHAR(20), DESCRIPTION VARCHAR(40), IMAGE_URL VARCHAR(20))'
                ,
                [],
                () => {
                    console.log("Tables created successfully")
                },
                error => {
                    console.log("Error while creating tables")
                }
            )
        })
    }

    const addCategories = async () => {

        let query = "INSERT INTO RECIPE_CATEGORIES (ID, CATEGORY, DESCRIPTION, IMAGE_URL) VALUES";
        for (let i = 0; i < mainCategoies.length; ++i) {
            query = query + "('"
                + mainCategoies[i].id //id
                + "','"
                + mainCategoies[i].first_name //category
                + "','"
                + mainCategoies[i].last_name //desc
                + "','"
                + mainCategoies[i].is_deleted //image url
                + "')";
            if (i != mainCategoies.length - 1) {
                query = query + ",";
            }
        }
        query = query + ";";
        console.log(query);

        await database.transaction(txn => {
            txn.executeSql(query,
                [],
                () => {
                    console.log("Data added successfully")
                },
                error => {
                    console.log("Error while adding data")
                }
            )
        })
    }

    useEffect(async () => {
        await useRecipies.getRecipeCategories()
        await createTables()
        await addCategories()
    }, [])

    return [
        mainCategoies1
    ]

};



// 'CREATE TABLE IF  NOT EXISTS MEALSBYCATEGORY(MEAL_ID INTEGER, CATEGORY VARCHAR(20), DISH_NAME VARCHAR(40), IMAGE_URL VARCHAR(20))' +
// 'CREATE TABLE IF NOT EXISTS MEAL_DETAILS(MEAL_ID INTEGER,CATEGORY VARCHAR(20),DISH_NAME VARCHAR(40), IMAGE_URL VARCHAR(20), LINK VARCHAR(20), INSTRUCTIONS VARCHAR(40), INGREDIENTS VARCHAR(40))' +
// 'CREATE TABLE IF NOT EXISTS FAVORITE(MEAL_ID INTEGER, ISFAVORITE BOOLEAN)'