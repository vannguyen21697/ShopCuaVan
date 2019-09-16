import React, { Component } from 'react';
import { Text,View } from 'react-native';
export default  class Menu extends Component {
    static navigationOptions = {
        title: 'menu',}
    render() {
        return (
            <View><Text>Menu</Text></View>
        );
    }
}
