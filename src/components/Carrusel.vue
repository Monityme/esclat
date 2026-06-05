<script setup lang="ts">

</script>
<template>
    <div
  class="slider absolute -z-10 overflow-hidden min-w-full min-h-full"
  style="
    --quantity: 5;"
>
  <div class="list">

    <div class="item" style="--position: 1">
        <img src="/home/carrusel/imagen1.jpg"/>
    </div>
    <div class="item" style="--position: 2">
        <img src="/home/carrusel/imagen2.jpg"/>
    </div>
    <div class="item" style="--position: 3">
        <img src="/home/carrusel/imagen3.jpg"/>
    </div>
    <div class="item" style="--position: 4">
        <img src="/home/carrusel/imagen4.jpg"/>
    </div>
    <div class="item" style="--position: 5">
        <img src="/home/carrusel/imagen5.jpg"/>
    </div>
    
  </div>
</div>

</template>

<style scoped>


.slider .list {
      position: relative;
      width: 100%;
      height: 100%;
  }

  .slider .list .item {
      position: absolute;
      inset: 0;
      opacity: 0;
      animation: fade 20s linear infinite;
      animation-delay: calc(
        (20s / 5) * (var(--position) - 1)
      );
  }

  .slider .list .item img {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      display: block;
  }


@keyframes fade {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    25% {
      opacity: 1;
    }

    35% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
}

</style>