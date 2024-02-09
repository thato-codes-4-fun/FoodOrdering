import { Text, View } from '../../components/Themed';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import {Product} from '../types'


type ProductListItemProps = {
  product : Product,
}

const ProductListITem = ({product}: ProductListItemProps)=> {
    return (
      <View style={{flex: 1, backgroundColor: Colors.light.background, borderRadius: 20, padding:10}}>
        <Image
          style={styles.image}
          source={product.image}
          placeholder='pizza image'
          contentFit="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  image: {
    width: '100%',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,

  },
  price: {
    marginTop: 'auto',
    color: Colors.light.tint,
    fontWeight: 'bold',
  }
})
  

export default ProductListITem;