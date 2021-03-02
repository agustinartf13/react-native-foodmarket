import Axios from 'axios';
// import { API_HOST } from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      console.log('data success: ', res.data);

      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

      // data user & token
      storeData('token', {value: token});

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((resUpload) => {
            profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
            storeData('userProfile', profile);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch((err) => {
            showMessage('Upload photo tidak berhasil', err);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(setLoading(false));
      showMessage('Success Sign Up', 'success');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('error', err?.response?.data?.message);
      showMessage('Error Sign Up');
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  console.log('form: ', form);
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((error) => {
      dispatch(setLoading(false));
      showMessage('error', error?.response?.data?.message);
    });
};
