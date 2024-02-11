
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';



export default function MenuLayout() {


  return <Stack>
    <Stack.Screen  name='index' options={{title: 'Menu', headerRight:  () => (
            <Link href="/cart" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color={Colors.dark.background}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),}} />
   
  </Stack>;
};