import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import AddPhotoForm from './AddPhotoForm';
import { Card, CardSection, Button } from './common';

class AddNewList extends Component{
    static navigationOptions = {
        drawerLabel: 'Add Photo'
    };
    render(){
        return(
            <View>
                <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'menu', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.toggleDrawer() 
                    }}
                    centerComponent={{ text: 'Add Employee', style: { color: '#fff' } }}
                    rightComponent={{ 
                        icon: 'home', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Card>
                    <AddPhotoForm />
                    
                    <CardSection>
                        <Button>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default AddNewList;