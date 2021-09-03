import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/DefaultScreen/Home';
import HomeHeader from '../screens/Components/HomeHeader';

const Stack = createStackNavigator();
const IndexStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                header: ({navigation}) => <HomeHeader navigation={navigation} />
            }}
        >
            <Stack.Screen 
                name="Index" 
                component={Home} 
            />
        </Stack.Navigator>
    )
}

export default IndexStack;