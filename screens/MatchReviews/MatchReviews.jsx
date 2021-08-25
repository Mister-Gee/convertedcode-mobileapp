import React, {useState, useEffect} from 'react';
import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from '../../styles/global';
import { getMatchReviews } from '../../services/matchReviewServices';
import { reduceContentDisplay, dateConverter } from '../../utils/Functions';


const MatchReviews = ({navigation}) => {
    const [matchReviews, setMatchReviews] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const res = await getMatchReviews()
            setMatchReviews(res.data.data)
        }
        fetch()
    },[])

    const RenderItem = ({item}) => {
        return (
            <ImageBackground
                style={styles.MRsliderImage}
                source={item.image}
            >
                {item.text ?
                <Text style={styles.MRadText}>{item.text}</Text>
                :
                <Text style={styles.MRslidertext}><Text style={styles.convertedText}>Match</Text>{"\n"}<Text style={styles.codeText}>Review</Text></Text>
                }
            </ImageBackground>
        )
    }
    const entries = [
        {
            image: require("../../assets/images/sportImg.png"),
            text: null,
        },
        {
            image: require("../../assets/images/sportImg.png"),
            text: "Latest Reviews",
        },
        {
            image: require("../../assets/images/sportImg.png"),
            text: "Accumulator For The Day",
        },
        {
            image: require("../../assets/images/sportImg.png"),
            text: "Featured Match",
        }
      ]

      const MatchReviewList = ({item}) => {
          return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', item)}
              >
                <View style={styles.listWrapper}>
                    <Image
                        style={styles.listImage}
                        source={{
                            uri: `https://api.convertedcode.com/storage/${item.image_dir}`
                        }}
                    />
                    <View style={styles.listBodyContainer}>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <Text style={styles.listContent}>{reduceContentDisplay(item.content)}...</Text>
                        <View style={styles.listADsection}>
                            <Text style={styles.listAD}>{item.author}</Text>
                            <Text style={styles.listAD}>{dateConverter(item.created_at)}</Text>
                        </View>
                    </View>
                </View>
              </TouchableOpacity>
          )
      }

    return (
        <ScrollView>
            <Carousel
                data={entries}
                renderItem={RenderItem}
                sliderWidth={400}
                itemWidth={400}
                autoplay={true}
                loop={true}
                activeSlideOffset={50}
                autoplayInterval={6000}
            />
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={matchReviews}
                    renderItem={({item}) => <MatchReviewList item={item}/>}
                />
            </View>
        </ScrollView>
    )
}

export default MatchReviews
