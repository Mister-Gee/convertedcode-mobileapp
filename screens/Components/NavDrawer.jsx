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
                        <View style={styles.linkIconWrapper}>
                            <Entypo name="home" size={28} color={state.index === 0 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 0 && styles.activeRouteLink]}
                            >
                                Home
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("PuntersTips")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <MaterialCommunityIcons name="lightbulb-on-outline" size={28} color={state.index === 2 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 2 && styles.activeRouteLink]}
                            >
                                Punters Tips
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("ConvertCode")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <FontAwesome name="refresh" size={28} color={state.index === 1 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 1 && styles.activeRouteLink]}
                            >
                                Convert Code
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("ConversionHistory")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <FontAwesome name="history" size={28} color={state.index === 5 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 5 && styles.activeRouteLink]}
                            >
                                Conversion History
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("Dashboard")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <MaterialIcons name="dashboard" size={28} color={state.index === 6 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 6 && styles.activeRouteLink]}
                            >
                                Dashboard
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("MatchReview")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <FontAwesome name="star" size={28} color={state.index === 3 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 3 && styles.activeRouteLink]}
                            >
                                Match Reviews
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeLinkContainer}>
                    <TouchableOpacity
                        style={styles.routeLinkWrapper}
                        onPress={() => navigation.navigate("BetTerms")}
                    >
                        <View style={styles.linkIconWrapper}>
                            <FontAwesome name="th-list" size={28} color={state.index === 4 ? "#2F970C" : "#8B8787"} />
                            <Text 
                                style={[styles.routeLink, state.index === 4 && styles.activeRouteLink]}
                            >
                                Bet Terminologies
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoutLinkContainer}>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.routeLinkWrapper}
                    >
                        <View style={styles.linkIconWrapper}>
                            <SimpleLineIcons name="logout" size={28} color="#2F970C" />
                            <Text 
                                style={styles.routeLink}
                            >
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NavDrawer;