import React from 'react';
import { View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from '../../styles/global';


const Header = ({navigation, title}) => {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <Feather name="menu" size={24} color="black" onPress={openMenu}/>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default Header
