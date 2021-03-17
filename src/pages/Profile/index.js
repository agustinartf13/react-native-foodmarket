import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileTabSection} from '../../components/molecules';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.bioContent}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image
              style={styles.photoContainer}
              source={{uri: userProfile.profile_photo_url}}
            />
          </View>
        </View>
        <View style={styles.bio}>
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  bioContent: {backgroundColor: 'white'},
  bio: {paddingBottom: 24},
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8d92a3',
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
