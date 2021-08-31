import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles/global';
import { FontAwesome } from '@expo/vector-icons';

const DashboardCard = ({icon, title, text}) => {
    return (
        <View style={styles.dashboardCard}>
            <View style={styles.cardWrapper}>
                <View>
                    <FontAwesome name={icon} size={45} color="#2F970C" />
                </View>
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardText}>{text}</Text>
                </View>
            </View>
        </View>
    )
}

export default DashboardCard
