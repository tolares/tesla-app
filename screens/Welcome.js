import React, {Component} from 'react'
import {Animated, Dimensions, Image, FlatList, Modal, StyleSheet, ScrollView} from 'react-native';

import {Button, Block, Text} from '../components';
import {theme} from '../constants';

class Welcome extends Component {
    static navigationOptions = {
        header: null,
    }

    scrollX = new Animated.Value(0);

    state = {
        showTerms: false,
    }

    render() {
        const {navigation} = this.props;

        return (
            <Block color="black">
                <Block center bottom flex={0.4}>
                    <Image source={require('../assets/images/logo-grey.png')}
                           style={{marginBottom: theme.sizes.padding}}/>
                    <Text h2 center white light>
                        Tesla
                    </Text>
                    <Text h1 center white regular style={{marginTop: theme.sizes.padding / 2}}>
                        Model Y
                    </Text>
                </Block>
                <Block center middle>
                    <Image
                        source={require('../assets/images/car-black.png')}
                    />
                    <Block row style={{marginBottom: theme.sizes.padding}}>
                        <Block center flex={0.5} style={{
                            borderRightWidth: 1,
                            borderRightColor: 'white',
                            height: 50
                        }}>
                            <Text h2 medium white>300 mi</Text>
                            <Text regular white>Range (EPA est)</Text>
                        </Block>
                        <Block center flex={0.5}>
                            <Text h2 medium white>AWD</Text>
                            <Text regular white>Dual motor</Text>
                        </Block>
                    </Block>
                    <Block row style={{marginTop: theme.sizes.padding}}>
                        <Text h3 gray regular>Acceleration:</Text><Text h3 white regular> 0-60 mph in 3.5s</Text>
                    </Block>
                    <Block row>
                        <Text h3 gray regular>Top speed:</Text><Text h3 white regular> Up to 150mph</Text>
                    </Block>
                </Block>
                <Block black middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button shadow onPress={() => navigation.navigate('Car')}>
                        <Text center medium white>ORDER NOW</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}


export default Welcome;

const styles = StyleSheet.create({
    stepsContainer: {
        position: 'absolute',
        bottom: theme.sizes.base * 3,
        right: 0,
        left: 0,
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },
})
 
