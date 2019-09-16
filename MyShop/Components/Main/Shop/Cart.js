import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (
            <View>
                <Text>Cart</Text>
            </View>
        );
    }
}

export default Cart;