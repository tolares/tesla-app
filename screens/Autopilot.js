import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {Button, Block, Text} from '../components';
import {theme} from '../constants';
import Exterior from "./Exterior";

class Autopilot extends Component {
    state = {
        loading: false,
        type: 'FSD',
        selected: 1
    }

    _onPressButton(value) {
        this.setState({
            type: value
        });
    }

    _onPressButtonId(value) {
        this.setState({
            selected: value
        });
    }

    handlePrice() {
        if (this.state.type === 'FSD') {
            return ('$63,700')
        } else {
            return ('$61,700')
        }
    }

    render() {
        const {
            type,
        } = this.state;
        const {navigation, illustrations} = this.props;
        const {loading, selected} = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <View style={styles.signup} behavior="padding">
                <Block block column>
                    <Block row flex={0.05} color='white' style={{zIndex: 3}}>

                        <Text title medium style={{paddingRight: theme.sizes.base, paddingLeft: theme.sizes.base}}
                              black>1. Car</Text>
                        <Text title medium black style={{paddingRight: theme.sizes.base}}>2. Exterior</Text>
                        <Text title medium black style={{paddingRight: theme.sizes.base}}>3. Interior</Text>
                        <View style={{borderBottomColor: '#D01000', borderBottomWidth: 2}}>
                            <Text title medium black>4. Autopilot</Text>
                        </View>
                    </Block>
                    <Block color='gray2' flex={0.55} style={{marginTop: 0}}>
                        <Image
                            source={require('../assets/images/image.png')}
                            style={{position: 'absolute', width: 474, top: -100, zIndex: 1}}
                        />
                    </Block>
                    <Block flex={0.4} color='white' style={{
                        borderRadius: 50,
                        marginTop: -30,
                        paddingLeft: theme.sizes.base,
                        paddingRight: theme.sizes.base
                    }}>
                        <Block flex={2} style={{marginBottom: theme.sizes.padding, paddingTop: 40}}>
                            <Text gray regular h3>Autopilot</Text>
                            <Block row style={{paddingTop: 20}}>
                                <Block flex={0.65}>
                                    <TouchableOpacity
                                        onPress={() => this._onPressButton('FSD')}
                                    >
                                        <Text h4 regular gray
                                              style={[type === 'FSD' ? styles.activeText : null]}>Full
                                            Self-Driving</Text>
                                        <Text h3 regular gray
                                              style={[type === 'FSD' ? styles.activePrice : null]}>$5,000</Text>
                                    </TouchableOpacity>
                                </Block>
                                <Block flex={0.35}>
                                    <TouchableOpacity
                                        onPress={() => this._onPressButton('Auto')}
                                    >
                                        <Text h4 regular gray
                                              style={[type === 'Auto' ? styles.activeText : null]}>Autopilot</Text>
                                        <Text h3 regular gray
                                              style={[type === 'Auto' ? styles.activePrice : null]}>$3,000</Text>
                                    </TouchableOpacity>
                                </Block>
                            </Block>
                            <Block>
                                <Text regular gray>Automatic driving from highway on-ramp to off-ramp including
                                    interchanges and overtaking slower cars.</Text>
                            </Block>
                        </Block>
                        <Block flex={1.5} style={{
                            paddingLeft: theme.sizes.base,
                            paddingRight: theme.sizes.base,
                            marginTop: -40
                        }}>
                            <Block row style={{paddingTop: 15}}>
                                <Text flex={0.5} style={{paddingTop: 20, paddingRight: 20}} regular
                                      h4>{this.handlePrice()}</Text>
                                <Button flex={0.5} order onPress={() => navigation.navigate('Summary')}
                                        style={{width: 190}}>
                                    <Text title center medium black>NEXT</Text>
                                </Button>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </View>
        )
    }
}

Autopilot.defaultProps = {
    illustrations: [
        {id: 0, source: require('../assets/images/Rectangle_4.png')},
        {id: 1, source: require('../assets/images/Rectangle_1.png')},
    ]
};
export default Autopilot;
const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: 'center',
    },
    activePrice: {
        color: '#D01000'
    },
    activeText: {
        color: '#000'
    },
    selected: {
        borderColor: '#C30F00',
        borderWidth: 3,
        borderRadius: 25
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent,
    }
})
