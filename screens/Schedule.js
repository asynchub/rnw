import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import ToggleButton from '../components/ToggleButton';

export default class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/hero.png')}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>React Europe Conference</Text>
          <ToggleButton
            items={['THURSDAY', 'FRIDAY']}
            value={'THURSDAY'}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: null,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 42,
    marginBottom: 10,
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
  }
});
