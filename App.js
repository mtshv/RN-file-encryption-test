/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
  TextInput,
} from 'react-native';

import Video from 'react-native-video';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

export default class App extends React.Component {
  state = {
    src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    fileUri: null,
    base64: null,
    text: 'Text to save',
    videointxt: '',
  };

  render() {
    const {src, refreshing, base64, text} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.button}>
                  <Button
                    title="Download video"
                    color="#f194ff"
                    onPress={this.downloadVideo}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    title="File to base64"
                    color="#000"
                    onPress={this.readAsStringAsync}
                  />
                </View>

                <TextInput
                  style={{
                    height: 40,
                    margin: 20,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
                  onChangeText={text => this.onChangeText(text)}
                  value={text}
                />

                <View style={styles.button}>
                  <Button title="encrypt" color="#ccc" onPress={this.encrypt} />
                </View>

                <View style={styles.button}>
                  <Button title="decrypt" color="#bbb" onPress={this.decrypt} />
                </View>

                <Text>Current Video Source is: {src}</Text>
                {refreshing ? (
                  <ActivityIndicator animating={true} size="large" />
                ) : null}

                {base64 ? (
                  <TextInput
                    multiline
                    editable={false}
                    style={{height: 200, borderColor: 'gray', borderWidth: 1}}>
                    {base64}
                  </TextInput>
                ) : null}

                <Video
                  source={{uri: src}}
                  ref={ref => {
                    this.player = ref;
                  }}
                  muted={true}
                  style={{height: 300}}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
});
