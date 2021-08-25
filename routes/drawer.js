import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from '@react-navigation/native';
import IndexStack from './IndexStack';
import MatchReviewStack from './MatchReviewStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: IndexStack,
    },
    MatchReview: {
        screen: MatchReviewStack,
        navigationOptions: () => ({
            title: "Match Review"
        })
    }
}, {
    // drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
        activeTintColor: '#2F970C',
    }
})

export default createAppContainer(RootDrawerNavigator)