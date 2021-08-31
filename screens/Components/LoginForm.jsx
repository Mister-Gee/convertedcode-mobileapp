import React from 'react';
import { View, TextInput, Text, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/global';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import {login} from '../../services/authServices';
import { useState } from '@hookstate/core';
import store from '../../store/store';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({close, signup, setLoading, setRerender}) => {
    const [rememberMe, setRememberMe] = React.useState(false);
    const toggleSwitch = () => setRememberMe(previousState => !previousState);

    const {user} = useState(store)
    const {isLoggedIn} = useState(store)

    const {accessToken} = useState(store)

    const initialValues = {
        email: "",
        pwd: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Email Is Required"),
        pwd: Yup.string().required("Password is Required")
    })

    const onSubmit = async (value) => {
        setLoading(true)
        try{
            const res = await login(value);
            const status = res.status
            const data = res.data
            // console.log(data)
            if(status === 201 && data != null){
                const decoded = jwt_decode(data.returnToken)
                user.set(decoded[0])
                accessToken.set(data.token)
                // console.log(user.get())
                // console.log(accessToken.get())
                if(rememberMe){
                    await AsyncStorage.setItem("accessToken", data.token)
                    await AsyncStorage.setItem("returnToken", data.returnToken)
                }
                isLoggedIn.set(true)
                setLoading(false)
                setRerender(true)
            }
            else{
                console.log("Error")
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <View style={styles.authSection}>
            <View style={styles.authHeader}>
                <Text style={styles.authHeaderText}>Login</Text>
                <TouchableOpacity onPress={close}>
                    <FontAwesome name="times" size={23} color="black" />
                </TouchableOpacity>
            </View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
            <View style={styles.authFormContainer}>
                <View style={styles.authInputField}>
                    <TextInput
                        placeholder="Email"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="email"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={false}
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                    <Text style={styles.authError}>{errors.email && touched.email && errors.email}</Text>
                <View style={styles.authInputField}>
                    <TextInput
                        placeholder="Password"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="password"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={true}
                        onChangeText={handleChange('pwd')}
                        onBlur={handleBlur('pwd')}
                        value={values.pwd}
                    />
                </View>
                    <Text style={styles.authError}>{errors.pwd && touched.pwd && errors.pwd}</Text>
                <View style={styles.authLoginWrapper}>
                    <View style={styles.rememberMeContainer}>
                        <Switch
                            trackColor={{ false: '#EEEBEB', true: '#EEEBEB' }}
                            thumbColor={rememberMe ? '#2F970C' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={rememberMe}
                        />
                        <Text style={styles.rememberSwitch}> Remember Me </Text>
                    </View>
                    <TouchableOpacity
                        onPress={signup}
                    >
                        <Text style={styles.authForgotLink}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.authBtn}>{isSubmitting ? "..." : "Login"}</Text>
                </TouchableOpacity>
            </View>
            )}
        </Formik>
        </View>
    )
}

export default LoginForm
