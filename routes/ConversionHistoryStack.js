import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import ConversionHistory from '../screens/ConversionHistory/ConversionHistory';

const screens = {
    Index: {
        screen: ConversionHistory,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Conversion History" />
            }
        }
    }
}

const ConversionHistoryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default ConversionHistoryStack;