<script setup lang="ts">

    import { Play, Pause, Square } from '@lucide/vue';
    import { useSound } from '@vueuse/sound';
    import { ref, onUnmounted } from 'vue';
    
    import { playMusica } from './CarruselArtistas.vue';
    
    const props = defineProps<{
        cancion: string;
        artista: string;
        titulo: string;
        foto: string;
    }>()

    const { play, pause, stop } = useSound(props.cancion)

    const giroDisco = ref(false);
    const discoKey = ref(0);

    function isPlay() {
        if(!playMusica.value) {
            play()
            playMusica.value = true;
            giroDisco.value = true;
        }
    }

    function isPause() {
        if(playMusica.value) {
            pause()
            playMusica.value = false;
        }
    }

    function isStop() {
        stop()
        playMusica.value = false;
        giroDisco.value = false;
        discoKey.value++;
    }

    function stopMusica() {
        stop()
        playMusica.value = false;
        giroDisco.value = false;
        discoKey.value++;
    }

    defineExpose({
        stopMusica
    })

    onUnmounted(() => {
        playMusica.value = false;
        giroDisco.value = false;
        stop()
    })
    

</script>

<template>
    <div class="w-full h-full flex justify-center items-center gap-6">

        <div class="container">
            <div class="plate">
                <div
                    :key="discoKey"
                    class="black bg-cover bg-center"
                    :style="{backgroundImage:`url(${props.foto})`, animationPlayState: playMusica ? 'running' : 'paused'}"
                >
                    <div class="border">
                        <div class="white">
                            <div class="center"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="player" :style="{ transform: `rotate(${giroDisco ? -45 : 0}deg)` }">
                <div class="rect"></div>
                <div class="circ"></div>
            </div>

        </div>

        <div class="grid_control w-full h-28 mt-2 grid grid-rows-2 gap-3">

            <ul class="wave-menu h-full">
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
                <li :style="{animationPlayState: playMusica ? 'running' : 'paused', height: giroDisco? '3rem' : '0.3rem', marginTop: giroDisco? '1rem' : '2.5rem'}"></li>
            </ul>

            <div class="w-full h-full flex justify-center items-center gap-4">
        
                <Play
                    class="text-white fill-white"
                    :class="{
                        'hover:text-amarillo hover:fill-amarillo cursor-pointer' : !playMusica,
                        'opacity-50': playMusica
                    }"
                    @click="isPlay"
                />
                <Pause
                    class="text-white fill-white"
                    :class="{
                        'hover:text-amarillo hover:fill-amarillo cursor-pointer' : playMusica,
                        'opacity-50': !playMusica
                    }"
                    @click="isPause"
                />
                <Square class="text-white fill-white hover:text-amarillo hover:fill-amarillo cursor-pointer"
                    @click="isStop"
                />
                
            </div>

        </div>
        
    </div>
</template>

<style scoped>

    .grid-control {
        grid-template-rows: 70% 30%;
    }

/**
** TOCADISCOS */

    .container {
        width: 7rem;
        height: 7rem;
        background-color: var(--color-azulclaro);
        border-radius: 10px;
        position: relative;
        box-shadow: 5px 5px 0 0 var(--color-azuloscuro);
    }

    .plate {
        width: fit-content;
    }

    .plate .black,
    .plate .white,
    .plate .center,
    .plate .border {
        border-radius: 100%;
    }

    .container,
    .plate .black,
    .plate .white,
    .plate .border {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .plate .black {
        width: 6.5rem;
        height: 6.5rem;
        background-color: black;
        animation: rotation 2s infinite linear;
        animation-play-state: paused;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(359deg);
        }
    }

    .plate .white {
        width: 2rem;
        height: 2rem;
        background-color: var(--color-rojo);
    }

    .plate .center {
        width: 0.7rem;
        height: 0.7rem;
        background-color: black;
    }
    
    .plate .border {
        width: 4rem;
        height: 4rem;
        border-top: 3px solid rgba(255,255,255,0);
        border-bottom: 3px solid rgba(255,255,255,0);
        border-left: 3px solid rgba(0,0,0,0);
        border-right: 3px solid rgba(0,0,0,0);
    }
    

    .player {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: fit-content;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 0.3rem;
        margin-right: 0.3rem;
    }

    .player .circ {
        width: 1rem;
        height: 1rem;
        background-color: var(--color-amarillo);
        border-radius: 100%;
        z-index: 1;
    }

    .player .rect {
        width: 0.5rem;
        height: 2.5rem;
        background-color: var(--color-amarillo);
        position: absolute;
        bottom: 0;
        margin-bottom: 0.2rem;
    }

/** 
** ONDAS DE SONIDO */

    .wave-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        transition: ease 0.2s;
    }

    .wave-menu li {
        list-style: none;
        height: 3rem;
        width: 0.2rem;
        background: var(--color-amarillo);
        animation-name: wave1;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transition: ease 0.2s;
    }

    .wave-menu li:nth-child(2) {
        animation-name: wave2;
        animation-delay: 0.2s;
    }

    .wave-menu li:nth-child(3) {
        animation-name: wave3;
        animation-delay: 0.23s;
        animation-duration: 0.4s;
    }

    .wave-menu li:nth-child(4) {
        animation-name: wave4;
        animation-delay: 0.1s;
        animation-duration: 0.3s;
    }

    .wave-menu li:nth-child(5) {
        animation-delay: 0.5s;
    }

    .wave-menu li:nth-child(6) {
        animation-name: wave2;
        animation-duration: 0.5s;
    }

    .wave-menu li:nth-child(8) {
        animation-name: wave4;
        animation-delay: 0.4s;
        animation-duration: 0.25s;
    }

    .wave-menu li:nth-child(9) {
        animation-name: wave3;
        animation-delay: 0.15s;
    }

    @keyframes wave1 {
        from {
        transform: scaleY(1);
        }

        to {
        transform: scaleY(0.5);
        }
    }

    @keyframes wave2 {
        from {
        transform: scaleY(0.3);
        }

        to {
        transform: scaleY(0.6);
        }
    }

    @keyframes wave3 {
        from {
        transform: scaleY(0.6);
        }

        to {
        transform: scaleY(0.8);
        }
    }

    @keyframes wave4 {
        from {
        transform: scaleY(0.2);
        }

        to {
        transform: scaleY(0.5);
        }
    }

</style>