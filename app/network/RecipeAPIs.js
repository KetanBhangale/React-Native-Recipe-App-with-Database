import apiClient from './Service'
import databaseFunction from '../hooks/DatabaseFunctions'

const getAllCategories = async () => {

    try {
        const resp = await apiClient.get('categories.php')
        const response = await resp.data.categories
        return response
    } catch (error) {
        console.log(error)
        return []
    }

}
const testFun = () => {
    const response = true;
    return response;
}
const getMealByCategory = async (category) => {
    try {
        console.log("category", category)
        const resp = await apiClient.get(`filter.php?i=${category}`)
        const response = await resp.data.meals
        const addDataInDB = await databaseFunction.addMealData(response, category)
    } catch (error) {
        console.log(error)

    }
}



const getMealDetails = async (mealId) => {
    try {
        const resp = await apiClient.get(`lookup.php?i=${mealId}`)
        const response = await resp.data.meals[0]
        return response
    } catch (error) {
        console.log(error)
        return ""
    }
}





export default {
    getAllCategories,
    getMealByCategory,
    getMealDetails,
    testFun
}