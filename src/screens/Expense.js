import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Balance from '../components/Balance';
import CommonStyles from '../themes/CommonStyles';
import {FlatList} from 'react-native-gesture-handler';
import Fab from '../components/Fab';
import api from '../services/api';

export default class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      expenseValue: 0,
    };
  }

  items = item => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: CommonStyles.colors.white,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontFamily: CommonStyles.fontDefault,
            fontSize: 16,
          }}>
          {item.title}
        </Text>
        <Text>{item.value}</Text>
      </View>
    </View>
  );

  getExpenses = async () => {
    const response = await api.get('/payment/list');
    const {payment} = response.data;
    return this.setState({data: payment});
  };

  expensesSum = async () => {
    const response = await api.get('/payment/list');
    const {payment} = response.data;

    const sum = (accumulator, currentValue) => accumulator + currentValue;
    const value = payment.map(all => all.value).reduce(sum);

    return this.setState({expenseValue: value});
  };

  componentDidMount() {
    this.getExpenses();
    this.expensesSum();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Balance
          title="Despesas"
          background={CommonStyles.colors.danger}
          value={this.state.expenseValue}
          color={CommonStyles.colors.primary}
          icon="file-invoice-dollar"
        />
        <FlatList
          data={this.state.data}
          keyExtractor={item => item._id}
          renderItem={({item}) => this.items({...item})}
        />
        <Fab
          onPress={() => {
            alert('oi');
          }}
        />
      </View>
    );
  }
}
