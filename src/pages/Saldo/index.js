import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Saldo = () => {
    return (
        <View style={styles.saldo}>
            <Ionicons style={styles.icon} size={33} name='ios-card' />
            <Text>Saldo</Text>
            <Text style={{marginLeft: 165}}>Rp. 302.976.000</Text>
        </View>
    )
}

export default Saldo;

const styles = StyleSheet.create({
    saldo: {
        marginTop: 6,
        height: 65,
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
