import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (

            <View style={styles.wrapper}>
                <Text style={{ color: 'gray', marginBottom: 8, fontSize: 13 }}>LIST OF CATEGORY</Text>
                {/* <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={2}
                    showPagination
                >
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/banner.jpg')} />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/banner.jpg')} />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/banner.jpg')} />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/banner.jpg')} />
                    </View>

                </SwiperFlatList>
 */}
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/little.jpg')} >
                        </Image>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/maxi.jpg')} />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', margin: 10 }}>
                        <Image style={{ width: '98%', height: 150 }} source={require('../../../../media/images/temp/party.jpg')} />
                    </View>
                </Swiper>

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


export default Category;