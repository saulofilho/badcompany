<template>
  <div class="video-wrapper">
    <video id="video-hero" width="100%" height="100%" controls>
      <source src="../assets/videos/video-central.mp4" type="video/mp4" />
      video not supported
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('heeeyyy')

    const aud = document.getElementById('video-hero')
    console.log('aud', aud)
    aud.addEventListener('ended', function () {
      alert('The audio has ended')
      console.log('xxx')
    })
    // aud.onended = function () {
    //   alert('The audio has ended')
    //   console.log('xxx')
    // }
  },
}
// export default {
//   function() {
//     document
//       .getElementById('video-hero')
//       .addEventListener('ended', myHandler, false)
//     function myHandler(e) {
//       e.preventDefault()

//       alert('finished')
//     }
//   },
// }
</script>

<style></style>
