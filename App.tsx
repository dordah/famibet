import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [outputText, setOutputText] = useState(`It's working motherfucker`);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //   <View>
      //     <Text>{outputText}</Text>
      //     <Button
      //       title='Change Text'
      //       onPress={() => setOutputText('The text changed')}
      //     />
      // </View>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
