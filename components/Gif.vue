<template>
  <div id="gif-wrapper">
    <img
      class="gif-mob"
      src="../assets/gifs/gif-mob.gif"
      alt="gif home mobile version"
    />
    <img
      class="gif-desk"
      src="../assets/gifs/gif-desk.gif"
      alt="gif home mobile version"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    const bodyOverflow = document.getElementsByTagName('body')[0]
    const gifWrapper = document.getElementById('gif-wrapper')

    setTimeout(function () {
      gifWrapper.classList.add('transition-fade')
      bodyOverflow.classList.add('body-overflow-unset')
    }, 8000)
  },
}
</script>

<style>
#gif-wrapper {
  height: 100vh;
  width: 100%;
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
  transition: visibility 2s, opacity 2s ease-out;
}
body {
  overflow: hidden;
}
.body-overflow-unset {
  overflow: unset !important;
}

@media (max-width: 768px) {
  .gif-desk {
    display: none;
  }
  .gif-mob {
    display: block;
  }
}
</style>
