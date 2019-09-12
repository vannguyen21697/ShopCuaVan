import React, { Component } from 'react'
import { View, TouchableOpacity, Navigator, Text, FlatList, RefreshControl } from 'react-native'
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OderHistory from './oderHistory/oderHistory';
import Menu from './Main/Menu';
import Shop from './Main/Shop/Shop';


const AppNavigator = createStackNavigator({
    authentication: {
        screen: Authentication,
    },
    changeInfo: {
        screen: ChangeInfo,
    },
    main: {
        screen: Main,
    },
    oderHistory: {
        screen: OderHistory,
    },
    menu: {
        screen: Menu,
    },
    shop: {
        screen: Shop,
    },

}, {
        initialRouteName: 'main',
    });

export default createAppContainer(AppNavigator);

