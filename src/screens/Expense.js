import React, {Component} from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native';
import Balance from '../components/Balance';
import CommonStyles from '../themes/CommonStyles';
import {FlatList} from 'react-native-gesture-handler';
import Fab from '../components/Fab';
import InputText from '../components/InputText';
import api from '../services/api';
import Button from '../components/Button';

export default class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      expenseValue: 0,
      modalVisible: true,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
    try {
      const response = await api.get('/payment/list');
      const {payment} = response.data;

      const sum = (accumulator, currentValue) => accumulator + currentValue;
      const value = payment.map(all => all.value).reduce(sum);

      return this.setState({expenseValue: value});
    } catch (err) {
      console.error('Error: ', err);
    }
  };

  saveExpense = async (...dataExpense) => {
    const save = await api.post('/payment/create', {dataExpense});
    return save;
  };

  componentDidMount() {
    this.getExpenses();
    this.expensesSum();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex: 1}}>
            <View>
              <View
                style={{
                  backgroundColor: CommonStyles.colors.danger,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    fontSize: 18,
                    color: CommonStyles.colors.white,
                  }}>
                  Adicione as suas despesas
                </Text>
              </View>
              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    color: CommonStyles.colors.text,
                  }}>
                  Origem (Obrigatório):
                </Text>
                <InputText placeholder="Ex: Supermercado my money" />
              </View>

              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    color: CommonStyles.colors.text,
                  }}>
                  Título (Obrigatório):
                </Text>
                <InputText
                  placeholder="Ex: Compras do mês"
                  onSubmitEditing={this.saveExpense()}
                />
              </View>

              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    color: CommonStyles.colors.text,
                  }}>
                  Descrição (Opcional):
                </Text>
                <InputText placeholder="Ex: Temos tudo para passar o mês" />
              </View>

              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    color: CommonStyles.colors.text,
                  }}>
                  Valor (Obrigatório):
                </Text>
                <InputText placeholder="Ex: 650.90" />
              </View>

              <View style={{margin: 20}}>
                <Text
                  style={{
                    fontFamily: CommonStyles.fontDefault,
                    color: CommonStyles.colors.text,
                  }}>
                  Categoria (Obrigatório):
                </Text>
                <InputText placeholder="Ex: Alimentação" />
              </View>

              <View style={{margin: 20}}>
                <Button title="SALVAR" color={CommonStyles.colors.white} />
              </View>
            </View>
          </View>
        </Modal>
        <Balance
          title="Despesas"
          background={CommonStyles.colors.danger}
          value={this.state.expenseValue}
          color={CommonStyles.colors.primary}
          icon="file-invoice-dollar"
          Supermercado
          my
          money
        />
        <FlatList
          data={this.state.data}
          keyExtractor={item => item._id}
          renderItem={({item}) => this.items({...item})}
        />
        <Fab
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
      </View>
    );
  }
}
