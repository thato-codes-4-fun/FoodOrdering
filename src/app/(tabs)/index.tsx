import { StyleSheet } from 'react-native';
import { View } from '@/component/Themed';
import products from '@/assets/data/products';
import ProductListITem from '@/components/productListItem';


const product = products[0];
const productTwo = products[1];




export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductListITem product={product} />
      <ProductListITem product={productTwo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20
  },

});


