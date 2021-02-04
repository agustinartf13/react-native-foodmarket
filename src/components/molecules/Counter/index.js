import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBtnPlus, IcBtnMinus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <IcBtnMinus />
      </TouchableOpacity>
      <Text style={styles.textCounter}>14</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <IcBtnPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCounter: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
