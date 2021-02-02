import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { foodDummy3 } from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 8,
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{
            height: 60,
            width: 60,
            borderRadius: 8,
            overflow: 'hidden',
            marginRight: 12,
          }}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              color: '#020202',
            }}>
            Soup Bumil
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Poppins-Regular',
              color: '#8d92a3',
            }}>
            IDR 289.000
          </Text>
        </View>
        <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
