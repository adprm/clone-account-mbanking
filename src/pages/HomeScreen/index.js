import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileAccount from '../ProfileAccount';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileAccount />
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
