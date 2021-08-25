import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import BetTerms from '../screens/BetTerminologies/BetTerms';
import BetTerm from '../screens/BetTerminologies/BetTerm';

const screens = {
    Index: {
        screen: BetTerms,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Bet Terminologies" />
            }
        }
    },
    Detail: {
        screen: BetTerm,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <DetailHeader title={navigation.getParam('title')} />
            }
        }
    },
}

const BetTermsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default BetTermsStack;