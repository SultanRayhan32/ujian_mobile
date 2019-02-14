import React, { Component } from 'react';
import { ScrollView  , View , Text} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    static navigationOptions = {
        drawerLabel: 'Employee List',
    };

    renderRow = ({item}) => {
        return <AlbumDetail employee={this.state.albums} navigation={this.props.navigation} />
    }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                console.log(response.data);
                this.setState({ albums: response.data });
            });
    }

    renderAlbums = () => {
        const listJSX = this.state.albums.map((item) => {
            return (
            
                <AlbumDetail key={item.title} albums={item} />
            
                
            );
        });

        return listJSX;
    };

    render() {
        return (
           <ScrollView>
               <Header
                        placement="left"
                        leftComponent={{ 
                            icon: 'menu', 
                            color: '#fff', 
                            onPress: () => this.props.navigation.toggleDrawer() 
                        }}
                        centerComponent={{ text: 'List Employee', style: { color: '#fff' }}}
                />
               {/* {this.renderAlbums()} */}
           </ScrollView>
        );
    }
}

export default AlbumList;
