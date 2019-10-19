import Vue from 'Vue';
import Vuex from 'vuex';
import products from './modules/products';

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

        }
     },
     actions: {
        setTradeResult({commit,state},payload){

        },
        getTradeResult({commit}){

        }
     },
     modules: {
         products
     }
 })
