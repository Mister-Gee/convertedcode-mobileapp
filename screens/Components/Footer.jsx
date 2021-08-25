import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../../styles/global';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerHeader}>Gamble Aware</Text>
            <Text style={styles.footerText}>Make it a habit to always tap out of your betting app before you place a bet, to give you some time to think it through and help you avoid Bet Regret.</Text>
            <Image 
                style={styles.bga}
                source={require("../../assets/images/bga.png")}
            />
        </View>
    )
}

export default Footer
