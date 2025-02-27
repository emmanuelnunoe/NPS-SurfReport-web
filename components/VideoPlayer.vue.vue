<template>
  <div>
    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      width="640"
      height="264"
      data-setup="{}"
    >
      <source src="/assets/mixkit-aerial-view-of-people-surfing-1074-hd-ready.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
}
</script>

<style>
@import 'video.js/dist/video-js.css';
</style>
