import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import styles from '../../styles/global';
import { register } from '../../services/authServices';
import { useState } from '@hookstate/core';
import store from '../../store/store';
import jwt_decode from 'jwt-decode';


const SignupForm = ({close, login, setLoading, setRerender}) => {

    const initialValues = {
        username: "",
        email: "",
        gender: "male",
        pwd: "",
        pwd_confirmation: ""
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Name is Required"),
        email: Yup.string().email("Invalid Email Format").required("Email Is Required"),
        pwd: Yup.string().required("Password is Required"),
        pwd_confirmation: Yup.string().required("Confirm Password Required")
    })

    const {user} = useState(store)
    const {isLoggedIn} = useState(store)
    const {accessToken} = useState(store)

    const onSubmit = async (value) => {
        setLoading(true)
        if(value.pwd === value.pwd_confirmation){
            try{
                let res = await register(value)
                const status = res.status
                const data = res.data
                if(status === 201 && data != null){
                    // localStorage.setItem("accessToken", data.token)
                    // localStorage.setItem("returnToken", data.returnToken)
                    const decoded = jwt_decode(data.returnToken)
                    user.set(decoded[0])
                    // setTimeout(() => {
                    //     alertNotification.set(false)
                    //     history.push({
                    //         pathname: "/dashboard"
                    //     })
                    // }, 1500)   
                    // setReturnToken(data.returnToken)
                    isLoggedIn.set(true)
                    setRerender(true)
                }
                else{
                    console.log("Invalid Useename and Password")
                }
            }
            catch(err) {
                // alertType.set("danger")
                // alertMessage.set("Error")
                // alertNotification.set(true)
                // setTimeout(() => {
                //     alertNotification.set(false)
                // }, 1500)
                console.log(err.message)
            }
        }
        else{
            // setPwdconfirmationError("Password Doesn't Match")
            console.log("Password Doesnt Match")
        }
        setLoading(false)
    }           
    
    return (
        <View style={styles.authSection}>
            <View style={styles.authHeader}>
                <Text style={styles.authHeaderText}>Create New Account</Text>
                <TouchableOpacity onPress={close}>
                    <FontAwesome name="times" size={23} color="black" />
                </TouchableOpacity>
            </View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.authFormContainer}>
                <View style={styles.authInputField}>
                    <TextInput
                        placeholder="Name"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="name"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        secureTextEntry={false}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>
                    <Text style={styles.authError}>{errors.username && touched.username && errors.username}</Text>
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
                <View style={styles.authInputField}>
                    <TextInput
                        placeholder="Repeat Password"
                        style={styles.authInput}
                        autoCorrect={false}
                        autoCompleteType="password"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="done"
                        secureTextEntry={true}
                        onChangeText={handleChange('pwd_confirmation')}
                        onBlur={handleBlur('pwd_confirmation')}
                        value={values.pwd_confirmation}
                        
                    />
                </View>
                    <Text style={styles.authError}>{errors.pwd_Confirmantion && touched.pwd_Confirmantion && errors.pwd_Confirmantion}</Text>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.signupBtn}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.authLoginWrapper}>
                    <Text style={styles.authLoginText}>Already Have an Account? </Text>
                    <TouchableOpacity
                        onPress={login}
                    >
                        <Text style={styles.authLoginLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )}
        </Formik>
        </View>
    )
}

export default SignupForm
