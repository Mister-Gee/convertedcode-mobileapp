import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles/global';
import Intro from './screens/IntroScreen/Intro';

export default function App() {

  const getFont = () => Font.loadAsync({
    'inter-regular': require("./assets/fonts/Inter-Regular.ttf"),
    'inter-bold': require("./assets/fonts/Inter-Bold.ttf"),
    'inter-black': require("./assets/fonts/Inter-Black.ttf"),
    'inter-light': require("./assets/fonts/Inter-Light.ttf"),
    'inter-medium': require("./assets/fonts/Inter-Medium.ttf")
  })

  const [isAppLoaded, setIsAppLoaded] = useState(false)

  if(isAppLoaded){
    return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app! yevs</Text> */}
        <Intro />
        <StatusBar 
          style="light" 
          animated={true}
        />
      </View>
    </TouchableWithoutFeedback>
  );
  }
  else{
    return(
      <AppLoading
        startAsync={getFont}
        onFinish={() => setIsAppLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

