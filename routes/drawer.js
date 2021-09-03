import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IndexStack from './IndexStack';
import MatchReviewStack from './MatchReviewStack';
import ConvertCodeStack from './ConvertCodeStack';
import PunterTipsStack from './PunterTipsStack';
import BetTermsStack from './BetTermsStack';
import ConversionHistoryStack from './ConversionHistoryStack';
import DashboardStack from './DashboardStack';
import NavDrawer from '../screens/Components/NavDrawer';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home"
                drawerContent={({navigation, state}) => <NavDrawer navigation={navigation} state={state} />}
                backBehavior = "history"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={IndexStack}    
                />
                <Drawer.Screen 
                    name="ConvertCode" 
                    component={ConvertCodeStack}   
                />
                <Drawer.Screen 
                    name="PuntersTips" 
                    component={PunterTipsStack}   
                />
                <Drawer.Screen 
                    name="MatchReview" 
                    component={MatchReviewStack}   
                />
                <Drawer.Screen 
                    name="BetTerms" 
                    component={BetTermsStack}   
                />
                <Drawer.Screen 
                    name="ConversionHistory" 
                    component={ConversionHistoryStack}   
                />
                <Drawer.Screen 
                    name="Dashboard" 
                    component={DashboardStack}   
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;