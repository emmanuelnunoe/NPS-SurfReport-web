<template>
    <div>
        <h1>Page home</h1>
        <h1>Welcome to My Nuxt.js App</h1>
        <VideoPlayer />
    </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer,
  },
}
</script>