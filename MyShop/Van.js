import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import App from './Components/App';
export default class Van extends Component{
    render(){
        return(
            <View><App/></View>
        )
    }
}