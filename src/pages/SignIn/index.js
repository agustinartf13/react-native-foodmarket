import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput label="Email Address" placeholder="Type your email address"/>
        <Gap height={16}/>
        <TextInput label="Password" placeholder="Type your password"/>
        <Gap height={24}/>
        <Button label="Sign In" />
        <Gap height={12}/>
        <Button label="Create New Account" color="#8d92a3" textColor="white" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingVertical: 26,
        paddingHorizontal: 24,
        marginTop: 24,
        flex: 1,
    }
});
