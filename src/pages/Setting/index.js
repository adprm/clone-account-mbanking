import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Setting = () => {
    return (
        <View style={styles.list}>
            <Ionicons style={styles.icon} size={33} name='ios-cog' />
            <Text>Pengaturan</Text>
        </View>
    )
}

export default Setting;

const styles = StyleSheet.create({
    icon: {
        color: '#015daa',
        marginLeft: 10,
        marginRight: 14,
    },
    list: {
      marginTop: 1,
      height: 60,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
    }
})
