<template>
  <div id="gif-wrapper">
    <img
      class="gif-mob"
      src="../assets/gifs/gif-mob.gif"
      alt="gif home mobile version"
    />
    <!-- <img
      class="gif-desk"
      src="../assets/gifs/gif-desk.gif"
      alt="gif desk mobile version"
    /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    const bodyOverflow = document.getElementsByTagName('body')[0]
    const gifWrapper = document.getElementById('gif-wrapper')

    document.addEventListener('click', () => {
      gifWrapper.classList.add('transition-fade')
      bodyOverflow.classList.add('body-overflow-unset')
    })
    document.addEventListener('touch', () => {
      gifWrapper.classList.add('transition-fade')
      bodyOverflow.classList.add('body-overflow-unset')
    })
    // setTimeout(function () {
    //   gifWrapper.classList.add('transition-fade')
    //   bodyOverflow.classList.add('body-overflow-unset')
    // }, 3000)
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
