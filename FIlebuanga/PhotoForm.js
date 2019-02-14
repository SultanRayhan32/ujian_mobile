import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from '../src/components/common';
// import { stat } from 'fs';

class PhotoForm extends Component{
    render(){
        return(<View>
            <CardSection>
                <Input 
                    label="Caption" 
                    placeholder="Tulis Captiomu"
                    // value={this.props.name}
                    onChangeText={this.onNameChange} 
                />
            </CardSection>
            <CardSection>
                <Input 
                    label="URL image" 
                    placeholder="Link Image"
                    // value={this.props.phone}
                    onChangeText={this.onPhoneChange} 
                />
            </CardSection>
            {/* <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerLabelStyle}>Shift</Text>
                <Picker
                    style={{ width: '100%' }}
                    selectedValue={this.props.shift}
                    onValueChange={day => this.props.employeeUpdate('shift', day)}
                >
                    <Picker.Item label="Sunday" value="Sunday" />
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                </Picker>
            </CardSection> */}
        </View>)
    }
}


const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    return { caption : state.photo.caption , image : state.photo.image }
};

export default connect(mapStateToProps ,{}) (PhotoForm);