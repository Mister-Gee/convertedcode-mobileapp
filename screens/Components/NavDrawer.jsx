import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { 
    MaterialCommunityIcons, 
    Entypo, 
    MaterialIcons, 
    FontAwesome, 
    SimpleLineIcons 
} from '@expo/vector-icons';
import store from '../../store/store';
import { useState } from '@hookstate/core';
import styles from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';



const NavDrawer = ({navigation, state}) => {
    const {user} = useState(store)
    const {accessToken} = useState(store)

    const {isLoggedIn} = useState(store)

    const handleLogout = async () => {
        user.set(null)
        accessToken.set("")
        try {
            await AsyncStorage.removeItem("accessToken")
            await AsyncStorage.removeItem("returnToken")
        } 
        catch (error) {
           console.log(error) 
        }
        isLoggedIn.set(null)
    }
    return (
        <View style={styles.drawerWapper}>
            <View style={styles.drawerUsersection}>
                <Text style={styles.drawerUserText}> {user.get() ? user.get().username : ""} </Text>
            </View>
            <View style={styles.routes}>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Entypo name="home" size={28} color={state.index === 0 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 0 && styles.activeRouteLink]}
                        >
                            Home
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("PuntersTips")}
                    >
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={28} color={state.index === 2 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 2 && styles.activeRouteLink]}
                        >
                            Punters Tips
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("ConvertCode")}
                    >
                        <FontAwesome name="refresh" size={28} color={state.index === 1 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 1 && styles.activeRouteLink]}
                        >
                            Convert Code
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("ConversionHistory")}
                    >
                        <FontAwesome name="history" size={28} color={state.index === 5 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 5 && styles.activeRouteLink]}
                        >
                            Conversion History
                        </Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("Dashboard")}
                    >
                        <MaterialIcons name="dashboard" size={28} color={state.index === 6 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 6 && styles.activeRouteLink]}
                        >
                            Dashboard
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("MatchReview")}
                    >
                        <FontAwesome name="star" size={28} color={state.index === 3 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 3 && styles.activeRouteLink]}
                        >
                            Match Reviews
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("BetTerms")}
                    >
                        <FontAwesome name="th-list" size={28} color={state.index === 4 ? "#2F970C" : "#8B8787"} />
                        <Text 
                            style={[styles.routeLink, state.index === 4 && styles.activeRouteLink]}
                        >
                            Bet Terminologies
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoutLinkContainer}>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.routeLinkWrapper}
                    >
                        <SimpleLineIcons name="logout" size={28} color="#2F970C" />
                        <Text 
                            style={styles.routeLink}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NavDrawer;