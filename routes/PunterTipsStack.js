import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import React from 'react';
import PuntersTips from '../screens/PuntersTips/PuntersTips';

const Stack = createStackNavigator();
const PunterTipsStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                header: ({navigation}) => <Header navigation={navigation} title="Punters Tips" />
            }}
        >
            <Stack.Screen 
                name="Index" 
                component={PuntersTips} 
            />
        </Stack.Navigator>
    )
}

export default PunterTipsStack;