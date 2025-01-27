<script setup lang="ts">
    import { customers } from '../testingdata/customer.json';
</script>

<template>
    <div class="container">
        <h1>NPS | Surf Report</h1>
        <div class="grid">
            <Card v-for=" customer in customers" :key="customer.id" :="customer"/>
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