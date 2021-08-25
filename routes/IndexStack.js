import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Home from '../screens/DefaultScreen/Home';
import HomeHeader from '../screens/Components/HomeHeader';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <HomeHeader navigation={navigation} />
            }
        }
    },
}

const IndexStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default IndexStack;