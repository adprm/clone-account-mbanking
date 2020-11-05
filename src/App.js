import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/HomeScreen';

const Saldo = () => {
  return (
    <View style={styles.saldo}>
      <Ionicons style={styles.icon} size={33} name='ios-card' />
      <Text style={styles.descSaldo}>Saldo</Text>
      <Text style={{marginLeft: 165}}>Rp. 302.976.000</Text>
    </View>
  );
}

const Transfer = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-cash' />
      <Text style={styles.descSaldo}>Transfer</Text>
    </View>
  )
}

const Mutation = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-list' />
      <Text style={styles.descSaldo}>Daftar Mutasi</Text>
    </View>
  )
}

const DateMutation = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-calendar' />
      <Text style={styles.descSaldo}>Tanggal Mutasi</Text>
    </View>
  )
}

const Setting = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-cog' />
      <Text style={styles.descSaldo}>Pengaturan</Text>
    </View>
  )
}

const Help = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-help-circle-outline' />
      <Text style={styles.descSaldo}>Bantuan</Text>
    </View>
  )
}

const Terms = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-paper' />
      <Text style={styles.descSaldo}>Syarat & Ketentuan</Text>
    </View>
  )
}

const Logout = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={33} name='ios-log-out' />
      <Text style={styles.descSaldo}>Keluar</Text>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Account" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#015daa'
          },
          headerTintColor: '#fff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  // Saldo
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

  // ListItem
  listItem: {
    marginTop: 4,
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
