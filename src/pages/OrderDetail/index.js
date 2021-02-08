import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { foodDummy1 } from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = ({navigation}) => {
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
     <ItemListFood type="order-summary" image={foodDummy1} name="Sop Bumil" price="2.000.000" items={14} />
     <Text style={styles.label}>Detail Transaction</Text>
     <ItemValue label="Cherry Healty" value="IDR 18.390.000" />
     <ItemValue label="Driver" value="IDR 50.000" />
     <ItemValue label="Tax 10%" value="IDR 1.800.390" />
     <ItemValue label="Total Price" value="IDR 390.803.000" valueColor='#1abc9c' />
   </View>
   <View style={styles.content}>
   <Text style={styles.label}>Deliver to:</Text>
   <ItemValue label="Name" value="Agustina Saputra" />
   <ItemValue label="Phone No." value="0821 4664 0882" />
   <ItemValue label="Address" value="jln Yeh Gangga" />
   <ItemValue label="House No." value="Permai No. 13" />
   <ItemValue label="City" value="Tabanan" />
 </View>
 <View style={styles.content}>
     <Text style={styles.label}>Order Status:</Text>
     <ItemValue label="#FM209391" value="Paid" valueColor='#1abc9c' />
   </View>
 <View style={styles.btnContainer}>
     <Button label="Cancel My Order" color="#D9435E" textColor="white" onPress={() => navigation.replace('SuccessOrder')} />
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
    marginBottom: 24
  },
});
