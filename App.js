import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Sound1 extends Component {
  displayAlert = () => {
    alert('I am SOUND 1');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 1"
        onPress={this.displayAlert}
      />
    );
  }
}
class Sound2 extends Component {
  displayAlert = () => {
    alert('I am SOUND 2');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 2"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound3 extends Component {
  displayAlert = () => {
    alert('I am SOUND 3');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 3"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound4 extends Component {
  displayAlert = () => {
    alert('I am SOUND 4');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 4"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound5 extends Component {
  displayAlert = () => {
    alert('I am SOUND 5');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 5"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 90, marginLeft:70, marginBottom: 500, width:200, height:200 }}>
       
        <Sound1 Mycolor="blue" />
        <Text> </Text>
        <Sound2 Mycolor="teal" />
        <Text> </Text>
        <Sound3 Mycolor="purple" />
        <Text> </Text>
        <Sound4 Mycolor="magenta" />
        <Text> </Text>
        <Sound5 Mycolor="indigo" />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
