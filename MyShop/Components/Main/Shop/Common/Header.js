import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Menu from '../../Menu'
import {
    createAppContainer,
    SafeAreaView,
} from 'react-navigation';
import Shop from '../Shop';
import Main from '../../Main';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Header extends Component {
    static navigationOptions = {
        title: 'menu'
    }
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={{ backgroundColor: '#34B089', height: 80, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}
                    >
                        <Image
                            style={{ width: 25, height: 25, marginTop: 5 }}
                            source={require('../../../../media/images/appIcon/ic_menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', marginTop: 8, fontSize: 20, }}>Wearing a Dress</Text>
                    <Image
                        style={{ width: 25, height: 25, marginTop: 5 }}
                        source={require('../../../../media/images/appIcon/ic_logo.png')}
                    />
                </View>
                <TextInput
                    style={{ width: '90%', backgroundColor: '#fff', alignSelf: 'center', marginTop: 7, padding: 0, height: 25 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />


            </View>

        )
    }
}
// const navigator = createDrawerNavigator(
//     {
//         shop:{
//             screen:Main
//         },
//         menu:{
//             screen:Menu
//         },
//     },
//     {
//         // drawerType: 'back',
//         // drawerPosition: 'right',
//         // drawerWidth: 200,
//         // drawerBackgroundColor: 'orange',
//         // contentComponent: CustomDrawerContentComponent
//     }
// );

// export default createAppContainer(navigator);