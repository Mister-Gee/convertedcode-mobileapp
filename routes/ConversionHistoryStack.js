import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import React from 'react';
import ConversionHistory from '../screens/ConversionHistory/ConversionHistory';

const Stack = createStackNavigator();
const ConversionHistoryStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                header: ({navigation}) => <Header navigation={navigation} title="Punters Tips" />
            }}
        >
            <Stack.Screen 
                name="Index" 
                component={ConversionHistory
                } 
            />
        </Stack.Navigator>
    )
}

export default ConversionHistoryStack;