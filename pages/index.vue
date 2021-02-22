<template>
  <div class="wrapper">
    <Video />
    <Pink />
    <Green />
  </div>
</template>

<script>
export default {}
</script>

<style>
@font-face {
  font-family: 'MADETommySoftBold';
  src: url('./assets/fonts/MADETommySoftBold.otf');
}
@font-face {
  font-family: 'MADETommySoftRegular';
  src: url('./assets/fonts/MADETommySoftRegular.otf');
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html,
body,
#root {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-family: 'MADETommySoftRegular';
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: 'MADETommySoftRegular';
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #252363;
}

::selection {
  background: #252363;
  color: #e81b80;
}
</style>
