<template>
  <div id="gif-wrapper">
    <img
      class="gif-mob"
      src="../assets/gifs/gif-mob.gif"
      alt="gif home mobile version"
    />
    <p class="click-here">click here</p>
  </div>
</template>

<script>
export default {
  mounted() {
    const isMobile = window.matchMedia('(max-width: 768px)')

    const bodyOverflow = document.getElementsByTagName('body')[0]
    const gifWrapper = document.getElementById('gif-wrapper')

    if (isMobile.matches) {
      document.addEventListener('click', () => {
        gifWrapper.classList.add('transition-fade')
        bodyOverflow.classList.add('body-overflow-unset')
      })
      document.addEventListener('touch', () => {
        gifWrapper.classList.add('transition-fade')
        bodyOverflow.classList.add('body-overflow-unset')
      })
    }
  },
}
</script>

<style>
#gif-wrapper {
  height: 100vh;
  width: 100%;
  display: none;
}
#gif-wrapper img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.gif-mob {
  display: none;
}
.transition-fade {
  position: absolute;
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 0s linear 300ms, opacity 300ms !important;
}
body {
  overflow: hidden;
}
.body-overflow-unset {
  overflow: unset !important;
}
.click-here {
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #7dc9af;
  font-size: 12px;
}
@media (max-width: 768px) {
  #gif-wrapper {
    display: flex;
  }
  .gif-desk {
    display: none;
  }
  .gif-mob {
    display: block;
  }
}
</style>
