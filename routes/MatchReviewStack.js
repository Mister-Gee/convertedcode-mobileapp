import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import MatchReviews from '../screens/MatchReviews/MatchReviews';
import MatchReviewDetail from '../screens/MatchReviews/MatchReviewDetail';

const Stack = createStackNavigator();
const MatchReviewStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Index" 
                component={MatchReviews} 
                options = {{
                header: ({navigation}) => <Header navigation={navigation} title="Match Review" />
            }}
            />
            <Stack.Screen 
                name="Detail" 
                component={MatchReviewDetail} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.title} />
            }}
            />
        </Stack.Navigator>
    )
}

export default MatchReviewStack;