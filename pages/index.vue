<template>
    <div>
        <h2>NPS</h2>
        <h3>Surf Report</h3>
        <h1 class="col-10 text-center">Surf Smarter, Check Conditions First!</h1>
          <button class="btn btn-light btn-lg">See report</button>
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
button{
  margin: auto;
  text-align: center;
  font-size: 1.7em;
  margin-left: 15%;
  margin-top: 10%;
  padding-left: 20%;
  padding-right: 20%;
}

h1{
    margin-top: 20%;
    margin-left: 10%;
    text-align: center;
    font-size: 3em;
    font-weight: 400;
}

h1, h2, h3{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(44, 44, 44);
}

h2{
    margin-top: 5%;
    text-align: center;
    margin-left: 10%;
    font-size: 2em;
    font-weight: 700;
    width: 80%;
}

h3{
    margin-top: 5%;
    text-align: center;
    font-size: 1.5em;
    font-weight: 400;
}

.content {
  position: relative;
  z-index: 1; /* To ensure the content stays above the video */
  text-align: center;
  color: white; /* Adjust text color to make it readable against the video background */
}
</style>