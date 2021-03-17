import React from 'react';
import Axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

const OrderDetail = ({route, navigation}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          console.log('success cancel order: ', res);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch((err) => {
          console.log('error cancel order: ', err);
        });
    });
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <Header
          title="Payment"
          onBack
          subTitle="You deserve better meal"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            image={{uri: order.food.picturePath}}
            name={order.food.name}
            price={order.food.price}
            items={order.quantity}
          />
          <Text style={styles.label}>Detail Transaction</Text>
          <ItemValue
            label={order.food.name}
            value={order.food.price * order.quantity}
            type="currency"
          />
          <ItemValue label="Driver" value={50000} type="currency" />
          <ItemValue
            label="Tax 10%"
            value={(10 / 100) * order.total}
            type="currency"
          />
          <ItemValue
            label="Total Price"
            value={order.total}
            valueColor="#1abc9c"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={order.user.name} />
          <ItemValue label="Phone No." value={order.user.phoneNumber} />
          <ItemValue label="Address" value={order.user.address} />
          <ItemValue label="House No." value={order.user.houseNumber} />
          <ItemValue label="City" value={order.user.city} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue
            label={`#${order.id}`}
            value={order.status}
            valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            label="Cancel My Order"
            color="#D9435E"
            textColor="white"
            onPress={onCancel}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
    marginBottom: 24,
  },
});
