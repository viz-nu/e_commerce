import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addtocart(state, action) {
            const newItem = action.payload;
            const existingItems = state.itemsList.find((item) => item.id === newItem.id);
            if (!existingItems) {
                state.itemsList.push(newItem)
            }
            if (existingItems) {
                state.toatlQuantity += 1;
                existingItems.quantity++;
                existingItems.price += newItem.price;
            }
            state.totalQuantity++;
        },
        removefromcart(state, action) {
            const newItem = action.payload;
            const existingItems = state.itemsList.find((item) => item.id === newItem.id);
            if (existingItems) {
                state.toatlQuantity -= 1;
                if(existingItems.quantity>1)
               { existingItems.quantity--;
                existingItems.price -= newItem.price;}
                else {
                    state.itemsList = state.itemsList.filter((item)=>item.id !== newItem.id)
                }
            }
            state.totalQuantity--;
        },
        setShowCart(state, action) {
            state.showCart = true;
        }
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice 
