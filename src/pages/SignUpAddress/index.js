import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Select, TextInput } from '../../components'

const SignUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
        <Header title="Address" subTitle="Make sure it's valid" onBack onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <TextInput label="Phone No" placeholder="Type your number"/>
          <Gap height={16}/>
          <TextInput label="Address" placeholder="Type your address"/>
          <Gap height={16}/>
          <TextInput label="House No" placeholder="Type your house no"/>
          <Gap height={16}/>
          <Select label="City"/>
          <Gap height={24}/>
          <Button label="Continue" onPress={() => navigation.navigate('SuccessSignUp')} />
        </View>
      </View>
    )
}

export default SignUpAddress

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
})
