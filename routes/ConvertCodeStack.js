import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import React from 'react';
import Converter from '../screens/ConvertCode/Converter';

const Stack = createStackNavigator();
const ConvertCodeStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                header: ({navigation}) => <Header navigation={navigation} title="Convert Code" />
            }}
        >
            <Stack.Screen 
                name="Index" 
                component={Converter} 
            />
        </Stack.Navigator>
    )
}

export default ConvertCodeStack;