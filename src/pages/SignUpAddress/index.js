import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import { setLoading, signUpAction } from '../../redux/action';
import {showMessage, useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  console.log('register: ', registerReducer);

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state) => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register: ', data);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));

    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
    //   .then((res) => {
    //     console.log('data success: ', res.data);
    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer);

    //       Axios.post(
    //         'http://foodmarket-backend.buildwithangga.id/api/user/photo',
    //         photoForUpload,
    //         {
    //           headers: {
    //             Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         },
    //       )
    //         .then((resUpload) => {
    //           console.log('success: ', resUpload);
    //         })
    //         .catch((err) => {
    //           showMessage('Upload photo tidak berhasil', err);
    //         });
    //     }
    //     dispatch(setLoading(false));
    //     showMessage('Success Sign Up', 'success');
    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch((err) => {
    //     dispatch(setLoading(false));
    //     console.log('error', err?.response?.data?.message);
    //     showMessage('Error Sign Up');
    //   });
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
