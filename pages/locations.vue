<script setup lang="ts">
    import type { RefSymbol } from '@vue/reactivity';
    const {data, error, pending } = await useFetch('https://noaa-tides.p.rapidapi.com/stations',{
        headers:{
            'X-RapidAPI-Host': 'noaa-tides.p.rapidapi.com',
            'X-RapidAPI-Key': '7a5d40ba4fmsha7bab8f9481e8d5p118da3jsn758dd8cf7f36'
        }
    });
</script>

<template>
    <div class="container"> 
        <h1>NPS | Surf Report</h1>
        <div class="grid">
            <Card v-for="station in data.stations" :key="station.id" :station="station"/>
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