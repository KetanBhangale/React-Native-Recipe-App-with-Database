import { openDatabase } from 'react-native-sqlite-storage';

const database = openDatabase({
    name: 'RecipeDB',
})

const addMealData = async (mealList, category) => {
    console.log("mealList length=", mealList.length)
    // console.log(" mealList record=", mealList[1])

    let query = "INSERT OR REPLACE INTO MEALSBYCATEGORY (idMeal, strCategory, strMeal, strMealThumb) VALUES";
    for (let i = 0; i < mealList.length; ++i) {
        query = query + "('"
            + mealList[i].idMeal //id
            + "','"
            + category//category
            + "','"
            + mealList[i].strMeal //desc
            + "','"
            + mealList[i].strMealThumb //image url
            + "')";
        if (i != mealList.length - 1) {
            query = query + ",";
        }
    }
    query = query + ";";
    // console.log(query);

    await database.transaction(txn => {
        txn.executeSql(query,
            [],
            () => {
                console.log("Data added successfully in MEALSBYCATEGORY ")
                return true
            },
            error => {
                console.log("Error while adding data MEALSBYCATEGORY", error.message)
                return false
            }
        )
    })
}

const getMealDataIfExists = async (category) => {

    await database.transaction(txn => {
        txn.executeSql(
            'select * from MEALSBYCATEGORY where strCategory=\'Beef\'',
            [],
            (txn, res) => {
                console.log("meal data read successful")
                let len = res.rows.length
                console.log("meal length=", len)
                if (len > 0) {
                    let result = []

                    for (let i = 0; i < len; i++) {
                        let item = res.rows.item(i)
                        result.push({ idMeal: item.idMeal, strCategory: item.strCategory, strMeal: item.strMeal, strMealThumb: item.strMealThumb })
                    }
                    return result
                } else {
                    console.log("error in getMealDataIfExists")
                    return ''

                }
            },
            error => {
                console.log("unable to read getMealDataIfExists")

            }
        )
    })
}

const testFun = () => {
    const response = true;
    return response;
}
const getMealDataIfExists1 = async (category) => {
    console.log("category1=", category)

    await database.transaction(txn => {
        txn.executeSql(
            'select * from MEALSBYCATEGORY where strCategory=\'Beef\'',
            [],
            (txn, res) => {
                console.log("meal data read successful")
                let len = res.rows.length
                console.log("meal length=", len)
                return len
                // if (len > 0) {
                //     respnse = true
                // } else {
                //     console.log("error in getMealDataIfExists")
                //     respnse = false

                // }
            },
            error => {
                console.log("unable to read getMealDataIfExists")
                return 0

            }
        )
    })

}

export default {

    addMealData,
    getMealDataIfExists,
    getMealDataIfExists1,
    testFun,
}