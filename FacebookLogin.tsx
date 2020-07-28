/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    const handleLoginFinish = (error: any, result: any) => {
      if (error) {
        console.log('Login failed with error: ' + error.message);
      } else if (result.isCancelled) {
        console.log('Login was cancelled');
      } else {
        console.log(
          'Login was successful with permissions: ' + result.grantedPermissions,
        );
      }
    };
    return (
      <View>
        <LoginButton
          onLoginFinished={handleLoginFinish}
          onLogoutFinished={() => console.log('User logged out')}
        />
      </View>
    );
  }
}

module.exports = FBLoginButton;
