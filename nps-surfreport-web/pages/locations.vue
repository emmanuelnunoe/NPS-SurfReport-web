<script setup lang="ts">
    import { customers } from '../testingdata/customer.json';
    const {data, error, pending } = await useFetch('https://dummyjson.com/products');
    console.log("data :", data)
</script>

<template>
    <div class="container"> 
        <h1>NPS | Surf Report</h1>
        <div class="grid">
            <Card v-for=" product in data.products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
}
</style>