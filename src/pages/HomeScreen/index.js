import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProfileAccount from '../ProfileAccount';
import Saldo from '../Saldo';
import Trasnfer from '../Transfer';
import Mutation from '../Mutation';
import DateMutation from '../DateMutation';
import Setting from '../Setting';
import Help from '../Help';
import Terms from '../Terms';
import Logout from '../Logout';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ProfileAccount />
                <Saldo />
                <Trasnfer />
                <Mutation />
                <DateMutation />
                <View style={styles.listItem}>
                    <Setting />
                    <Help />
                    <Terms />
                    <Logout />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edece8',
    },
    listItem: {
        marginTop: 4,
    },
})
