import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailPage = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: `Details: ${id}`}} />
      <Text>ProductDetailPage {`${id}`}</Text>
    </View>
  )
}

export default ProductDetailPage