import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {Button, Block, Text} from '../components';
import {theme} from '../constants';
import Exterior from "./Exterior";

class Interior extends Component {
    state = {
        loading: false,
        type: 'B&W',
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
        if (this.state.type === 'B&W') {
            return ('$58,700')
        } else {
            return ('$57,700')
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
                    <Block row flex={0.05}>

                        <Text title medium style={{paddingRight: theme.sizes.base, paddingLeft: theme.sizes.base}}
                              black>1. Car</Text>
                        <Text title medium black style={{paddingRight: theme.sizes.base}}>2. Exterior</Text>
                        <View style={{borderBottomColor: '#D01000', borderBottomWidth: 2}}>
                            <Text title medium black style={{paddingRight: theme.sizes.base}}>3. Interior</Text>
                        </View>
                        <Text title regular gray>4. Autopilot</Text>
                    </Block>
                    <Block color='gray2' flex={0.5} style={{marginTop: 0}}>
                        <Image
                            source={require('../assets/images/interior.png')}
                            style={{position: 'absolute', left: -25, width: 470, top: 0}}
                        />
                    </Block>
                    <Block flex={0.4} color='white' style={{
                        borderRadius: 50,
                        marginTop: -30,
                        paddingLeft: theme.sizes.base,
                        paddingRight: theme.sizes.base
                    }}>
                        <Block flex={2} style={{marginBottom: theme.sizes.padding, paddingTop: 40}}>
                            <Text gray regular h3>Select Interior</Text>
                            <Block row style={{paddingTop: 20}}>
                                <Block flex={0.65}>
                                    <TouchableOpacity
                                        onPress={() => this._onPressButton('B&W')}
                                    >
                                        <Text h4 regular gray
                                              style={[type === 'B&W' ? styles.activeText : null]}>Black And White</Text>
                                        <Text h3 regular gray
                                              style={[type === 'B&W' ? styles.activePrice : null]}>$1,000</Text>
                                    </TouchableOpacity>
                                    <Block row center style={{paddingTop: 30}}>
                                        {illustrations.map((item) => {
                                            return (
                                                <Button flex={1} key={item.id} onPress={() => this._onPressButtonId(item.id)}
                                                        style={{paddingRight: 30}}>
                                                    <Image source={item.source}
                                                           style={[selected === item.id ? styles.selected : null]}/>
                                                </Button>);
                                        })}
                                    </Block>
                                </Block>
                                <Block flex={0.35}>
                                    <TouchableOpacity
                                        onPress={() => this._onPressButton('Black')}
                                    >
                                        <Text h4 regular gray style={[type === 'Black' ? styles.activeText : null]}>All
                                            Black</Text>
                                        <Text h3 regular gray
                                              style={[type === 'Black' ? styles.activePrice : null]}>Included</Text>
                                    </TouchableOpacity>
                                </Block>
                            </Block>
                        </Block>
                        <Block flex={1} style={{paddingLeft: theme.sizes.base,
                            paddingRight: theme.sizes.base}}>
                            <Block row style={{paddingTop: 15}}>
                                <Text flex={0.5} style={{paddingTop: 20, paddingRight: 20}} regular
                                      h4>{this.handlePrice()}</Text>
                                <Button flex={0.5} order onPress={() => navigation.navigate('Autopilot')}
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

Interior.defaultProps = {
    illustrations: [
        {id: 0, source: require('../assets/images/Rectangle_4.png')},
        {id: 1, source: require('../assets/images/Rectangle_1.png')},
    ]
};
export default Interior;
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
