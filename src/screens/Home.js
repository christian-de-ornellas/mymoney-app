import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.brand}>My Money</Text>
        <View style={styles.balance}>
          <Text style={styles.ballanceText}>Meu Saldo: R$ 200,00</Text>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
