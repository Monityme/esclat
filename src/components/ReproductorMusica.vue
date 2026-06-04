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
    <div class="w-full h-full flex justify-center items-center gap-3
    min-[700px]:
    max-[700px]:flex-col">
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
        
        <div class="flex gap-8
         max-[700px]:flex-row max-[700px]:gap-3">
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
</template>

<style scoped>

    @media (max-width: 700px){
        .container {
            width: 5rem;
            height: 5rem;
            background-color: var(--color-azulclaro);
            border-radius: 10px;
            position: relative;
            box-shadow: 5px 5px 0 0 var(--color-azuloscuro);
        }

        .plate .black {
            width: 4.5rem;
            height: 4.5rem;
            background-color: black;
            animation: rotation 2s infinite linear;
            animation-play-state: paused;
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
    }


    @media (min-width: 700px){
        .container {
            width: 7rem;
            height: 7rem;
            background-color: var(--color-azulclaro);
            border-radius: 10px;
            position: relative;
            box-shadow: 5px 5px 0 0 var(--color-azuloscuro);
        }

        .plate .black {
            width: 6.5rem;
            height: 6.5rem;
            background-color: black;
            animation: rotation 2s infinite linear;
            animation-play-state: paused;
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

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(359deg);
        }
    }

</style>