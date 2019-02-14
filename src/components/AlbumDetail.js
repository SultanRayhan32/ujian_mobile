import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
// import Card from './common/Card';
// import CardSection from './common/CardSection';
// import Button from './common/Button';
import Card from './common2/Card';
import CardSection from './common2/CardSection';
import Button from './common2/Button'

class AlbumList extends Component {
    render() {

        // const { title, artist, thumbnail_image, image, url,} = this.props.employee;
        const { title, artist, thumbnail_image, image, url, } = this.props.albums;
        const { thumbnailStyle, headerContentStyle, headerTextStyle, thumbnailContainerStyle, imageStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source={{ uri: thumbnail_image }}
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                     </View>
                </CardSection>
                <CardSection>
                    <Image
                        source={{ uri: image }}
                        style={imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
            // <View>
            //     <Text>
            //         {title}
            //     </Text>
            // </View>
        );
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    heraderContentStyle: {
        justifyContent: 'space-arround'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 370,
        width: '100%'
    }
};

export default AlbumList;
