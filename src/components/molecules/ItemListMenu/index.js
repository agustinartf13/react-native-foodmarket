import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcBtnNext } from '../../../assets';

const ItemListMenu = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <IcBtnNext />
        </View>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202'
    }
});
