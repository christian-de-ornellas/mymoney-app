import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import CommonStyles from '../themes/CommonStyles';

export default class Logo extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/myMoney.png')}
          style={{width: 60, height: 60}}
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: CommonStyles.colors.white,
            fontSize: 22,
            fontFamily: CommonStyles.fontDefault,
          }}>
          My Money
        </Text>
      </View>
    );
  }
}
