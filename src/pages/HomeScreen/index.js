import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileAccount from '../ProfileAccount';
import Saldo from '../Saldo';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileAccount />
            <Saldo />
            {/* <Saldo />
            <Transfer />
            <Mutation />
            <DateMutation />
            <View style={styles.listItem}>
                <Setting />
                <Help />
                <Terms />
                <Logout />
            </View> */}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edece8',
      },
})
