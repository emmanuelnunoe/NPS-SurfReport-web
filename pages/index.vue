<template>
    <div>
        <h1>Welcome to NPS Surf Forecast App</h1>
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
.content {
  position: relative;
  z-index: 1; /* To ensure the content stays above the video */
  text-align: center;
  color: white; /* Adjust text color to make it readable against the video background */
}
</style>