import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { UseCart } from './providers/cartProvider';
import CartListItem from '@/components/cartItem';

const CartScreen = () => {
  const { items } = UseCart();
  return (
    
    <View>
      {
        items.length == 0 ?
        <View>
            <Text>no items in cart</Text>
        </View> :
        null
      }
      <FlatList
        renderItem={({item})=> <CartListItem cartItem={item}/>}
        data={items}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen