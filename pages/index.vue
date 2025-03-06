<template>
    <div>
        <h1>See conditions, for sea sessions.</h1>
        <h2>NPS | Surf Report</h2>
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
    font-size: 3em;
    font-weight: 800;
    color: white;
}

h1, h2{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h2{
    margin-top: 5%;
    text-align: center;
    font-size: 1.5em;
    font-weight: 400;
    color: rgb(44, 44, 44);
}

.content {
  position: relative;
  z-index: 1; /* To ensure the content stays above the video */
  text-align: center;
  color: white; /* Adjust text color to make it readable against the video background */
}
</style>