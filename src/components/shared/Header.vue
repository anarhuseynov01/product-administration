<template>

    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">

        <router-link tag="a" class="nav-link" to="/product-list">Product List</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link tag="a" class="nav-link" to="/product-entry" active-class="active">Product Operations</router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="a" class="nav-link" to="/product-sell" active-class="active">Product Output</router-link>
                </li>
            </ul>
        </div>

    </nav>
    
</template>


<script>
export default {
    
}
</script>

<style>

</style>