import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { getLatestMatchReviews } from '../../services/matchReviewServices';
import { SliderBox } from "react-native-image-slider-box";
import Carousel from 'react-native-snap-carousel';
import styles from '../../styles/global'
import { reduceContentDisplay, dateConverter } from '../../utils/Functions';
import Footer from '../Components/Footer';
import * as WebBrowser from 'expo-web-browser';


const Home = ({navigation}) => {
    const [matchReviews, setMatchReviews] = useState([])

    const imageLink = [
        "",
        "",
        "",
        "https://refpasrasw.world/C?tag=d_1172377m_47939c_&site=1172377&ad=47939&urlred=https%3A%2F%2F22betkjs.com%2Fp%2Fsports-general%2Findex_en.php",
        "https://refpasrasw.world/C?tag=d_1172377m_47941c_&site=1172377&ad=47941&urlred=https%3A%2F%2Flinks22.com%2Fbonus%2Frules%2Freload-sport%2F"
    ]

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
        require("../../assets/images/bannerNew1.png"),
        require("../../assets/images/bannerNew2.png"),
        require("../../assets/images/bannerNew3.png"),
        "https://refpasrasw.world/img/AdAgent_15/30c7e7fd-4dfb-44fc-9533-7c7930cfd7bc.png",
        "https://refpasrasw.world/img/AdAgent_15/b4751667-cf95-4dca-b9c3-d7111410370a.png"
    ]

    const handleLink = (index) => {
        if(index > 2){
            WebBrowser.openBrowserAsync(imageLink[index]);
        }
    }

    const HomeMRItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("MatchReview", {
                        screen: 'Detail',
                        params: item
                    })
                }
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
                    sliderBoxHeight={125}
                    onCurrentImagePressed={index => handleLink(index)}
                    dotColor="#2F970C"
                    inactiveDotColor="#90A4AE"
                    autoplay={true}
                    circleLoop={true}
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
