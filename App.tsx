import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import FBLoginButton from './FacebookLogin';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>SUNIL</Text>
          <Text style={styles.label}>
            Welcome to the Facebook SDK for React Native!
          </Text>
          <FBLoginButton />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
    color: 'black',
  },
});

export default App;
