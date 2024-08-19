"use strict";

import { useRef } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { jsx as _jsx } from "react/jsx-runtime";
const WebViewScreen = () => {
  const url = "https://www.google.com";
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const handleNavigationChange = navState => {
    const {
      url: currentUrl
    } = navState;

    // Check if the current URL matches the redirect URL you're looking for
    if (currentUrl.includes('https://www.npmjs.com/')) {
      // Redirect to the previous screen
      navigation.goBack();

      // Optionally, show an alert or perform additional actions
      Alert.alert('Success', 'Redirecting to the previous screen');
    } else if (currentUrl.includes('your-redirect-url.com/failure')) {
      // Optionally, handle failure case and navigate or show an alert
      Alert.alert('Failed', 'Transaction failed, returning to the previous screen');
      navigation.goBack();
    }
  };
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    children: /*#__PURE__*/_jsx(WebView, {
      ref: webViewRef,
      source: {
        uri: url
      },
      onNavigationStateChange: handleNavigationChange // Add this prop
    })
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default WebViewScreen;
//# sourceMappingURL=webviewscreen.js.map