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
    const videoWrapper = document.getElementById('video-wrapper')
    const videoHero = document.getElementById('video-hero')

    videoHero.addEventListener(
      'ended',
      function () {
        videoWrapper.classList.add('transition-fade')
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
  transition: transform 1.5s 0s, opacity 1.25s 0s;
  transform: translateX(0);
}
.transition-fade {
  transform: translateX(100vw);
  opacity: 0;
  display: none;
}
@media (max-width: 768px) {
  #video-wrapper {
    display: none;
  }
}
</style>
