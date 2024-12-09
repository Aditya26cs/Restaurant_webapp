import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: ["bhelpuri", "colddrink"],
    },
    reducers:{
        addItem : (state , action) => {
             state.items.push(action.payload);
        },
        clearCart : (state) => {
            state.items = [];
        },
        removeItem : (state , action) => {
            // state.items = state.items.filter(item => item.id !== action.payload);
            state.items.pop();
        }


    }
});

export default cartSlice.reducer;
export const {addItem , clearCart , removeItem} = cartSlice.actions;