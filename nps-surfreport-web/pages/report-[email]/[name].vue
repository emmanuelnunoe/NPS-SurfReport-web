<script  lang="ts" setup>
    const route = useRoute();
    const name = route.params.name;
    const email = route.params.email;

    definePageMeta({
        validate: route => {
            const regex =   /^[a-zA-ZáéíóúÁÉÍÓÚ .@ ]+$/;
            const expresion = new RegExp(regex)
            const name = route.params.name as string

            return expresion.test(name)
        }
    })
</script>


<template>
    <div>
        <h2>Ruta con parametros</h2>
        <h3>Parametro 1 : {{ name }}</h3>
        <h3>Parametro 2 : {{ email }}</h3>
    </div>
</template>