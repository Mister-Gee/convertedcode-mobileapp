import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/global';
import Header from '../screens/Components/Header';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';

const screens = {
    Index: {
        screen: Dashboard,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Dashboard" />
            }
        }
    }
}
const DashboardStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: styles.headerStyle
    }
});

export default DashboardStack;