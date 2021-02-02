import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff} from '../../../assets';
import {IcStarOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.rattingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rattingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
