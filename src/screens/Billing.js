import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Billing extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }
}

export default Billing;
