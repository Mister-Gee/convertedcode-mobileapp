import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import DetailHeader from '../screens/Components/DetailHeader';
import React from 'react';
import PuntersTips from '../screens/PuntersTips/PuntersTips';

const screens = {
    Index: {
        screen: PuntersTips,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Punters Tips" />
            }
        }
    }
}

const PunterTipsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default PunterTipsStack;