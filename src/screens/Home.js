import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

class Home extends Component {
  render() {
    <View style={styles.container}>
      <Text style={styles.brand}>My Money</Text>
      <View style={styles.balance}>
        <Text style={styles.ballanceText}>Meu Saldo: R$ 200,00</Text>
      </View>
    </View>;
  }
}

const styles = Stylesheet.create({
  container: {
    justifyContent: 'space-around',
  },
  brand: {
    backgroundColor: '#82ccdd',
    color: '#fff',
    padding: 20,
    fontSize: 20,
  },

  balance: {
    alignItems: 'center',
    margin: 10,
  },
  ballanceText: {
    fontSize: 20,
    color: '#60a3bc',
  },
});

export default Home;
