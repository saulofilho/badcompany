<template>
  <div class="black-wrapper">
    <img class="text" src="../assets/images/text.png" alt="logo c" />
    <img src="../assets/images/logo-pb.png" alt="logo badcompany" />
  </div>
</template>

<style>
.black-wrapper {
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: relative;
}
.black-wrapper .text {
  width: 100%;
  top: 50px;
  position: absolute;
  padding: 0 50px;
}
.black-wrapper img {
  width: 190px;
}
@media (max-width: 768px) {
  .black-wrapper .text {
    display: none;
  }
  .black-wrapper img {
    width: 40%;
  }
}
</style>
