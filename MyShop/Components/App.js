import React, { Component } from 'react'
import { View, TouchableOpacity, Navigator, Text, FlatList, RefreshControl } from 'react-native'
import { createAppContainer, StackActions, NavigationActions,DrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OderHistory from './oderHistory/oderHistory';
import Menu from './Main/Menu';
import Shop from './Main/Shop/Shop';
import TopProduct from './Main/Shop/Common/TopProduct';


const AppNavigator = createStackNavigator({
    authentication: {
        screen: Authentication,
    },
    changeInfo: {
        screen: ChangeInfo,
        navigationOptions:{
            header: null
        }
    },
    topproduct:{
        screen:TopProduct,
        navigationOptions:{
            header: null
        }
    },
    main: {
        screen: Main,
        navigationOptions:{
            header: null
        }
    },
    oderHistory: {
        screen: OderHistory,
    },
    menu: {
        screen: Menu,
    },
    shop: {
        screen: Shop,
        navigationOptions:{
            header: null
        }


    },

},
    {
        initialRouteName: 'main',
       
    });

export default createAppContainer(AppNavigator);

