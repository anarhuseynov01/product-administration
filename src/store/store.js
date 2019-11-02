import Vue from 'vue';
import Vuex from 'vuex';
import { products } from './modules/products';

Vue.use(Vuex);

 export const store = new Vuex.Store({
     state: {
         purchase: 0.0,
         sale: 0.0,
         balance: 0.0
     },
     getters: {
         getTradeResult: state => {
            return {
                purchase: state.purchase,
                sale: state.sale,
                balance: state.balance
            }
         }
     },
     mutations: {
        updateTradeResult(state,payload){
            if(payload.count){
                state.purchase += parseFloat(payload.purchase) * parseInt(payload.count)
                state.sale += parseFloat(payload.sale) * parseInt(payload.count)
            } else {
                state.purchase += parseFloat(payload.purchase) 
                state.sale += parseFloat(payload.sale) 
            }
        
            state.balance = parseFloat(state.sale) - parseFloat(state.purchase)
        }
     },
     actions: {
        setTradeResult({commit,state},payload){
            commit("updateTradeResult",payload)

            let tradeDate = {
                purchase: state.purchase,
                sale: state.sale
            }
            
            Vue.http.put("https://product-administration.firebaseio.com/trade-result.json",tradeDate)
            .then(response => {
                
            })
        },
        getTradeResult({commit}){
            Vue.http.get("https://product-administration.firebaseio.com/trade-result.json")
            .then(response => {
                commit("updateTradeResult",response.body)
            })
        }
     },
     modules: {
         products
     }
 })
