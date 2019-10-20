import Vue from "vue"

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
        // vue resource operations...
    },
    saveProduct({commit},payload){
        let url = "https://product-administration.firebaseio.com/products.json"
        Vue.http.post(url,payload)
            .then((response) => {
                console.log(response)
            })
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