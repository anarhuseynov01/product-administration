<template>
    <div class="container">
            <div class="row">
                <div class="col-6 offset-3 pt-3 card mt-5 mb-5 shadow">
                    <div class="card-body">
                        <h3>Product Output</h3>
                        <hr>
                        <div class="form-group">
                            <label>Product Name</label>
                            <select class="form-control" v-model="selectedProduct" @change="getProduct">
                                <option :value="product.key" v-for="product in getProducts" :key="product.name + product.key" :disabled="product.count == 0">{{product.name}}</option>
                            </select>
                        </div>
                        <transition name="fade" mode="out-in">
                            <div class="card mb-2 border border-danger" v-if="myProduct !== null">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <div class="mb-3">
                                                <span class="badge badge-info">Stock : {{myProduct.count}}</span>
                                                <span class="badge badge-primary">Price : {{myProduct.price | currency}}</span>
                                            </div>
                                            <p class="border border-warning p-2 text-secondary">{{myProduct.description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="form-group">
                            <label>Count</label>
                            <input type="text" class="form-control" placeholder="Enter product count...">
                        </div>
                        <hr>
                        <button class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            selectedProduct: null,
            myProduct: null
        }
    },
    computed: {
        ...mapGetters(["getProducts"])
    },
    methods: {
      getProduct(){
          this.myProduct = this.$store.getters.getProduct(this.selectedProduct)[0];
      }
    }
}
</script>

<style scoped>
.border-danger {
            border-style: dashed !important;
        }
</style>