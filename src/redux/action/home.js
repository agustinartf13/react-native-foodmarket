import Axios from 'axios';
import {API_HOST} from '../../config';

export const getFoodData = () => (dispatch) => {
  Axios.get(`${API_HOST.url}/food`)
    .then((res) => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
