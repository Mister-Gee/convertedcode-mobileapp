import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import BetTerms from '../screens/BetTerminologies/BetTerms';
import BetTerm from '../screens/BetTerminologies/BetTerm';

const Stack = createStackNavigator();
const BetTermsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Index" 
                component={BetTerms} 
                options = {{
                header: ({navigation}) => <Header navigation={navigation} title="Bet Terminologies" />
            }}
            />
            <Stack.Screen 
                name="Detail" 
                component={BetTerm} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.title} />
            }}
            />
        </Stack.Navigator>
    )
}

export default BetTermsStack;