import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { importDeclaration } from '@babel/types';
import Drawer from 'react-native-drawer'; 
import Menu from './Menu';
import Shop from './Shop/Shop';



export default class Main extends Component {
    // closeControlPanel=()=>{
    //     this.drawer.close();
    // };
    // openControlPanel=()=>{
    //     this.drawer.open();
    // }

    render() {
        return(            // <Drawer
            // ref={(ref)=>{this.drawer=ref}}
            // content={<Menu />}
            // openDrawerOffset={0.4}
            // tapToClose={true}
            // >
                
            //     <Shop open={this.openControlPanel.bind(this)}/>
            // </Drawer>rn (
                <Shop/>


        )
    }

}
