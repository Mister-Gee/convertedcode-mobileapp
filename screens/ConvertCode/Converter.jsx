import React, {useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard} from 'react-native';
// import Clipboard from '@react-native-community/clipboard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from '@hookstate/core';
import store from '../../store/store';
import { io } from 'socket.io-client';
import { CONVERTEDCODE_SOCKET_URL } from '@env';
import styles from '../../styles/global';
import {convert} from '../../services/conversionService';
import {getUserPlan} from '../../services/dashboardService';
import SelectDropdown from 'react-native-select-dropdown';
import {AntDesign, Feather } from '@expo/vector-icons';

const Converter = () => {
    
    const {user} = useState(store)

    const {conversionUnit} = useState(store)

    useEffect(() => {
        const fetch = async () => {
            try {
              const res = await getUserPlan(user.get().id)
              conversionUnit.set(res.data.conversionUnit)

            } 
            catch (err) {
                console.log(err)
            }
        }
        fetch()
    },[])

    const [tc, setTc] = React.useState(true)
    const [tcError, setTcError] = React.useState("")

    const [initError, setInitError] = React.useState("")

    const [totalGames, setTotalGames] = React.useState("")
    const [totalGamesConverted, setTotalGamesConverted] = React.useState("")
    const [game, setGame] = React.useState("")
    const [betCode, setBetCode] = React.useState("")
    const [gameStatus, setGameStatus] = React.useState("")
    const [conversionError, setConversionError] = React.useState("")
    const [unavailableGamesAndOptions, setUnavailableGamesAndOptions] = React.useState([])

    const[isConverting, setIsConverting] = React.useState(false)

    const initialValues = {
        code: "",
        from: "",
        to: "" 
    }

    const onSubmit = async (data) => {
            if(conversionUnit.get() > 0){
            setConversionError("")
            setGame("")
            setTotalGames("")
            setTotalGamesConverted("")
            setBetCode("")
            setGameStatus("")
            setIsConverting(true)
            const socket = io(CONVERTEDCODE_SOCKET_URL , { reconnection: false }, { reconnectionDelay: 100000 }, { transports: ['websocket', 'polling'] }, { forceNew: false }, { reconnectionDelayMax: 100000, })
            socket.on('connect', function() {
                socket.emit('my event', data);
                // alertType.set("success")
                // alertMessage.set("Conversion Started...")
                // alertNotification.set(true)
                // setTimeout(() => {
                //     alertNotification.set(false)  
                // }, 3000)
            })
            
            socket.on('error', function(data) {
                setConversionError(data['error'])
                // alertType.set("danger")
                // alertMessage.set("Conversion Error")
                // alertNotification.set(true)
                // setTimeout( () => {
                //     alertNotification.set(false)  
                // }, 3000)
                // console.log(data['error'])
                socket.disconnect()
            })
            socket.on('game', function(data) {
                setTotalGames(data['game'])
                // console.log(data['game'])
                // setIsConverting(false)
            })
            socket.on('my response', function(data) {
                setGame(" ")
                setGameStatus(" ")
                setGame(data['my response'])
                // console.log(data['my response'])
                // setIsConverting(false)
            })
            socket.on('status', function(data) {
                // setGameStatus(" ")
                setGameStatus(data['status'])
                // console.log(data['status'])
                // setIsConverting(false)
            })
            socket.on('totalsuccess', function(data) {
                setTotalGamesConverted(data['totalsuccess'])
                // console.log(data['totalsuccess'])
                // setIsConverting(false)
            })
            socket.on('bcode', function(data) {
                setBetCode(data['bcode'])
                // console.log(data['bcode'])
                // setIsConverting(false)
            })
            socket.on('unavailable', function(data) {
                setUnavailableGamesAndOptions(data['unavailableGamesAndOptions'])
                // console.log(data['unavailableGamesAndOptions'])
                // setIsConverting(false)
            })
            socket.on('disconnect', async () => {
                await convert(user.get().id)
                // alertType.set("success")
                // alertMessage.set("Conversion Completed")
                // alertNotification.set(true)
                // setTimeout(() => {
                //     alertNotification.set(false)  
                // }, 3000) 
            })
            } 
            else{
            setInitError("You have Run out of conversion Unit, <a href='./subscription-plans'>Click Here</a> to buy more units")
            // setIsConverting(false)
            } 
    }

    const validationSchema = Yup.object({
        code: Yup.string().required("Bet Code is required"),
        from: Yup.string().required("Required"),
        to: Yup.string().required("Required")

    })

    const bookies = ["Bet9ja", "Betking", "Sportybet", "22Bet"]

    const handleCodeCopy = (textToCopy) => {
        alert("Bet Code Copied")
        Clipboard.setString(textToCopy); 
    }

    return (
        <>
        { !isConverting ? 
        <View style={styles.ConvertCodeSection}>
            <View style={styles.convertCodeHeader}>
                <Text style={styles.convertCodeHeaderText}>Convert Your Booking Code</Text>
            </View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.convertCodeFormContainer}>
                <View style={styles.convertCodeInputField}>
                    <TextInput
                        placeholder="Booking Code"
                        style={styles.convertCodeInput}
                        autoCorrect={false}
                        autoCompleteType="off"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="next"
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        value={values.code}
                    />
                </View>
                    <Text style={styles.convertCodeError}>{errors.code && touched.code && errors.code}</Text>
                <View>
                    <SelectDropdown
                        data={bookies}
                        defaultValue={values.from}
                        defaultButtonText="Convert From"
                        onSelect={handleChange('from')}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                        buttonStyle={styles.convertCodeSelectField}
                        buttonTextStyle={styles.convertCodeSelectTextField}
                    />
                </View>
                    <Text style={styles.convertCodeError}>{errors.from && touched.from && errors.from}</Text>
                <View>
                     <SelectDropdown
                        data={bookies}
                        defaultValue={values.to}
                        defaultButtonText="Convert To"
                        onSelect={handleChange('to')}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                        buttonStyle={styles.convertCodeSelectField}
                        buttonTextStyle={styles.convertCodeSelectTextField}
                    />
                </View>
                    <Text style={styles.convertCodeError}>{errors.to && touched.to && errors.to}</Text>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.convertBtn}>Convert Code</Text>
                </TouchableOpacity>
            </View>
            )}
        </Formik>
        </View>
        :
        <View style={styles.ConvertCodeSection}>
            <View style={styles.convertCodeHeader}>
                <Text style={styles.convertCodeHeaderText}>Converting...</Text>
            </View>
            <View>
                <View style={styles.socketInfoSection}>
                <Text>{conversionError &&
                    <Text style={[styles.conversionText, styles.conversionRed]}><Text style={styles.conversionBold}>Error: </Text> {conversionError}</Text>
                    }
                </Text>
                <Text>{initError &&
                    <Text style={[styles.conversionText, styles.conversionRed]}><Text style={styles.conversionBold}>Error: </Text> {initError}</Text>
                    }
                </Text>
                </View>
                <View style={styles.socketInfoSection}>
                    <Text>
                    {totalGames &&
                    <Text style={styles.conversionText}><Text style={styles.conversionBold}>Total Games: </Text> {totalGames}</Text>
                    }
                    </Text>
                </View>
                <View style={styles.socketInfoSection}>
                    <Text>
                    {game &&
                    <Text style={styles.conversionText}><Text style={styles.conversionBold}>Game: </Text> {game} {gameStatus === "success" ? 
                    <Feather name="check" size={17} color="#2F970C" />
                    :
                    gameStatus === "fail" ?
                    <Feather name="x" size={17} color="red" />
                    :
                    ""
                     }
                     </Text>
                    }
                    </Text>
                </View>
                <View style={styles.socketInfoSection}>
                    <Text>
                    {totalGamesConverted &&
                    <Text style={styles.conversionText}><Text style={styles.conversionBold}>Total Games Converted: </Text> {totalGamesConverted}</Text>
                    }
                    </Text>
                </View>
                <View style={styles.socketInfoSection}>
                    <Text>
                    {betCode &&
                    <TouchableOpacity
                        onPress={() => handleCodeCopy(betCode)}
                    >
                    <Text style={styles.conversionText}><Text style={styles.conversionBold}>Betcode: </Text> {betCode} <Feather name="copy" size={17} color="black" /></Text>
                    </TouchableOpacity>
                    }
                    </Text>
                </View>
                <View style={styles.socketInfoSection}>
                    <Text>
                    {unavailableGamesAndOptions.length > 0 &&
                    <View >
                        <Text style={[styles.conversionText, styles.conversionBold]}>Games/Options Not Found</Text>
                        {unavailableGamesAndOptions.map(data => (
                            <Text >
                                {data} 
                            </Text>
                        ))}
                    </View>
                    }
                    </Text>
                </View>
            </View>
            <View style={styles.goBackSection}>
                <TouchableOpacity
                    onPress={() => setIsConverting(false)}
                >
                    <Text style={styles.goBackText}> <AntDesign name="back" size={20} color="black" /> Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        }
        </>
    )
}

export default Converter
