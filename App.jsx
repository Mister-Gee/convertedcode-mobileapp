import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {TouchableWithoutFeedback, Keyboard } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles/global';
import getFont from './constants/getFont';
import Navigator from './routes/drawer';
import Onboard from './screens/Onboard/Onboard';
import { useState } from '@hookstate/core';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import { getReturnTokenFromStorage } from './utils/Functions';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = React.useState(false)
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [reRender, setRerender] = React.useState(false)

  const {user} = useState(store)
  const {isLoggedIn} = useState(store)

  useEffect(() => {
    const initLoad = async () => {
      const returnToken = await getReturnTokenFromStorage()
      if(returnToken){
        const decoded = jwt_decode(returnToken)
        user.set(decoded[0])
        // setIsLoggedIn(true)
        isLoggedIn.set(true)
      }
      else if(user.get() !== null ){
        // setIsLoggedIn(true)
        isLoggedIn.set(true)
      }
      else{
        // setIsLoggedIn(false)
        isLoggedIn.set(true)
      }
    }
    initLoad()
  },[reRender])

  if(isAppLoaded){
    return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.container}>
        {isLoggedIn.get()
        ?
        <>
        <Navigator 
          setReRender = {setRerender}
        />
        <StatusBar 
          backgroundColor="#FFFFFF"
          style="auto" 
          animated={true}
        />
        </>
        :
        <Onboard 
          setRerender = {setRerender}
        />
        }
      </SafeAreaView>
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

