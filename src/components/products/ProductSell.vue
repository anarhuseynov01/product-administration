<template>
    <div class="container">
            <div class="loading" :style="isLoading">
                <div class="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
             </div>
            <div class="row">
                <div class="col-6 offset-3 pt-3 card mt-5 mb-5 shadow">
                    <div class="card-body">
                        <h3>Product Output</h3>
                        <hr>
                        <div class="form-group">
                            <label>Product Name</label>
                            <select class="form-control" v-model="selectedProduct" @change="getProduct">
                                <option disabled selected = "true">Select your product</option>
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
                            <input type="text" class="form-control" placeholder="Enter product count..." v-model="productCount">
                        </div>
                        <hr>
                        <button class="btn btn-primary" :disabled="saveEnable" @click="save">Save</button>
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
            myProduct: null,
            productCount: null,
            saveClicked: false
        }
    },
    computed: {
        ...mapGetters(["getProducts"]),
        isLoading(){
            if(this.saveClicked){
                return {
                    display: 'block'
                }
            }else {
                return {
                    display: 'none'
                }
            }  
        },
        saveEnable(){
            if(this.selectedProduct !== null && this.productCount > 0){
                return false
            } else {
                return true
            }
        },
    },
    methods: {
      getProduct(){
          this.myProduct = this.$store.getters.getProduct(this.selectedProduct)[0];
      },
      save(){
          this.saveClicked = true;
          let product = {
              key: this.selectedProduct,
              count: this.productCount 
          }

          this.$store.dispatch("sellProdact",product)
      }
    },
    beforeRouteLeave(to,from,next){
        if(!this.saveClicked && (this.selectedProduct !== null || this.productCount > 0)){
            if(confirm("You have unsaved product.Are you sure?")){
                next()
            } else {
                next(false)
            }
        } else {
            next()
        }
    },
}
</script>

<style scoped>
.border-danger {
            border-style: dashed !important;
        }
</style>