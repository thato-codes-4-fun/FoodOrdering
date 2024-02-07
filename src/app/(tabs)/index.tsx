import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import products from '../../../assets/data/products';
import { Image } from 'expo-image';
import Colors from '@/constants/Colors';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={product.image}
        placeholder='pizza image'
        contentFit="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20
  },
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
});


