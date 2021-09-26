import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import styles from '../../styles/global';


const HomeHeader = ({navigation}) => {
    
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={openMenu}
            >
                <Feather name="menu" size={24} color="black" style={styles.navIconBar}/>
            </TouchableOpacity>
            <View style={styles.headerTextWrap}>
                <Image style={styles.headerImage} source={require("../../assets/images/logo-color.png")}/>
                <Text style={styles.headerText}><Text style={styles.convertedText}>Converted</Text><Text style={styles.codeText}>Code</Text></Text>
            </View>
        </View>
    )
}

export default HomeHeader
