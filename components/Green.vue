<template>
  <div class="green-wrapper">
    <img class="green-desktop" src="../assets/images/b-desk.png" alt="logo c" />
    <img
      class="green-mobile"
      data-aos="fade-right"
      src="../assets/images/b-logo-mob.png"
      alt="logo c mobile"
    />
    <div class="expertise green-desktop">
      <div class="title">
        <p>expertise:</p>
      </div>
      <div class="text">
        <p>special projects</p>
        <p>brand & position</p>
        <p>content & production</p>
        <p>creative consultancy</p>
        <p>criative sprint</p>
        <p>events</p>
        <p>campaign</p>
        <p>social media</p>
      </div>
    </div>
    <div data-aos="fade-left" class="expertise green-mobile">
      <div class="title">
        <p>expertise:</p>
      </div>
      <div class="text">
        <p>special projects</p>
        <p>brand & position</p>
        <p>content & production</p>
        <p>creative consultancy</p>
        <p>criative sprint</p>
        <p>events</p>
        <p>campaign</p>
        <p>social media</p>
      </div>
    </div>
  </div>
</template>

<style>
.green-wrapper {
  width: 100%;
  height: 100vh;
  background: #7dcfb6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.green-wrapper img {
  width: 180px;
  padding-top: 60px;
}
.green-wrapper .expertise {
  position: absolute;
  top: 5%;
  right: 5%;
}
.green-wrapper .title {
  color: #252363;
  font-family: 'MADETommySoftBold';
  font-size: 16px;
  padding-bottom: 5px;
}
.green-wrapper .text {
  color: #fff;
  font-family: 'MADETommySoftRegular';
  font-size: 13px;
}
.green-mobile {
  display: none;
}
@media (max-width: 768px) {
  .green-desktop {
    display: none;
  }
  .green-mobile {
    display: block;
  }
  .green-wrapper img {
    padding-top: 140px;
    width: 140px;
  }
  .green-wrapper .title {
    font-size: 13px;
  }
  .green-wrapper .text {
    font-size: 10px;
  }
}
</style>
