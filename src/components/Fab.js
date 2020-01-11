import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonStyles from '../themes/CommonStyles';

export default class Fab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{alignItems: 'flex-end'}}>
        <Text
          onPress={this.props.onPress}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: CommonStyles.colors.success,
            width: 60,
            height: 60,
            borderRadius: 100,
            margin: 20,
            padding: 10,
            textAlign: 'center',
          }}>
          <Icon name="plus" color={CommonStyles.colors.white} size={30} />
        </Text>
      </View>
    );
  }
}
