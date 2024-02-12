import { PropsWithChildren, createContext, useContext, useState } from "react";
import {CartItem, PizzaSize, Product}from '@/types'
import products from "@/assets/data/products";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: PizzaSize)=> void,
  
    // updateQuantity: ()=> void,
    // total: number,
}

const CartContext = createContext<CartType>({
    items: [],
    // updateQuantity: ()=> {},
    addItem: (product: Product, size: PizzaSize)=> {},

    // total: 0,
});


const CartProvider = ({children}:  PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        console.log('adding item to cart!')
        console.log(`product: ${product.name}`);
        const existingItem = items.find((item)=> item.id == product.id.toString());
        if(existingItem){
            const newCartItem = {
                id:'1',
                product: product,
                size: '',
                quantity: 1,
            }

            // setItems((existingItem)=> [newCartItem, ...existingItem]);
        }
        return;
    }

    return (
        (
            <CartContext.Provider value={{items, addItem }}>
                {children}
            </CartContext.Provider>
        )
    )
}



export const UseCart = ()=> useContext(CartContext);
export default CartProvider;

