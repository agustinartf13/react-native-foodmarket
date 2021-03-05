import React, { useState } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {foodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';

const FoodDetail = ({navigation, route}) => {
  const {
    name,
    picturePath,
    description,
    ingredients,
    rate,
    price,
  } = route.params;

  const [totalItem, setTotalItem] = useState(1);

  const onCounterChange = (value) => {
    console.log('counter: ', value);
    setTotalItem(value);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price</Text>
            <Number style={styles.priceTotal} number={totalItem * price} />
          </View>
          <View style={styles.button}>
            <Button
              label="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'center',
  },
  button: {
    width: 163,
  },
  priceContainer: {
    flex: 1,
  },
  labelTotal: {fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8092a3'},
  priceTotal: {fontFamily: 'Poppins-Regular', fontSize: 18, color: '#020202'},
});
