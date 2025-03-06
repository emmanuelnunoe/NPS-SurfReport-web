<template>
    <div>
        <h1>NPS</h1>
        <h2>Surf Report</h2>
        <h3>See conditions, for sea sessions.</h3>
        <VIdeoBackground />
    </div>
</template>

<script>
import { VIdeoBackground } from '#components';

export default {
  components: {
    VIdeoBackground,
  },
}
</script>

<style scoped>
h1{
    margin-top: 20%;
    text-align: center;
    font-size: 4em;
    font-weight: 800;
}

h1, h2, h3{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(44, 44, 44);
}

h2{
    margin-top: 5%;
    text-align: center;
    font-size: 2em;
    font-weight: 600;
}

h3{
    margin-top: 5%;
    text-align: center;
    font-size: 1em;
    font-weight: 400;
}


.content {
  position: relative;
  z-index: 1; /* To ensure the content stays above the video */
  text-align: center;
  color: white; /* Adjust text color to make it readable against the video background */
}
</style>