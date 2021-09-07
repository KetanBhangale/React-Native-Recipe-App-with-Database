//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BigCard from './app/components/BigCard';

import CustomText from './app/components/CustomText'
import DetailCard from './app/components/DetailCard';
import HorizontalList from './app/components/HorizontalList';
import ImageText from './app/components/ImageText';
import PreparationCard from './app/components/PreparationCard';
import SmallCard from './app/components/SmallCard';
import TopButton from './app/components/TopButton';
import DetailScreen from './app/screens/DetailScreen';
import Home from './app/screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator';
import CustomProgressBar from './app/components/CustomProgressBar';
import CustomProgressBar2 from './app/components/CustomProgressBar2';
import TopBar from './app/components/TopBar';

// create a component
class App extends Component {

  componentDidMount(){
    SplashScreen.hide()
  }
  render() {
    return (
      // <View style={styles.container}>
      //   {/* <SmallCard/> */}
      //   {/* <BigCard/> */}
      //   {/* <HorizontalList/> */}
      //   {/* <PreparationCard/> */}
      //   {/* <DetailCard title="Ingredients" style={{backgroundColor:"white"}} maxLines={8}/>
      //   <DetailCard title="Instructions" style={{backgroundColor:"#F6DEDE"}} maxLines={12}/> */}
      //   {/* <TopButton imageName="arrow-back"/>
      //   <TopButton imageName="favorite-border"/>
      //   <TopButton imageName="favorite"/> */}
      //   {/* <Home/> */}
      //   {/* <DetailScreen/> */}
        
      // </View>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      // <CustomProgressBar2 visibilty={true}/>
      //<TopBar/>
     
    );
  }
}



//make this component available to the app
export default App;
