import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import React from 'react';
import Converter from '../screens/ConvertCode/Converter';

const screens = {
    Index: {
        screen: Converter,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Convert Code" />
            }
        }
    }
}
const ConvertCodeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default ConvertCodeStack;