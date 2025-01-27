<script  lang="ts" setup>
    const route = useRoute();
</script>


<template>
    <div>
        <h2>Ruta con parametros</h2>
        <h3>Parametro 1 : {{ route.params.name }}</h3>
    </div>
</template>