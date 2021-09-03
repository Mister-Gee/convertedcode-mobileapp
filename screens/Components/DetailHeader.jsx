import React from 'react';
import { View, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../../styles/global';


const DetailHeader = ({navigation, title}) => {
    
    const goBack = () => {
        navigation.push('Index')
    }

    return (
        <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} color="black" onPress={goBack}/>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainDetailHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default DetailHeader
