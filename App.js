import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './assets/image/profile.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Image source={Profile} style={styles.avatar} />
        <Text style={styles.name}>Aditiya Permana</Text>
      </View>
      <Saldo />
      <View style={styles.listItem}>
        <Setting />
        <Help />
      </View>
    </View>
  )
}

const Saldo = () => {
  return (
    <View style={styles.saldo}>
      <Ionicons style={styles.icon} size={35} name='ios-card' />
      <Text style={styles.descSaldo}>Saldo</Text>
      <Text style={{marginLeft: 140}}>Rp. 302.976.000,00</Text>
    </View>
  );
}

const Setting = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={35} name='ios-cog' />
      <Text style={styles.descSaldo}>Pengaturan</Text>
    </View>
  )
}

const Help = () => {
  return (
    <View style={styles.list}>
      <Ionicons style={styles.icon} size={35} name='ios-help-circle-outline' />
      <Text style={styles.descSaldo}>Bantuan</Text>
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
            backgroundColor: '#14aeff'
          },
          headerTintColor: '#fff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edece8',
  },

  // Icon
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

  // Saldo
  saldo: {
    marginTop: 6,
    height: 65,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#14aeff',
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
