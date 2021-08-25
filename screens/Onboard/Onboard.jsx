import React, {useRef} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../../styles/global';
import BottomSheet from 'react-native-simple-bottom-sheet';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import { StatusBar } from 'expo-status-bar';
import AnimatedLoader from "react-native-animated-loader";

const Onboard = ({setRerender}) => {
    const panelRef = useRef(null);

    const [isLogin, setIsLogin] = React.useState(true)
    const [authDrawer, setAuthDrawer] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleLoginBtnPress = () => {
        setIsLogin(true)
        panelRef.current.togglePanel()
        setAuthDrawer(true)
    }

    const handleSignUpBtnPress = () => {
        setIsLogin(false)
        panelRef.current.togglePanel()
        setAuthDrawer(true)
    }

    const login = () => {
        setIsLogin(true)
    }

    const signup = () => {
        setIsLogin(false)
    }

    const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../assets/images/onboard1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../assets/images/onboard2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../assets/images/onboard3.png'),
        backgroundColor: '#22bcb5',
    }
    ]

    const _renderItem = ({ item }) => {
        return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage}/>
            <Text style={styles.slideTitle}>{item.title}</Text>
            <Text style={styles.slideText}>{item.text}</Text>
            {item.key === "three" && 
            <View style={styles.slideAuth}>  
                <TouchableOpacity 
                    style={styles.slideSignUp}
                    onPress={handleSignUpBtnPress}
                >
                    <Text style={styles.slideSignUpText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.slideLogIn}
                    onPress={handleLoginBtnPress}
                >
                    <Text style={styles.slideLogInText}>Log In</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
        );
    }

    const renderNextButton = () => <Text style={styles.slideNextBtn}>Next</Text>
    const renderPrevButton = () => <Text style={styles.slidePrevBtn}>Prev</Text>

    return (
        <>
        <AnimatedLoader
            visible={isLoading}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../../assets/loaders/loader2.json")}
            animationStyle={styles.lottie}
            speed={1.5}
        />
        <AppIntroSlider 
            renderItem={_renderItem} 
            data={slides}
            dotStyle={styles.slideDot}
            activeDotStyle={styles.slideActiveDot}
            showPrevButton={true}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
        />
         <BottomSheet 
            isOpen={authDrawer}
            ref={ref => panelRef.current = ref}
            sliderMinHeight={0}
            sliderMaxHeight={500}
            animationDuration={500}
        >
            {(onScrollEndDrag) => (
            <ScrollView onScrollEndDrag={onScrollEndDrag}>
                {isLogin ? 
                <LoginForm 
                    signup={signup}
                    close={handleLoginBtnPress}
                    setLoading={setIsLoading}
                    setRerender = {setRerender}
                /> 
                : 
                <SignupForm 
                    close={handleSignUpBtnPress}
                    login={login}
                    setLoading={setIsLoading}
                    setRerender = {setRerender}
                />}
            </ScrollView>
            )}
        </BottomSheet>
        <StatusBar 
          backgroundColor="#FFFFFF"
          style="auto" 
          animated={true}
        />
        </>
    )
}

export default Onboard
