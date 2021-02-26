import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="1abc9c" />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
