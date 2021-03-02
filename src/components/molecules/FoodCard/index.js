import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, name, rating}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.foodPhoto} source={image} />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{name}</Text>
        <Rating number={rating} />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 250,
    overflow: 'hidden',
    marginRight: 24,
  },
  foodPhoto: {
    width: 250,
    height: 140,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  contentContainer: {
    padding: 12,
  },
});
