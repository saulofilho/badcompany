<template>
  <div id="video-wrapper">
    <video id="video-hero" width="100%" height="100%" controls autoplay>
      <source src="../assets/videos/video-central.mp4" type="video/mp4" />
      video not supported
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    const bodyOverflow = document.getElementsByTagName('body')[0]
    const videoWrapper = document.getElementById('video-wrapper')
    const videoHero = document.getElementById('video-hero')

    videoHero.addEventListener(
      'ended',
      function () {
        videoWrapper.classList.add('transition-fade')
        bodyOverflow.classList.add('body-overflow-unset')
      },
      { once: true }
    )
  },
}
</script>

<style>
#video-wrapper {
  height: 100vh;
  background: #000;
  visibility: visible;
  opacity: 1;
}
.transition-fade {
  position: absolute;
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 5s, opacity 5s ease-out;
}
body {
  overflow: hidden;
}
.body-overflow-unset {
  overflow: unset !important;
}
@media (max-width: 768px) {
  #video-wrapper {
    display: none;
  }
  body {
    overflow: unset;
  }
}
</style>
