import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../../styles/global';


const DetailHeader = ({navigation, title}) => {
    
    const goBack = () => {
        navigation.push('Index')
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={goBack}
            >
            <Ionicons name="arrow-back" size={24} color="black" style={styles.navIconBar}/>
            </TouchableOpacity>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainDetailHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default DetailHeader
