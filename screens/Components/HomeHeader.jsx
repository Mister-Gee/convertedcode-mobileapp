import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from '../../styles/global';


const HomeHeader = ({navigation}) => {
    
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
                <Image style={styles.headerImage} source={require("../../assets/images/logo-color.png")}/>
                <Text style={styles.headerText}><Text style={styles.convertedText}>Converted</Text><Text style={styles.codeText}>Code</Text></Text>
            </View>
        </View>
    )
}

export default HomeHeader
