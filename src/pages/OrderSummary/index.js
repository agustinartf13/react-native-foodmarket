import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');


  const onCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          console.log('success checkout: ', res.data);
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch((err) => {
          console.log('error checkout: ', err);
        });
    });
  };

  const onNavChange = (state) => {
    // TODO: Use This For Production
    // const urlSuccess =
    //   'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=574&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          onBack
          subTitle="You deserve better meal"
          onPress={() => navigation.goBack()}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <View style={styles.page}>
      <Header
        title="Order Summary"
        onBack
        subTitle="You deserve better meal"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={{uri: item.picturePath}}
          type="order-summary"
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label={item.name} value={item.total} type="currency" />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1abc9c"
          type="currency"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.btnContainer}>
        <Button label="Checkout Now" onPress={onCheckOut} />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontFamily: 'Poppin-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  btnContainer: {
    paddingHorizontal: 24,
    flex: 1,
    marginTop: 24,
  },
  page: {
    flex: 1,
  },
});
