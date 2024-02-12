import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { UseCart } from './providers/cartProvider';

const CartScreen = () => {
  const { items } = UseCart();
  return (
    
    <View>
      <Text>CartScreen : {items.length}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen