<template>
  <div class="pink-wrapper">
    <img src="../assets/images/bad-logo-desk.png" alt="logo c" />
  </div>
</template>

<style>
.pink-wrapper {
  width: 100%;
  height: 100vh;
  background: #292966;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pink-wrapper img {
  width: 180px;
}
@media (max-width: 768px) {
  .pink-wrapper {
    display: none;
  }
}
</style>
