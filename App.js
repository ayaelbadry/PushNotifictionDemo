import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';


class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text> Push Notification Demo</Text>
      </View>
      
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default App;
