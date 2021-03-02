import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff} from '../../../assets';
import {IcStarOn} from '../../../assets';

const Rating = ({number}) => {
  const renderStart = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn />);
      } else {
        star.push(<IcStarOff />);
      }
    }
    return star;
  };

  return (
    <View style={styles.rattingContainer}>
      <View style={styles.starContainer}>{renderStart()}</View>
      <Text>{number}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rattingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
