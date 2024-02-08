import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/component/Themed';
import products from '@/assets/data/products';
import ProductListITem from '@/components/productListItem';




export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item})=> <ProductListITem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10}}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
  },

});


