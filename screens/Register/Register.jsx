import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/global';

const Register = ({navigation}) => {
    const shii = navigation.getParam('title')
    return (
        <>
            <View style={styles.authHeader}>
                <Text style={styles.authHeaderText}>New Account - {shii}</Text>
                <Text style={styles.authHeaderSubText}>Fill in your details below</Text>
            </View>
            <View style={styles.authFormContainer}>
                <View style={styles.authInputField}>
                    <FontAwesome 
                        name="user" 
                        size={20} 
                        color="#2F970C" 
                        style={styles.authIcon}
                    />
                    <TextInput
                        placeholder="Name"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="name"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={false}

                    />
                </View>
                <View style={styles.authInputField}>
                    <MaterialIcons 
                        name="email" 
                        size={20} 
                        color="#2F970C" 
                        style={styles.authIcon}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="email"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={false}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.authInputField}>
                    <FontAwesome 
                        name="lock" 
                        size={20} 
                        color="#2F970C" 
                        style={styles.authIcon}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="password"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={true}
                        
                    />
                </View>
                <View style={styles.authInputField}>
                    <FontAwesome 
                        name="lock" 
                        size={20} 
                        color="#2F970C" 
                        style={styles.authIcon}
                    />
                    <TextInput
                        placeholder="Repeat Password"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="password"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="done"
                        secureTextEntry={true}
                        
                    />
                </View>
                <View style={styles.authLoginWrapper}>
                    <Text style={styles.authLoginText}>Already Have an Account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signin")}
                    >
                        <Text style={styles.authLoginLink}>Click here to Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.authBtn}>Register</Text>
                </TouchableOpacity>
            </View>
            <StatusBar 
                style="auto" 
                animated={true}
            />
        </>
    )
}

export default Register
