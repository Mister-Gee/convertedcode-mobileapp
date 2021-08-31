import React, {useState, useEffect} from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from '../../styles/global';
import { Col, Row, Grid } from "react-native-easy-grid";
import {getPuntersTips} from '../../services/puntersTipsServices';


const PuntersTips = () => {

    const [puntersTips, setPuntersTips] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await getPuntersTips()      
                setPuntersTips(res.data.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    }, [])

    const openCode = (link) => {
        Linking.openURL(link);
    }

    return (
        <View>
            <View>
                <Image
                    style={styles.punterTipsImage}
                    source={require("../../assets/images/punters-tips.png")} 
                />
            </View>
            <View style={styles.tableSection}>
                <Grid>
                    <Row style={styles.tableHeader}>
                        <Col>
                            <Text style={[styles.tableHeaderText, styles.punterText]}>Punter</Text>
                        </Col>
                        <Col>
                            <Text style={styles.tableHeaderText}>Bet Code</Text>
                        </Col>
                        <Col>
                            <Text style={styles.tableHeaderText}>Bookie</Text>
                        </Col>
                        <Col>
                            <Text style={styles.tableHeaderText}>Odds</Text>
                        </Col> 
                    </Row>
                    {puntersTips.map(data => (
                        <Row style={styles.tableBody} key={data.id}>
                            <Col>
                                <Text style={styles.tableBodyText}>@{data.punter}</Text>
                            </Col>
                            <Col>
                                <Text style={[styles.tableBodyText, styles.viewCode]} onPress={() => openCode(data.betcode)}>View Code</Text>
                            </Col>
                            <Col>
                                <Text style={styles.tableBodyText}>{data.bookie}</Text>
                            </Col>
                            <Col>
                                <Text style={styles.tableBodyText}> {data.odds} </Text>
                            </Col> 
                    </Row>
                    ))}
                </Grid>
            </View>
        </View>
    )
}

export default PuntersTips
