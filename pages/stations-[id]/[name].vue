<script  lang="ts" setup>
    const route = useRoute();
    const name = route.params.name;
    const id = route.params.id;

    definePageMeta({
        validate: route => {
            const regex =   /^[a-zA-ZáéíóúÁÉÍÓÚ .@,]+$/;
            const expresion = new RegExp(regex)
            const name = route.params.name as string
            return expresion.test(name)
        }
    })


    // const {data, error, pending } = await useFetch( `https://noaa-tides.p.rapidapi.com/stations/1611400/tides?`,{
    //     headers:{
    //         'X-RapidAPI-Host': 'noaa-tides.p.rapidapi.com',
    //         'X-RapidAPI-Key': '554b5a7e53msh1202eed08caa67bp16d5adjsnb39915c07f4b'
    //     }
    // });
</script>


<template>
    <div class="container">
        <NuxtLink to="/locations"  class="btn btn-primary mt-4 mb-4"> < Back</NuxtLink>
        <br/>
        <div class="text-center">
        <!-- <img class="card-img-top" src= "../../assets/Dynamic_wave_inkscape.png" alt="Station image" style="width: 10%; height: 10%;"> -->
        <h3>{{ name }}</h3>
        </div>

        <br/>
        <div v-if="pending">Loading...</div>
        <div v-else-if="!data">No data</div>
        <div v-else-if="data.tides.length === 0">No tides</div>
        <div v-else>
            <h2  class="mt-4">Today's Tides : {{ data.tides[0].date }}</h2>
            <div v-for="item in data.tides">
                <div class="mt-3">
                    <hr/>
                    <h3>{{ item.time }}</h3>
                    <p>{{ item.type }}</p>
                    <p>{{ item.height }}</p>
                </div>
            </div>
        </div>
    </div>
</template>