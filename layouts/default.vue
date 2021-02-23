<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'MADETommySoftBold';
  src: url('./assets/fonts/MADETommySoftBold.otf');
}
@font-face {
  font-family: 'MADETommySoftRegular';
  src: url('./assets/fonts/MADETommySoftRegular.otf');
}
@font-face {
  font-family: 'MADETommySoftBlack';
  src: url('./assets/fonts/MADETommySoftBlack.otf');
}
@font-face {
  font-family: 'MADETommySoftMedium';
  src: url('./assets/fonts/MADETommySoftMedium.otf');
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
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
