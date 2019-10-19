import Vue from 'Vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

 export const store = new Vuex.Store({
     state: {},
     modules: {
         products
     }
 })
