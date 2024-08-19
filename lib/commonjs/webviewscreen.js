"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeWebview = require("react-native-webview");
var _native = require("@react-navigation/native");
var _jsxRuntime = require("react/jsx-runtime");
const WebViewScreen = () => {
  const url = "https://www.google.com";
  const navigation = (0, _native.useNavigation)();
  const webViewRef = (0, _react.useRef)(null);
  const handleNavigationChange = navState => {
    const {
      url: currentUrl
    } = navState;

    // Check if the current URL matches the redirect URL you're looking for
    if (currentUrl.includes('https://www.npmjs.com/')) {
      // Redirect to the previous screen
      navigation.goBack();

      // Optionally, show an alert or perform additional actions
      _reactNative.Alert.alert('Success', 'Redirecting to the previous screen');
    } else if (currentUrl.includes('your-redirect-url.com/failure')) {
      // Optionally, handle failure case and navigate or show an alert
      _reactNative.Alert.alert('Failed', 'Transaction failed, returning to the previous screen');
      navigation.goBack();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.container,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeWebview.WebView, {
      ref: webViewRef,
      source: {
        uri: url
      },
      onNavigationStateChange: handleNavigationChange // Add this prop
    })
  });
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
var _default = exports.default = WebViewScreen;
//# sourceMappingURL=webviewscreen.js.map