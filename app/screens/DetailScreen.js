//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Button,Linking} from 'react-native';
import DetailCard from '../components/DetailCard';
import PreparationCard from '../components/PreparationCard';
import TopButton from '../components/TopButton';
import recipeAPI from '../network/RecipeAPIs'
import CustomProgressBar from '../components/CustomProgressBar'
import CustomProgressBar2 from '../components/CustomProgressBar2';

const {width, height} = Dimensions.get('window')

// create a component
const DetailScreen = (props) => {
    console.log("props=",props.route.params)
    const mealId = props.route.params
    const[mealDetails, setMealDetails] = useState("")
    const[ingredients, setIngredients] = useState("")
    const[loading, setLoading] = useState(false)
    const getMealDetails=async(mealId)=>{
        setLoading(true)
        const response = await recipeAPI.getMealDetails(mealId)
        const ingredients = `${response.strIngredient1} \n`+`${response.strIngredient2} \n`+`${response.strIngredient3} \n`
                        +`${response.strIngredient4} \n`+`${response.strIngredient5} \n`+`${response.strIngredient6} \n`
                        +`${response.strIngredient7} \n`+`${response.strIngredient8} \n`+`${response.strIngredient9}\n`
                        +`${response.strIngredient10}`
        setMealDetails(response)
        setIngredients(ingredients)
        setLoading(false)
    }

   

    useEffect(()=>{
        getMealDetails(mealId)
    },[])
    
    return (
        <>
        <CustomProgressBar2 visibility={loading}/>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            
            <Image source={{uri: mealDetails.strMealThumb}} style={styles.image}/>
           
            <PreparationCard/>
            <DetailCard title="Ingredients"  data={ingredients} maxLines={20} style={styles.detailCard1}/>
            <DetailCard title="Instructions" data={mealDetails.strInstructions} maxLines={50} style={styles.detailCard2}/>
            <View style={styles.btnView}>
            {
                    mealDetails.strYoutube!=="" || mealDetails.strYoutube!==null ?
                     <Button title="You Tube" color="#C64141" onPress={()=>{Linking.openURL(mealDetails.strYoutube)}}/> 
                    :
                    console.log("error")
                    
                }
           
            
            </View>
        </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:width,
        height:height,
        backgroundColor: 'white',
    },
    image: {
        width:"100%",
        height: height/2 - 70,
        borderRadius:20,
        marginTop:-10,

    },
    detailCard1:{
        backgroundColor:"#e8f5e9",
        marginRight:10,
        
    },
    detailCard2:{
        backgroundColor:"#e8f5e9",
        
    },
    btnView:{
        margin:10,
        marginBottom:20,
        padding:10,
    },
    
});

//make this component available to the app
export default DetailScreen;
