import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from '../../styles/global';


const Header = ({navigation, title}) => {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
           <TouchableOpacity onPress={openMenu}>
                <Image source={require("../../assets/images/menu-icon.png")}/>
            </TouchableOpacity>
            {/* <MaterialIcons name="menu" size={24} color="black" onPress={openMenu}/> */}
            <View style={styles.headerTextWrap}>
                <Text style={styles.mainHeaderText}> {title} </Text>
            </View>
        </View>
    )
}

export default Header
