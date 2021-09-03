import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from '@react-navigation/native';
import IndexStack from './IndexStack';
import MatchReviewStack from './MatchReviewStack';
import ConvertCodeStack from './ConvertCodeStack';
import PunterTipsStack from './PunterTipsStack';
import BetTermsStack from './BetTermsStack';
import ConversionHistoryStack from './ConversionHistoryStack';
import DashboardStack from './DashboardStack';
import NavDrawer from '../screens/Components/NavDrawer';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: IndexStack,
    },
    ConvertCode: {
        screen: ConvertCodeStack,
        navigationOptions: () => ({
            title: "Convert Code"
        })
    },
    PuntersTips: {
        screen: PunterTipsStack,
        navigationOptions: () => ({
            title: "Punters Tips"
        })
    },
    MatchReview: {
        screen: MatchReviewStack,
        navigationOptions: () => ({
            title: "Match Review"
        })
    },
    BetTerms: {
        screen: BetTermsStack,
        navigationOptions: () => ({
            title: "Bet Terminologies"
        })
    },
    ConversionHistory: {
        screen: ConversionHistoryStack,
        navigationOptions: () => ({
            title: "Conversion History"
        })
    },
    Dashboard: {
        screen: DashboardStack,
        navigationOptions: () => ({
            title: "Dashboard"
        })
    }
}, {
    // drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
        activeTintColor: '#2F970C',
    }, 
    contentComponent: ({navigation}) => <NavDrawer navigation={navigation} />
})

export default createAppContainer(RootDrawerNavigator)