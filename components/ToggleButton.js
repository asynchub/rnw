import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';

export default class ToggleButton extends React.Component {
  renderItem = (item, index, list) => {
    return (
      <View
      key={item}
      style={[
        styles.button,
        {
          marginLeft: index !== 0 ? 10 : 0
        }
      ]}>
        <Text style={styles.text}>{item}</Text>
      </View>
    )
  }

  render() {
    const { items, value } = this.props;
    return (
      <View style={styles.container}>
        {items.map(this.renderItem)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'purple',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 42,
  }
});
