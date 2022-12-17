import {createSlice,configureStore} from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"login",
    initialState:{auth:false},
    reducers:{
        login:(state)=>{
            state.auth=true;
            localStorage.setItem("auth",JSON.stringify(state))
        },
        logout:(state)=>{
            state.auth=false;
            localStorage.removeItem("auth")
        }
    }
});

const store=configureStore({
    reducer:{login: loginSlice.reducer}
})
export const loginActions=loginSlice.actions;
export default store;
  