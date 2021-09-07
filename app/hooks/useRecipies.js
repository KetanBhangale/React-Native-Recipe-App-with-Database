import React, { useEffect, useState } from 'react'
import recipeAPI from '../network/RecipeAPIs'
import { openDatabase } from 'react-native-sqlite-storage';
export default useRecipies = () => {
    const [mainCategoies, setMainCategories] = useState([])
    const [categoryAvailable, setCategoryAvailable] = useState(false)
    const [loading, setLoading] = useState(false)
    const database = openDatabase({
        name: 'RecipeDB',
    })


    const getRecipeCategories = async () => {
        setLoading(true)
        const response = await recipeAPI.getAllCategories()
        await addCategories(response)

    }

    const checkCategoryData = async () => {

        await database.transaction(txn => {
            txn.executeSql(
                'select idCategory from RECIPE_CATEGORIES',
                [],
                (txn, res) => {
                    console.log("records exist=", res.rows.length)
                    if (res.rows.length > 0) {
                        setCategoryAvailable(true)
                    }
                    else {
                        setCategoryAvailable(false)
                    }
                },
                error => {
                    console.log("error in checkCategoryData")
                }
            )
        })
    }
    // const closeDB = async () => {
    //     await database.close()
    // }

    const getCategoriesIfExists = async () => {
        setLoading(true)
        await database.transaction(txn => {
            txn.executeSql(
                'select * from RECIPE_CATEGORIES',
                [],
                (txn, res) => {
                    console.log("categories read successful")
                    let len = res.rows.length
                    console.log("length=", len)
                    if (len > 0) {
                        let result = []

                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i)
                            result.push({ idCategory: item.idCategory, strCategory: item.strCategory, strCategoryDescription: item.strCategoryDescription, strCategoryThumb: item.strCategoryThumb })
                        }
                        setMainCategories(result)
                        setCategoryAvailable(true)
                        setLoading(false)
                    } else {
                        setCategoryAvailable(false)
                    }
                },
                error => {
                    console.log("unable to read categories")
                    setCategoryAvailable(false)
                }
            )
        })
    }
    const createTables = async () => {
        await database.transaction(txn => {
            txn.executeSql(
                'CREATE TABLE IF  NOT EXISTS RECIPE_CATEGORIES(idCategory INTEGER PRIMARY KEY, strCategory VARCHAR(20), strCategoryDescription VARCHAR(1000), strCategoryThumb VARCHAR(20))'
                ,
                [],
                () => {
                    console.log(" RECIPE_CATEGORIES = Tables created successfully")
                },
                error => {
                    console.log("RECIPE_CATEGORIES = Error while creating tables")
                }
            )
            txn.executeSql(
                'CREATE TABLE IF  NOT EXISTS MEALSBYCATEGORY(idMeal INTEGER PRIMARY KEY, strCategory VARCHAR(20), strMeal VARCHAR(40), strMealThumb VARCHAR(20))'
                ,
                [],
                () => {
                    console.log("MEALSBYCATEGORY = Tables created successfully")
                },
                error => {
                    console.log("MEALSBYCATEGORY = Error while creating tables")
                }
            )
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS MEAL_DETAILS(idMeal INTEGER PRIMARY KEY, strCategory VARCHAR(20),strMeal VARCHAR(40), strMealThumb VARCHAR(20), strYoutube VARCHAR(20), strInstructions VARCHAR(3000), strIngredient VARCHAR(600))'
                ,
                [],
                () => {
                    console.log("MEAL_DETAILS = Tables created successfully")
                },
                error => {
                    console.log("MEAL_DETAILS = Error while creating tables")
                }
            )
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS FAVORITE(idMeal INTEGER PRIMARY KEY, isFvorite BOOLEAN)'
                ,
                [],
                () => {
                    console.log("FAVORITE = Tables created successfully")
                },
                error => {
                    console.log("FAVORITE = Error while creating tables")
                }
            )
        })

    }
    const addCategories = async (mainCategoies) => {
        console.log("length=", mainCategoies.length)
        console.log("record=", mainCategoies[1])
        let query = "INSERT OR REPLACE INTO RECIPE_CATEGORIES (idCategory, strCategory, strCategoryDescription, strCategoryThumb) VALUES";
        for (let i = 0; i < mainCategoies.length; ++i) {
            query = query + "('"
                + mainCategoies[i].idCategory //id
                + "','"
                + mainCategoies[i].strCategory //category
                + "','"
                + mainCategoies[i].strCategoryDescription.replace("don't", "dont") //desc
                + "','"
                + mainCategoies[i].strCategoryThumb //image url
                + "')";
            if (i != mainCategoies.length - 1) {
                query = query + ",";
            }
        }
        query = query + ";";
        //console.log(query);

        await database.transaction(txn => {
            txn.executeSql(query,
                [],
                () => {
                    console.log("Data added successfully")
                    getCategories()
                },
                error => {
                    console.log("Error while adding data", error.message)
                }
            )
        })
    }

    const getCategories = async () => {

        await database.transaction(txn => {
            txn.executeSql(
                'select * from RECIPE_CATEGORIES',
                [],
                (txn, res) => {
                    console.log("categories read successful")
                    let len = res.rows.length
                    console.log("length=", len)
                    if (len > 0) {
                        let result = []

                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i)
                            result.push({ idCategory: item.idCategory, strCategory: item.strCategory, strCategoryDescription: item.strCategoryDescription, strCategoryThumb: item.strCategoryThumb })
                        }
                        setMainCategories(result)
                        setLoading(false)
                    }
                },
                error => {
                    console.log("unable to read categories")
                }
            )
        })
    }




    useEffect(() => {

        getCategoriesIfExists()
        if (categoryAvailable) {
            createTables()
            getRecipeCategories()
        } else {
            createTables()
            getRecipeCategories()
        }
        //closeDB()

    }, [])

    return [
        mainCategoies,
        loading

    ]

}

