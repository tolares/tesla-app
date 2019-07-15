import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Image, View, Alert} from 'react-native';

import {Button, Block, Text} from '../components';
import {theme} from '../constants';

class Summary extends Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        loading: false,
        type: 'B&W',
        selected: 1
    }
    popUp(){
        const { navigation } = this.props;
        Alert.alert(
            'Success!',
            'Your order has been registered',
            [
                {
                    text: 'Continue', onPress: () => {
                        navigation.navigate('Welcome')
                    }
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        const {
            type,
        } = this.state;
        const {navigation} = this.props;
        const {illustrations} = this.props;
        const {loading, selected} = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

        return (
            <View style={styles.signup} behavior="padding">
                <Block block column color='black'>
                    <Block color='black' flex={0.68} style={{marginTop: 0}}>
                        <Image
                            source={require('../assets/images/car-drive.png')}
                            style={{position: 'absolute', left: -25, width: 470, top: 0}}
                        />
                    </Block>
                    <Block flex={0.32} color='black' style={{
                        borderRadius: 50,
                        marginTop: -30,
                        paddingLeft: theme.sizes.base,
                        paddingRight: theme.sizes.base
                    }}>
                        <Block flex={2} style={{marginBottom: theme.sizes.padding, paddingTop: 40}}>
                            <Text gray regular center h3>Summary</Text>
                            <Text center white medium h1 style={{paddingTop: 15}}>Your Model Y</Text>
                            <Text center white regular h2 style={{paddingTop: 15}}>$63,700</Text>
                        </Block>
                        <Block black middle margin={[0, theme.sizes.padding * 3]}>
                                <Button center onPress={() => this.popUp()}>
                                    <Image center source={require('../assets/images/apple-pay.png')} style={{borderRadius: 20,
                                        backgroundColor: '#000000',
                                        borderWidth: 2,
                                        borderColor: theme.colors.red,}}/>
                                </Button>
                        </Block>
                    </Block>
                </Block>
            </View>
        )
    }
}

Summary.defaultProps = {
    illustrations: [
        {id: 0, source: require('../assets/images/Rectangle_4.png')},
        {id: 1, source: require('../assets/images/Rectangle_1.png')},
    ]
};
export default Summary;
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
