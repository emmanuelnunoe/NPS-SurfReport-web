<template>
  <div class="video-background">
    <video autoplay muted loop playsinline>
      <source src="/assets/mixkit-aerial-view-of-people-surfing-1074-hd-ready.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoBackground'
}
</script>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* To ensure the video stays in the background */
  opacity: 0.7; /* Adjust the opacity as needed */
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}
</style>
