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

    },
    sellProdact({commit},paylaod){

    }
}


export default {
    state,
    getters,
    mutations,
    actions
}