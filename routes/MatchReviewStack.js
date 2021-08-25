import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from '@react-navigation/native';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import MatchReviews from '../screens/MatchReviews/MatchReviews';
import MatchReviewDetail from '../screens/MatchReviews/MatchReviewDetail';

const screens = {
    Index: {
        screen: MatchReviews,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Match Review" />
            }
        }
    },
    Detail: {
        screen: MatchReviewDetail,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <DetailHeader title={navigation.getParam('title')} />
            }
        }
    },
}

const MatchReviewStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default MatchReviewStack;