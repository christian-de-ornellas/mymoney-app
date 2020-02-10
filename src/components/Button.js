import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CommonStyles from '../themes/CommonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: this.props.background
              ? this.props.background
              : CommonStyles.colors.success,
            color: this.props.color
              ? this.props.color
              : CommonStyles.colors.primary,
            paddingHorizontal: 8,
            paddingVertical: 14,
            borderRadius: 4,
            fontSize: 20,
            fontWeight: 'bold',
            shadowColor: '#000',
            shadowOffset: {width: 200, height: 100},
          }}
          onPress={this.props.onPress}>
          {this.props.title}{' '}
          <Icon name="save" size={20} color={CommonStyles.colors.white} />
        </Text>
      </TouchableOpacity>
    );
  }
}
