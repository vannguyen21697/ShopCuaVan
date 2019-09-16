import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';


class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#DBDBD8', padding: 10 }}>
                <ScrollView>
                    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                        <Text style={{ color: 'gray', fontSize: 20,padding:20}}>Top Product</Text>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp2.jpeg')}></Image>
                                <Text>Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                            <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp1.jpeg')} />
                                <Text>Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                        <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp3.jpeg')}></Image>
                                <Text >Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                            <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp4.jpeg')} />
                                <Text>Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                        <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp2.jpeg')}></Image>
                                <Text>Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                            <View style={styles.contentProduct}>
                                <Image style={styles.styleImageProduct} source={require('../../../../media/images/temp/sp1.jpeg')} />
                                <Text>Product Name</Text>
                                <Text>Pirce</Text>
                            </View>
                        </View>


                    </View>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    styleImageProduct: {
        width: 150,
        height: 250,
        resizeMode: 'stretch'
    },
    contentProduct:{
        alignItems:'center',
        flex:1
    },
})

export default TopProduct;