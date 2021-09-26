import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/global';
import { cleanUpContent, dateConverter } from '../../utils/Functions';


const BetTerm = ({route}) => {
    const {title, content} = route.params

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
