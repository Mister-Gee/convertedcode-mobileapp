import React, {useState, useEffect} from 'react';
import { View, Text,Image, FlatList, TouchableOpacity } from 'react-native';
import { getBetTerms } from '../../services/betTermsServices';
import { reduceContentDisplay} from '../../utils/Functions';
import styles from '../../styles/global';


const BetTerms = ({navigation}) => {

    const [betTerms, setBetTerms] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const res = await getBetTerms()
            setBetTerms(res.data.data)
        }
        fetch()
    },[])

    const BetTermItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Detail', item)}
            >
                <View style={styles.listWrapper}> 
                    <View style={styles.listBodyContainer}>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <Text style={styles.listContent}>{reduceContentDisplay(item.content)}...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Image
                style={styles.punterTipsImage}
                source={require("../../assets/images/bet-terms.jpg")} 
            />
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={betTerms}
                    renderItem={({item}) => <BetTermItem item={item}/>}
                />
            </View>
        </View>
    )
}

export default BetTerms
