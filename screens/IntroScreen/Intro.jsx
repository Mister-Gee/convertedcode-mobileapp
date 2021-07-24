import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/global';
import { StatusBar } from 'expo-status-bar';

const Intro = () => {
    return (
        <>
            <ImageBackground 
                style={styles.introImage} 
                source={require("../../assets/images/convert-background.jpg")} 
                resizeMode="cover"
            >
                <View style={styles.introHeader}>
                    <Image 
                        style={styles.logo}
                        source={require("../../assets/images/intro-logo.png")}
                        resizeMode="contain"
                    />
                    <Text style={styles.introHeaderText}>Welcome to <Text style={styles.converted}>Converted</Text><Text style={styles.code}>Code</Text></Text>
                </View>
                <View style={styles.introBtns}>
                    <TouchableOpacity>
                        <Text style={styles.signIn}> Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.signUp}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar 
                style="light" 
                animated={true}
            />
        </>
    )
}

export default Intro

