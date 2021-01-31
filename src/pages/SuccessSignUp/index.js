import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
      <ILSuccessSignUp />
      <Text style={styles.title}>Yeay! Complated</Text>
      <Gap height={6}/>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button label="Find Food" />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  }
});
