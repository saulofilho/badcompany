<template>
  <div class="gif-wrapper">
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
export default {}
</script>

<style>
.gif-wrapper {
  height: 100vh;
  width: 100%;
}
.gif-wrapper img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.gif-mob {
  display: none;
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
