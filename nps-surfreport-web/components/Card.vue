
<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  email:String,
  phone:String,
  address:String,
  registeredAt:String
});


</script>

<template>

  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="~/assets/Dynamic_wave_inkscape.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        email: {{ email }}
        phone: {{ phone }}
        addres: {{ address }}
        registeredAt : {{  registeredAt }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  
</template>

  