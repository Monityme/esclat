<script setup lang="ts">

    import { Play, Pause } from '@lucide/vue';
    import { useSound } from '@vueuse/sound'
    
    const props = defineProps<{
        cancion: string;
    }>()

    let audio = null

    const { play, pause, stop } = useSound(props.cancion)

</script>

<template>
    <div class="w-full h-full flex justify-center items-center gap-3">
        <div class="container">
            <div class="plate">
                <div class="black">
                    <div class="border">
                        <div class="white">
                            <div class="center"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="player">
                <div class="rect"></div>
                <div class="circ"></div>
            </div>

        </div>
        <Play class="text-white fill-white"
            @click="play()"
        />
        <Pause class="text-white fill-white"/>
        
    </div>
</template>

<style scoped>

    .container {
        width: 175px;
        height: 175px;
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
        width: 150px;
        height: 150px;
        background-color: black;
        animation: rotation 2s infinite linear;
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
        width: 70px;
        height: 70px;
        background-color: var(--color-amarillo);
    }

    .plate .center {
        width: 20px;
        height: 20px;
        background-color: black;
    }

    .plate .border {
        width: 111px;
        height: 111px;
        border-top: 3px solid rgba(255,255,255,0.3);
        border-bottom: 3px solid rgba(255,255,255,0.3);
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
        margin-bottom: 8px;
        margin-right: 8px;
        rotate: -45deg;
    }

    .player .circ {
        width: 25px;
        height: 25px;
        background-color: var(--color-rojo);
        border-radius: 100%;
        z-index: 1;
    }

    .player .rect {
        width: 10px;
        height: 55px;
        background-color: var(--color-rojo);
        position: absolute;
        bottom: 0;
        margin-bottom: 5px;
    }
</style>