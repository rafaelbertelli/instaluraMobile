/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import Goku from './resources/img/goku.jpg';

const _width = Dimensions.get('screen').width;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render () {

    const box = [
      { id: '1', 'name': 'Hécate' },
      { id: '2', 'name': 'Cátia' },
      { id: '3', 'name': 'Elimba' },
    ]

    return (
      <FlatList
      data={box}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.userPresentation}>
            <Image source={Goku} style={styles.profilePhoto} />
            <Text style={styles.welcome}>{item.name}</Text>
          </View>
          <Image source={Goku} style={{ width: _width, height: _width }} />
        </View>
      )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  userPresentation: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});
