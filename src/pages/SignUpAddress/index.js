import React from 'react';
import Axios from 'axios';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const registerReducer = useSelector((state) => state.registerReducer);
  console.log('register: ', registerReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register: ', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then((res) => {
        console.log('success', res.data);
        dispatch({type: 'SET_LOADING', value: false});
        showToast('Success Sign Up', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('error', err?.response?.data?.message);
        showToast('Error Sign Up');
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1abc9c' : '#d9435e',
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it's valid"
          onBack
          onPress={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No"
            placeholder="Type your number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No"
            placeholder="Type your house no"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button label="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
});
