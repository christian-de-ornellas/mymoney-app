import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CommonStyles from '../themes/CommonStyles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: this.props.background
              ? this.props.background
              : CommonStyles.colors.success,
            color: this.props.color
              ? this.props.color
              : CommonStyles.colors.primary,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 20,
            fontSize: 20,
          }}
          onPress={this.props.onPress}>
          {' '}
          {this.props.title}{' '}
        </Text>
      </View>
    );
  }
}
