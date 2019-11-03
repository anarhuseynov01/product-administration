import Vue from "vue";
import { router } from "../../router"
const state = {
    products: []
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

    }
}

const mutations = {
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actions = {
    initApp({commit}){
        Vue.http.get("https://product-administration.firebaseio.com/products.json")
        .then(res => {
            let data = res.body;
            for(let key in data){
                data[key].key = key;
                commit("updateProductList", data[key])
            }
        })
    },
    saveProduct({dispatch,commit,state},payload){
        let url = "https://product-administration.firebaseio.com/products.json"
        Vue.http.post(url,payload)
            .then((response) => {
                payload.key = response.body.name;
                commit("updateProductList",payload);
            })
         
        let tradeResult = {
            purchase: payload.price,
            sale: 0,
            count: payload.count
        }

        dispatch("setTradeResult", tradeResult)
        router.replace("/"); 
    },
    sellProdact({commit},paylaod){

    }
}


export const products = {
    state,
    getters,
    mutations,
    actions
}