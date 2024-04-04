import { View, Text } from 'react-native';
import React from 'react';
import { ScreenStack } from 'react-native-screens';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
        <Stack.Screen options={{title: 'day2'}} />
      <Text>Day Details Screen</Text>
    </View>
  );
};

export default DayDetailsScreen;