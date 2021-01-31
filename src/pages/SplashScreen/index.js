import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('SignIn')
    }, 2000);
  }, []);
  return (
    <View style={styles.logo}>
      <Logo />
      <Gap height={18} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
