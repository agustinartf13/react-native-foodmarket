import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemValue = ({label, value, valueColor='#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
  },
  value: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color,
  }),
});
