import React, { Component } from 'react';
import { ScrollView  , View , Text} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux'

class PhotoList extends Component{
    render(){
        return(<View>

        </View>)
    }
}


const mapStateToProps = (state) => {
    return { caption : state.photo.caption , image : state.photo.image }
};

export default  connect(mapStateToProps,{}) (PhotoList);