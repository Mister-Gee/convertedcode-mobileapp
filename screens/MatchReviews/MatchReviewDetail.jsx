import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../../styles/global';
import { cleanUpContent, dateConverter } from '../../utils/Functions';

const MatchReviewDetail = ({navigation}) => {
    const title = navigation.getParam('title')
    const img = navigation.getParam('image_dir')
    const content = navigation.getParam('content')
    const author = navigation.getParam('author')
    const created_at = navigation.getParam('created_at')


    return (
        <ScrollView>
            <View>
                <Image
                    style={styles.detailImage}
                    source={{
                        uri: `https://api.convertedcode.com/storage/${img}`
                    }}
                />
                <View style={styles.detailAuthorDateWrapper}>
                    <Text style={styles.detailAuthorDate}><Text style={styles.bold}>By:</Text> {author} </Text>
                    <Text style={styles.detailAuthorDate}><Text style={styles.bold}>Date Published:</Text> {dateConverter(created_at)} </Text>
                </View>
                <Text style={styles.detailTitle}> {title} </Text>
                <Text style={styles.detailContent}>{cleanUpContent(content)}</Text>
            </View>
        </ScrollView>
    )
}

export default MatchReviewDetail
