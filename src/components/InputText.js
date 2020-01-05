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
        <TextInput style={styles.form} placeholder={this.props.placeholder} />
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
