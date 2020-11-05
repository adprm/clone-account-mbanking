import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Terms = () => {
    return (
        <View style={styles.list}>
            <Ionicons style={styles.icon} size={33} name='ios-paper' />
            <Text style={styles.descSaldo}>Syarat & Ketentuan</Text>
        </View>
    )
}

export default Terms;

const styles = StyleSheet.create({
    icon: {
        color: '#015daa',
        marginLeft: 10,
        marginRight: 14,
    },
    // list
    list: {
      marginTop: 1,
      height: 60,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
    }
})
