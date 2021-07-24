import React from 'react';
import { View, Text } from 'react-native'
import styles from '../../styles/global'

const IntroCard = ({children}) => {
    return (
        <View styles={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
    )
}

export default IntroCard
