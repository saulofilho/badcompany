<template>
  <div id="video-wrapper">
    <video id="video-hero" autoplay="autoplay" muted>
      <source src="../assets/videos/video-central.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
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
#video-hero {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.transition-fade {
  position: absolute;
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 2s, opacity 2s ease-out;
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
