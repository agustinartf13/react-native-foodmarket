import Axios from 'axios';
import { showMessage } from '../../utils';
import { setLoading } from './global';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      console.log('data success: ', res.data);
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((resUpload) => {
            console.log('success: ', resUpload);
          })
          .catch((err) => {
            showMessage('Upload photo tidak berhasil', err);
          });
      }
      dispatch(setLoading(false));
      showMessage('Success Sign Up', 'success');
      navigation.replace('SuccessSignUp');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('error', err?.response?.data?.message);
      showMessage('Error Sign Up');
    });
};
