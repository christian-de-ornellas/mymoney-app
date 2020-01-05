import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommonStyles from '../themes/CommonStyles';
import Button from '../components/Button';
class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Home</Text>
        <Button
          title="Faturamento"
          onPress={() => navigation.navigate('Billing')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: CommonStyles.fontBold,
  },
});

export default Home;
