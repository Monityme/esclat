<template>
    <div
  class="slider absolute -z-10"
  style="--width: 100vw;
    --height: calc(100vh - 120px);
    --quantity: 4;"
>
  <div class="list">
    <div class="item" style="--position: 1">
      <div class="card">
        <img src="/home/carrusel/IMG_6186.JPG"/>
    </div>
    </div>
    <div class="item" style="--position: 2">
      <div class="card">
        <img src="/home/carrusel/IMG_6215.JPG"/>
      </div>
    </div>
    <div class="item" style="--position: 3">
      <div class="card">
        <img src="/home/carrusel/IMG_6186.JPG"/>
      </div>
    </div>
    <div class="item" style="--position: 4">
      <div class="card">
        <img src="/home/carrusel/IMG_6381.JPG"/>
    </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.card p {
  font-size: 14px;
  color: white;
}

.slider {
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 120px);
}

.slider .list {
  display: flex;
  width: 200%;
  min-width: calc(var(--width));
  position: relative;
}

.slider .list .item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 100s linear infinite;
  animation-delay: calc(
    (100s / var(--quantity)) * (var(--position)) - 100s
  ) !important;
}

.slider .list .item img {
  width: 100%;
  
}

/* De izquierda a derecha --> --> */
@keyframes autoRun {
  from {
    left: calc(var(--width) * -1);
  }
  to {
    left: 100%;
  }
}

/*
De derecha a izquierda <-- <--
@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
}

*/

/*
Al pasar el ratón por encima la animación para
.slider:hover .item {
  animation-play-state: paused !important;
}
*/

</style>