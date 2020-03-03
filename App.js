import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import PushController from './src/pushController'
let pushData = [
  {
    title: "First push",
    message: "First push message"
  },
  {
    title: "Second push",
    message: "Second push message"
  }
]

class App extends React.Component {
  renderItemFun = ({ item }) => (
    <View key={item.title}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );
  render(){
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text> Push Notification Demo</Text>
      <FlatList
              data={pushData}
              renderItem={(item ) => this.renderItemFun(item)}
              keyExtractor={(item ) => item.title}
            />
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
