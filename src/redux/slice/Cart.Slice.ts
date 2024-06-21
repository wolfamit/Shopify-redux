import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart') as string) || []
    },
    reducers: {
        addToCart:(state, action)=>{
            const exist = state.cart.find((curr:any)=>curr.id === action.payload.id);
            if (exist) {
                const newdata = state.cart.map((curr:any)=>{
                    if(curr.id === action.payload.id){
                        curr.qty += 1
                    }
                    return curr;
                })
                state.cart = newdata;
                localStorage.setItem('cart', JSON.stringify(newdata));
                return;
            }

            state.cart = [...state.cart , action.payload];
            localStorage.setItem('cart', JSON.stringify( state.cart));

        },
        incrementReducer:(state, action) => {
            const newdata = state.cart.map((curr:any)=>{
                if(curr.id === action.payload){
                    curr.qty += 1
                }
                return curr;
            })
            state.cart = newdata;
            localStorage.setItem('cart', JSON.stringify(newdata));
            return;
        },

        decrementReducer:(state, action) => {
            const exist = state.cart.find((curr:any)=>curr.id === action.payload);
            if (exist) {
                const copy = JSON.parse(JSON.stringify(exist));
                if (copy.qty === 1){
                    const newArray = state.cart.filter((curr:any)=>curr.id !== action.payload);
                    state.cart = newArray;
                    localStorage.setItem('cart', JSON.stringify(newArray));
                    return;
                }
                const newdata = state.cart.map((curr:any)=>{
                if(curr.id === action.payload){
                    curr.qty -= 1
                }
                return curr;
            })
            state.cart = newdata;
            localStorage.setItem('cart', JSON.stringify(newdata));
            return;
        }
    },
        deleteReducer:(state, action)=>{
            const exist = state.cart.find((curr:any)=>curr.id === action.payload);
            if (exist) {
                const newArray = state.cart.filter((curr:any)=>curr.id !== action.payload);
                state.cart = newArray;
                localStorage.setItem('cart', JSON.stringify(newArray));
                return;
            }
        }

    }
})

export const { addToCart , incrementReducer , decrementReducer , deleteReducer} = CartSlice.actions;