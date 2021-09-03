import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';

const Stack = createStackNavigator();
const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                header: ({navigation}) => <Header navigation={navigation} title="Dashboard" />
            }}
        >
            <Stack.Screen 
                name="Index" 
                component={Dashboard} 
            />
        </Stack.Navigator>
    )
}

export default DashboardStack;