import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import CommonStyles from '../themes/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.background,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name={this.props.icon}
          size={60}
          color={CommonStyles.colors.primary}
        />
        <Text
          style={{
            color: this.props.color,
            fontFamily: CommonStyles.fontDefault,
            fontSize: 20,
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            color: this.props.color,
            fontFamily: CommonStyles.fontDefault,
            fontSize: 30,
          }}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}
