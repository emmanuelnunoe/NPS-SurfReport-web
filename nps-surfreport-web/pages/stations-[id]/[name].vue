<script  lang="ts" setup>
    const route = useRoute();
    const name = route.params.name;
    const id = route.params.id;

    definePageMeta({
        validate: route => {
            const regex =   /^[a-zA-ZáéíóúÁÉÍÓÚ .@ ]+$/;
            const expresion = new RegExp(regex)
            const name = route.params.name as string
            return expresion.test(name)
        }
    })

    var todayDate = Date.now();
    console.log("TODAYS DATE: "+ todayDate);
    const {data, error, pending } = await useFetch( `https://noaa-tides.p.rapidapi.com/stations/1611400/tides?date= ${todayDate}`,{
        headers:{
            'X-RapidAPI-Host': 'noaa-tides.p.rapidapi.com',
            'X-RapidAPI-Key': '554b5a7e53msh1202eed08caa67bp16d5adjsnb39915c07f4b'
        }
    });
</script>


<template>
    <div class="container">
        <NuxtLink to="/locations"  class="btn btn-primary mt-4 mb-4"> < Back</NuxtLink>
        <br/>
        <img class="card-img-top" src= "../../assets/Dynamic_wave_inkscape.png" alt="Station image" style="width: 10%; height: 10%;">
        <h3>Name : {{ name }}</h3>
        <h3>Id : {{ id }}</h3>
    </div>
</template>