import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

export default class Car extends Component {
  state = {
    loading: false,
    type: 'performance',
  }
  _onPressButton(value) {
    this.setState({
      type: value
    });
  }

  handlePrice(){
    if(this.state.type === 'performance'){
      return('$55,700')
    }else{
      return('$46,700')
    }
  }

  render() {
    const {
      type,
    } = this.state;
    const { navigation } = this.props;
    const { loading } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <View style={styles.signup} behavior="padding">
        <Block block column>
          <Block row flex={0.05}>
            <View style={{borderBottomColor: '#D01000', borderBottomWidth: 2}}>
              <Text title medium style={{paddingRight: theme.sizes.base,paddingLeft: theme.sizes.base}} black>1. Car</Text>
            </View>
            <Text title regular gray style={{paddingRight: theme.sizes.base }}>2. Exterior</Text>
            <Text title regular gray style={{paddingRight: theme.sizes.base }}>3. Interior</Text>
            <Text title regular gray>4. Autopilot</Text>
          </Block>
          <Block color='gray2' flex={0.51} style={{marginTop: 0}}>
            <Text h3 regular gray3 style={{paddingLeft: theme.sizes.base, paddingTop: 40, paddingBottom: 40}} >Select Your Car</Text>
            <Image
                source={require('../assets/images/car-red.png')} style={{position: 'absolute', left:-25, width: 470, top: 40}}
            />
            <Block row style={{marginTop: 180, paddingLeft: theme.sizes.base}}>
              <Block flex={0.5}>
                <TouchableOpacity
                    onPress={() => this._onPressButton('performance')}
                >
                  <Text h4 regular gray style={[type === 'performance' ? styles.activeText : null]}>Performance</Text>
                  <Text h3 regular gray style={[type === 'performance' ? styles.activePrice : null]}>$55,700</Text>
                </TouchableOpacity>
              </Block>
              <Block flex={0.5}>
                <TouchableOpacity
                    onPress={() => this._onPressButton('long')}
                >
                  <Text h4 regular gray style={[type === 'long' ? styles.activeText : null]}>Long Range</Text>
                  <Text h3 regular gray style={[type === 'long' ? styles.activePrice : null]}>$46,700</Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
          <Block flex={0.4} color='white' style={{borderRadius: 50, marginTop: -30}}>
            <Block flex={1} row style={{marginBottom: theme.sizes.padding, paddingTop: 40}}>
              <Block center flex={0.5} style={{
                borderRightWidth: 1,
                borderRightColor: '#979797',
                height: 50
              }}>
                <Text h2 medium black>3.5 s</Text>
                <Text regular black>0-60 mph</Text>
              </Block>
              <Block center flex={0.5}>
                <Text h2 medium black>150mph</Text>
                <Text regular black>Top Speed</Text>
              </Block>
            </Block>
            <Block flex={2} style={{paddingLeft: theme.sizes.base*2, paddingRight: theme.sizes.base*2}}>
              <Text regular gray>Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive
                systems, these two motors digitally control torque to the front and rear wheels—for far better handling
                and traction control.</Text>
              <Block row style={{paddingTop: 15}}>
                <Text flex={0.5} style={{paddingTop: 20, paddingRight: 20}} regular h4>{this.handlePrice()}</Text>
                <Button flex={0.5} order onPress={() => navigation.navigate('Exterior')} style={{width: 190}}>
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
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
})
