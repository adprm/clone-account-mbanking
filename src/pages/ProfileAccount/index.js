import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Profile from '../../assets/image/profile.png';

const ProfileAccount = () => {
    return (
        <View style={styles.account}>
            <Image source={Profile} style={styles.avatar} />
            <Text style={styles.name}>Aditiya Permana</Text>
        </View>
    )
}

export default ProfileAccount;

const styles = StyleSheet.create({
    account: {
        height: 85,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
      height: 60,
      width: 60,
      borderRadius: 60,
      marginRight: 14,
      marginLeft: 10,
    },
    name: {
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 4,
    },
})
