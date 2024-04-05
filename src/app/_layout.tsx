import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
import { useEffect } from 'react';
import {AmaticSC_400Regular,AmaticSC_700Bold}from '@expo-google-fonts/amatic-sc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function rootlayout(){
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ title: 'DEVember' }} />
      </Stack>
    </GestureHandlerRootView>

  );
}


