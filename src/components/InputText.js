import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TextInput
          onChange={this.props.onChangeInput}
          onSubmitEditing={this.props.onSubmitEditing}
          style={styles.form}
          placeholder={this.props.placeholder}
          value={this.props.value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    borderColor: '#82ccdd',
    borderBottomWidth: 1,
    color: '#82ccdd',
    fontSize: 18,
  },
});
