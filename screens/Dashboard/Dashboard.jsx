import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {getUserPlan} from '../../services/dashboardService';
import styles from '../../styles/global';
import DashboardCard from './Subcomponents/DashboardCard';
import { useState } from '@hookstate/core';
import store from '../../store/store';
import * as WebBrowser from 'expo-web-browser';


const Dashboard = () => {

    const {user} = useState(store)

    const {conversionUnit} = useState(store)
    const {conversionPlan} = useState(store)
    const {totalConversions} = useState(store)

    useEffect(() => {
        const fetch = async () => {
            try {
              const res = await getUserPlan(user.get().id)
              conversionUnit.set(res.data.conversionUnit)
              conversionPlan.set(res.data.conversionPlan)
              totalConversions.set(res.data.totalConversions)
            } 
            catch (err) {
                console.log(err)
            }
        }
        fetch()
    },[])
    
    const handleSubLink = () => {
        WebBrowser.openBrowserAsync('https://convertedcode.com/dashboard');
    }

    return (
        <View>
            <View>
                <DashboardCard 
                    icon="refresh"
                    title="Available Conversion Unit"
                    text={conversionUnit.get()}
                />
                <DashboardCard 
                    icon="check-circle"
                    title="Total Conversions Done"
                    text={totalConversions.get()}
                />
                <DashboardCard 
                    icon="tags"
                    title="User's Current Plan"
                    text={conversionPlan.get()}
                />
            </View>
            <View style={styles.subscription}>
                <Text style={styles.subscriptionHeader}>Subscribe</Text>
                <Text style={styles.subscriptionText}>Running out of Conversion Unit or Looking to top up your Unit? Click Below</Text>
                <TouchableOpacity
                    onPress={handleSubLink}
                >
                    <Text style={styles.subLink}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard
