<template>
  <div id="video-wrapper">
    <button id="btn-play" @click="play">➤</button>
    <video id="video-hero">
      <source src="../assets/videos/badcompany.mp4" type="video/mp4" />
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
    const gifWrapper = document.getElementById('gif-wrapper')

    videoHero.addEventListener(
      'ended',
      function () {
        videoWrapper.classList.add('transition-fade-video')
        gifWrapper.classList.add('transition-fade-video')
        bodyOverflow.classList.add('body-overflow-unset')
      },
      { once: true }
    )
  },
  methods: {
    play() {
      const videoHero = document.getElementById('video-hero')
      const btnPlay = document.getElementById('btn-play')

      videoHero.play()
      btnPlay.style.display = 'none'
    },
  },
}
</script>

<style>
#video-wrapper {
  height: 100vh;
  background: #000;
}
#video-hero {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.transition-fade-video {
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
#btn-play {
  position: absolute;
  z-index: 999;
  top: 50%;
  right: 50%;
  left: 50%;
  border-radius: 10%;
  padding: 10px;
  border: unset;
  box-shadow: 4px 4px #7dc9af;
}
#btn-play:active {
  box-shadow: 1px 1px #7dc9af !important;
  transform: translateY(4px);
}
#btn-play:hover {
  background: #7dc9af;
  box-shadow: 4px 4px #53585f;
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
