/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import Post from './src/components/post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()

    this.state = {
      fotos: []
    }
  }

  componentDidMount () {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(res => res.json())
      .then(json => this.setState({ fotos: json }))
      .catch(err => console.err(err))
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.fotos}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({ item }) => (
            <Post foto={item} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})
