
<script  lang="ts" setup>
defineProps(['product']);
</script>

<template>

  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src= "product.thumbnail" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        category: {{ product.category }}
      </p>
      <NuxtLink :to="{name:'products-category-title', params:{title: product.title, category: product.category}}" class="btn btn-primary"> See Location</NuxtLink> 
    </div>
  </div>
  
</template>

  