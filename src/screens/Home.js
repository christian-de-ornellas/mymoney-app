import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
        <Button
          title="Faturamento"
          onPress={() => navigation.navigate('Billing')}
        />
      </View>
    );
  }
}

export default Home;
