<template>
  <div class="gif-wrapper">
    <img src="../assets/gifs/central_gif.gif" alt="gif home mobile version" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.gif-wrapper {
  height: 100vh;
  width: 100%;
}
.gif-wrapper img {
  width: 100%;
}

@media (min-width: 768px) {
  .gif-wrapper {
    display: none;
  }
}
</style>
