import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBtnPlus, IcBtnMinus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      setValue(value + 1);
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        setValue(value - 1);
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onCount('minus')}>
        <IcBtnMinus />
      </TouchableOpacity>
      <Text style={styles.textCounter}>{value}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onCount('plus')}>
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
