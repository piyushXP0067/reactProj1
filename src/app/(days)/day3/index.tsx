import { View, Text, Button } from 'react-native';
import React from 'react';
import { ScreenStack } from 'react-native-screens';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
        <Stack.Screen options={{title: 'day3: Markdown'}} />
      <Text>Day Details Screen</Text>
      <Link href={'/day3/editor'} asChild>
      <Button title='Go to Markdown'/>
      </Link>
    </View>
  );
};

export default DayDetailsScreen; 