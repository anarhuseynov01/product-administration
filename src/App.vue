<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
// import ProductPurchase from "./components/products/ProductPurchase";
// import ProductSell from "./components/products/ProductSell";
// import ProductList from "./components/products/ProductList";
import Footer from "./components/shared/Footer";
export default {
  name: 'app',
  components: {
    appHeader: Header,
    // appContainer: ProductPurchase,
    appFooter: Footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
