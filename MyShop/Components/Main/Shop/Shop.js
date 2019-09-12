import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';



class Shop extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,


        }
    }

    componentDidMount() {
        // return fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response) => response.json())
        // .then((responseJson) => {

        //   this.setState({
        //     isLoading: false,
        //     dataSource: responseJson.movies,
        //   }, function(){

        //   });

        // })
        // .catch((error) =>{
        //   console.error(error);
        // });
        axios.get('https://api.myjson.com/bins/7p9it')
            .then(res => {
                const persons = res.data;
                this.setState({
                    isLoading: false,
                    person: persons

                });
                console.log(JSON.stringify(person))

            }).catch(error => console.log(error))
 
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        renderItem = ({ item }) => {
            <Text>
                {item.text}
            </Text>
        }

        return (
            <View>
                <ScrollView>
                    <Text>shop</Text>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>Open menu</Text>
                    </TouchableOpacity>
                            {/* <FlatList
                            data={this.state.dataSource}
                            renderItem={this.renderItem}
                        >
                        </FlatList> */}
                    <FlatList
                        data={this.state.person}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                        keyExtractor={({ id }, index) => id}
                    />
                    {/* <Text>{JSON.stringify(this.state.person)}</Text> */}
                </ScrollView>
            </View>
        );
    }
}

export default Shop;