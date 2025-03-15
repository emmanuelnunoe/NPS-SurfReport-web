<template>
    <div class="background-main">
        <h1 class="col-10 text-center">Surf Smarter, Check Conditions First!</h1>
        <button class="btn btn-light  btn-report button-main">See map</button>
        <p class="text-center">-or-</p>
        <SearchComponent/>
    </div>
</template>

<script>
import { VIdeoBackground } from '#components';
import SearchComponent from '~/components/SearchComponent.vue';

export default {
  components: {
    VIdeoBackground,
    SearchComponent,
  },
}
</script>

<style scoped>

.btn-report{
  margin-bottom: 5%;
  background-color: black;
  color: white;
  border: none;
}

.background-main{
padding-top: 1em;
background-color: aquamarine;
box-shadow: 0 0 100px 0 rgba(74, 74, 74, 0.306);
padding-bottom: 20%;

}

.button-main{
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
    font-weight: 600;
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
</style>