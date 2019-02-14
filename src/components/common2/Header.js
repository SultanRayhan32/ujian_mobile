import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render(){
        const { viewStyle, textStyle } = styles;
        return(
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

export default Header;

const styles = {
    viewStyle: {
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
  };