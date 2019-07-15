import React, {Component} from 'react';
import {StyleSheet, Image, View, FlatList, Animated, Dimensions} from 'react-native';

import {Button, Block, Text, Divider} from '../components';
import {theme} from '../constants';


class Exterior extends Component {
    state = {
        loading: false,
        selected: 1,
    }


    handleText(){
        if(this.state.selected === 4){
            return(
                <Block>
                    <Text h4 regular>Perl White Multi Coat</Text>
                    <Text h3 regular red>$2,000</Text>
                </Block>
            )
        }else if(this.state.selected === 3){
            return(
                <Block>
                    <Text h4 regular>Red Multi-Coat</Text>
                    <Text h3 regular red>$2,500</Text>
                </Block>
            )
        }else if(this.state.selected === 2){
            return(
                <Block>
                    <Text h4 regular>Midnight Silver Metallic</Text>
                    <Text h3 regular red>$1,500</Text>
                </Block>
            )
        }else if(this.state.selected === 1){
            return(
                <Block>
                    <Text h4 regular>Solid Black</Text>
                    <Text h3 regular red>Included</Text>
                </Block>
            )
        }else if(this.state.selected === 0){
            return(
                <Block>
                    <Text h4 regular>Deep Blue Metallic</Text>
                    <Text h3 regular red>$1,500</Text>
                </Block>
            )
        }
    }
    _onPressButton(value) {
        this.setState({
            selected: value
        });
    }

    handlePrice(){
        if(this.state.selected === 4){
            return('$57,700')
        }else if(this.state.selected === 3){
            return('$58,200')
        }else if(this.state.selected === 2){
            return('$57,200')
        }else if(this.state.selected === 1){
            return('$55,700')
        }else if(this.state.selected === 0){
            return('$57,200')
        }
    }
    render() {
        const {loading, selected} = this.state;
        const {illustrations, navigation} = this.props;

        return (
            <View style={styles.signup} behavior="padding">
                <Block block column>
                    <Block row flex={0.05}>
                        <Text title medium style={{paddingRight: theme.sizes.base, paddingLeft: theme.sizes.base}}
                              black>1. Car</Text>

                        <View style={{borderBottomColor: '#D01000', borderBottomWidth: 2}}>
                            <Text title medium style={{paddingRight: theme.sizes.base}}>2. Exterior</Text>
                        </View>
                        <Text title regular gray style={{paddingRight: theme.sizes.base}}>3. Interior</Text>
                        <Text title regular gray>4. Autopilot</Text>
                    </Block>
                    <Block color='gray2' flex={0.75} style={{marginTop: 0}}>
                        <Text h3 regular gray3
                              style={{paddingLeft: theme.sizes.base, paddingTop: 40, paddingBottom: 40}}>Select
                            Color</Text>
                        <Image
                            source={require('../assets/images/car-white.png')}
                            style={{position: 'absolute', left: -25, width: 470, top: 40}}
                        />
                        <Block style={{marginTop: 180, paddingLeft: theme.sizes.base,paddingRight: theme.sizes.base}}>
                            {this.handleText()}
                            <Block row center style={{marginTop: 0, borderBottomColor: theme.colors.gray, borderBottomWidth: 1, }}>
                                {illustrations.map((item) => {
                                    return (
                                        <Button flex={1} key={item.id} onPress={() => this._onPressButton(item.id)}
                                                style={{paddingRight: 30}}>
                                            <Image source={item.source}
                                                   style={[selected === item.id ? styles.selected : null]}/>
                                        </Button>);
                                })}
                            </Block>
                            <Block style={{paddingTop: 30}}>
                                <Text regular>20’’ Performance Wheels</Text>
                                <Text regular>Carbon fiber spoiler</Text>
                            </Block>
                        </Block>
                    </Block>
                    <Block flex={0.15} color='white' style={{borderRadius: 50, marginTop: -30}}>
                        <Block flex={2} style={{
                            paddingLeft: theme.sizes.base * 2,
                            paddingRight: theme.sizes.base * 2,
                            paddingTop: 40
                        }}>
                            <Block row style={{paddingTop: 15}}>
                                <Text flex={0.5} style={{paddingTop: 20, paddingRight: 20}} regular h4>{this.handlePrice()}</Text>
                                <Button flex={0.5} order onPress={() => navigation.navigate('Interior')}
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

Exterior.defaultProps = {
    illustrations: [
        {id: 1, source: require('../assets/images/Rectangle_1.png')},
        {id: 2, source: require('../assets/images/Rectangle_2.png')},
        {id: 0, source: require('../assets/images/Rectangle.png')},
        {id: 4, source: require('../assets/images/Rectangle_4.png')},
        {id: 3, source: require('../assets/images/Rectangle_3.png')},
    ]
};
export default Exterior;

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: 'center',
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