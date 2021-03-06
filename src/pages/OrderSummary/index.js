import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {foodDummy1} from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;

  return (
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
        <Button
          label="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
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
