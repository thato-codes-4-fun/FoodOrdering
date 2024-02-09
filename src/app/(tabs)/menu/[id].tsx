import { View, Text, StyleSheet, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';
import Products from '@/assets/data/products'
import Colors from '@/constants/Colors';
import Button from '@/components/button'
import { PizzaSize, Product } from '@/types';

const sizes : PizzaSize[] = ['S', 'M', 'L', 'XL']


const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const handleSelectSize= (item: any)=> {
    console.log(`add to cart: ${item}`)
    setSelectedSize(item);
  }


  
  const {id,} = useLocalSearchParams();
  const product  = Products.find(item=> item.id.toString() == id);
  const addToCart = ()=> {
    if(product){
      console.warn(`add to cart: ${product.name}`)
    }
  }
  if(!product){
    return 
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: `${product.name}`}}/>
    
      <Image 
        source={{uri: product.image}}
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.subTitle}>Select a size</Text>
      <View style={styles.sizeContainer}>
        {
          sizes.map((item: PizzaSize) =>{
            return (
              <Pressable onPress={()=> handleSelectSize(item)}   key={item} style={[styles.size, {backgroundColor: selectedSize == item? 'grey': 'gainsboro'}]}>
                <Text style={[styles.sizeText, {color: selectedSize === item? 'white': 'black'}]}>{item}</Text>
              </Pressable>
              
            )
          })
        }
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Price: $ {product.price}</Text>
      </View>
      {/* <Button
        title='Add to cart'
        onPress={handleAddToCart}  
      /> */}
      <Button
        text={'Add to cart'}
        onPress={addToCart}
        // onMagicTap={handleAddToCart}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10

  },
  image: {
    width: '100%',
    aspectRatio: 1,

  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    
  },
  size: {
    width: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'gainsboro',
    
  },
  sizeText: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: '600',
    margin: 10,
  },
  priceContainer: {
    marginTop: 'auto',
    paddingVertical: 20,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default ProductDetails