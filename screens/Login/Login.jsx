import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/global';

const Login = ({navigation}) => {
    return (
        <>
            <View style={styles.authHeader}>
                <Text style={styles.authHeaderText}>Login</Text>
                <Text style={styles.authHeaderSubText}>Fill in your details below</Text>
            </View>
            <View style={styles.authFormContainer}>
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
                <View style={styles.authLoginWrapper}>
                    <Text style={styles.authLoginText}>Dont Have an Account Yet? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={styles.authLoginLink}>Click here to Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.authBtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <StatusBar 
                style="auto" 
                animated={true}
            />
        </>
    )
}

export default Login
