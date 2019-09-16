import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
import SwiperFlatList from 'react-native-swiper-flatlist';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={{ color: 'gray', marginBottom: 8, fontSize: 13 }}>SPRING COLLECTION</Text>
                <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                    <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/banner.jpg')} />
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 230,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 3, height: 3 },
        padding: 10
    }

})
export default Collection;