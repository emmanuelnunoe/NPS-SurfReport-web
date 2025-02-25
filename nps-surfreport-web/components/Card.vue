
<script  lang="ts" setup>
defineProps(['station']);
</script>

<template>

  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src= "../assets/Dynamic_wave_inkscape.png" alt="Station image">
    <div class="card-body">
      <h5 class="card-title">{{ station.name }}</h5>
      <p class="card-text">Id: {{ station.id }}</p>
       <NuxtLink :to="{name:'stations-id-name', params:{name: station.name, id: station.id}}" class="btn btn-primary"> See Station</NuxtLink> 
    </div>
  </div>
  
</template>

  