import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { getLatestMatchReviews } from '../../services/matchReviewServices';
import { SliderBox } from "react-native-image-slider-box";
import Carousel from 'react-native-snap-carousel';
import styles from '../../styles/global'
import { NavigationActions } from 'react-navigation';
import { reduceContentDisplay, dateConverter } from '../../utils/Functions';
import Footer from '../Components/Footer';

const Home = ({navigation}) => {
    const [matchReviews, setMatchReviews] = useState([])

    useEffect(() => {
        const fetch = async() => {
            try{
                const res = await getLatestMatchReviews()
                setMatchReviews(res.data.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    },[])

    const images = [
        require("../../assets/images/header.png"),
        require("../../assets/images/header.png"),
        require("../../assets/images/header.png")
    ]

    const HomeMRItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.push("MatchReview", {}, NavigationActions.navigate({
                        routeName: 'Detail', 
                        params: item
                    })
                )}
                }
            >
                <View style={styles.homeMRItem}>
                    <Image 
                        style={styles.homeMRImage}
                        source={{
                            uri: `https://api.convertedcode.com/storage/${item.image_dir}`
                        }}
                    />
                    <View style={styles.homeMRContent}>
                        <Text style={styles.homeMRTitleText}>{item.title}</Text>
                        <Text style={styles.homeMRBody}>{reduceContentDisplay(item.content)}...</Text>
                    </View>
                    <View style={styles.homeAuthorDate}>
                        <Text style={styles.homeAuthor}>{item.author}</Text>
                        <Text style={styles.homeDate}>{dateConverter(item.created_at)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderItem = ({item}) => {
        return (
            <View style={styles.optionSlide}>
                <Image source={item.icon} />
                <Text style={styles.OptionSlideTitle}>{ item.text }</Text>
            </View>
        );
    }

    const entries = [
        {
            icon: require("../../assets/icons/bulb-icon.png"),
            text: "Punters Tips",
        },
        {
            icon: require("../../assets/icons/code-icon.png"),
            text: "Free Bet Codes",
        },
        {
            icon: require("../../assets/icons/loop-icon.png"),
            text: "Bet Code Conversion",
        },
        {
            icon: require("../../assets/icons/star-icon.png"),
            text: "Match Reviews",
        }
      ]
    
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.headerSlide}>
               <SliderBox
                    images={images}
                    sliderBoxHeight={200}
                    // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#2F970C"
                    inactiveDotColor="#90A4AE"
                    // autoplay={true}
                    // circleLoop={true}
                />
            </View>
            <View style={styles.optionsWrapper}>
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={entries}
                    renderItem={_renderItem}
                    sliderWidth={400}
                    itemWidth={90}
                    itemHeight={72}
                    autoplay={true}
                    loop={true}
                    activeSlideOffset={50}
                />
            </View>
            <View style={styles.homeMRWrapper}>
                <View style={styles.homeMRHeader}>
                    <Text style={styles.homeMRTitle}>Match Reviews</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("MatchReview")}>
                        <Text style={styles.homeMRRoute}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.HMRContainer}>
                    <FlatList
                        nestedScrollEnabled
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        data={matchReviews}
                        renderItem={({item}) => <HomeMRItem item={item}/>}
                    />
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

export default Home
