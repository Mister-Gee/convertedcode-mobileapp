import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from '../../styles/global';


const DetailHeader = ({title}) => {
    
    return (
        <View style={styles.detailHeader}>
            <View style={styles.detailHeaderTextWrap}>
                <Text style={styles.mainDetailHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default DetailHeader
