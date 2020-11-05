import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Trasnfer = () => {
    return (
        <View style={styles.list}>
            <Ionicons style={styles.icon} size={33} name='ios-cash' />
            <Text>Transfer</Text>
        </View>
    )
}

export default Trasnfer;

const styles = StyleSheet.create({
    list: {
        marginTop: 1,
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#015daa',
        marginLeft: 10,
        marginRight: 14,
    },
})
