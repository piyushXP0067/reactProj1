import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, ActivityIndicator} from 'react-native';
import DayListItem from '../components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {AmaticSC_400Regular,AmaticSC_700Bold}from '@expo-google-fonts/amatic-sc';

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
 const [fontsLoaded, fontError] = useFonts(
    {
      Inter: Inter_900Black,
      amatic: AmaticSC_400Regular,
      amaticBold: AmaticSC_700Bold,
    }
  );

useEffect(() => {
  if (fontsLoaded || fontError){
     SplashScreen.hideAsync();
  }
},[fontsLoaded, fontError]);

if (!fontsLoaded && !fontError){
  return null;
}



  return (
    <View style={styles.container}>
<FlatList
data={days}
numColumns={2}
contentContainerStyle = {styles.content}
columnWrapperStyle = {styles.column}
renderItem={({ item }) => <DayListItem day={item} />}
/>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
  content:{
    // backgroundColor: 'red',
    gap: 10,
    padding:10,
  },
  column:{
    gap: 10 
  },
  box: {
    backgroundColor: '#f9ede3',
    // width:100,
    // height:100,
    flex:1,
    aspectRatio:1,
    borderRadius:20,
    justifyContent: 'center',
    alignItems : 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',


  },
  text:{
    color:'#9b4521',
    fontSize: 70,
    fontFamily: 'amaticBold'
  }
});
