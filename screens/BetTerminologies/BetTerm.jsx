import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/global';
import { cleanUpContent, dateConverter } from '../../utils/Functions';


const BetTerm = ({navigation}) => {
    const title = navigation.getParam('title')
    const content = navigation.getParam('content')

    return (
        <ScrollView>
            <View>
                <Text style={styles.detailTitle}> {title} </Text>
                <Text style={styles.detailContent}>{cleanUpContent(content)}</Text>
            </View>
        </ScrollView>
    )
}

export default BetTerm
