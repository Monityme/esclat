<script setup lang="ts">

    import { Play, Pause, Square } from '@lucide/vue';
    import { useSound } from '@vueuse/sound';
    import { ref, onUnmounted } from 'vue';
    
    import { playMusica } from './Carruselinvitades.vue';
    import { musicBus } from '@/composables/EventoMusica'
    
    const props = defineProps<{
        cancion: string;
        artista: string;
        titulo: string;
        foto: string;
    }>()

    const { play, pause, stop } = useSound(props.cancion)

    const discoKey = ref(0);


    function isPlay() {
        play()
        playMusica.value = true;
    }

    function isPause() {
        pause()
        playMusica.value = false;
    }

    function isStop() {
        stop()
        playMusica.value = false;
        discoKey.value++;
    }

    onUnmounted(() => {
        stop()
    })

    musicBus.on(() => {
        stop()
        playMusica.value = false;
        discoKey.value++;
    })
    
</script>

<template>
    <div class="w-full h-full flex justify-center items-center gap-3">
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

            <div class="player" :style="{rotate: playMusica ? '-45deg' : '0deg'}">
                <div class="rect"></div>
                <div class="circ"></div>
            </div>

        </div>
        <Play class="text-white fill-white hover:text-amarillo hover:fill-amarillo cursor-pointer"
            @click="isPlay"
        />
        <Pause class="text-white fill-white hover:text-amarillo hover:fill-amarillo cursor-pointer"
            @click="isPause"
        />
        <Square class="text-white fill-white hover:text-amarillo hover:fill-amarillo cursor-pointer"
            @click="isStop"/>
        
    </div>
</template>

<style scoped>

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
        rotate: -45deg;
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
</style>