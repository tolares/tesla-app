import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import { Block } from './components';

// import all used images
const images = [
  require('./assets/icons/back.png'),

];


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontsLoaded: false,
  }

  loadFonts() {
    return Font.loadAsync({
      "Gotham-Medium": require("./assets/fonts/GothaProMed.otf"),
      "Gotham-Bold": require("./assets/fonts/GothaProBol.otf"),
      "Gotham-Light": require("./assets/fonts/GothaProLig.otf"),
      "Gotham-Regular": require("./assets/fonts/GothaProReg.otf")
    });
  }

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    await this.loadFonts();
    this.setState({ fontsLoaded: true });

    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen && !this.state.fontsLoaded) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
});
