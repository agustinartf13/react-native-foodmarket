import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Number from '../Number';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  items,
  price,
  rating,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // list product home page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} Items</Text>
          </>
        );
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number style={styles.price} number={price} />
              </View>
            </View>
          </>
        );
      case 'past-order':
        // item past order
        const formatedDate = new Date(date).toLocaleDateString();
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number style={styles.price} number={price} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
  },
  items: {
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
    fontSize: 13,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#8d92a3',
  },
  status: (status) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: status === 'CANCELLED' ? '#d9435e' : '1ABC9C',
  }),
  dot: {
    marginHorizontal: 3,
    height: 3,
    width: 3,
    borderRadius: 5,
    backgroundColor: '#8d92a3'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
