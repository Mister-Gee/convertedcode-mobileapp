import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from '../../styles/global';


const Header = ({navigation, title}) => {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity
                 onPress={openMenu} 
            >
                <Feather name="menu" size={24} color="black"style={styles.navIconBar}/>
            </TouchableOpacity>
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default Header
