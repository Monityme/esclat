<script lang="ts" setup>
    //import LogoEsclat from '@/components/logos/organiza/LogoEsclat.vue';
    import LogoEsclat from '@/components/logos/LogoEsclat.vue';
    import Fechas from '@/components/logos/Fechas.vue';

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});
    
    import Flecha from '@/components/iconos/Flecha.vue';
    import Carrusel from '@/components/Carrusel.vue';

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = true;

</script>

<template>
    <div class="fondo w-full max-w-screen">
        <div class="seccion1 h-full">
        
            <div style="grid-area: logo"
                class="pl-14 pt-10 text-amarillo font-bold text-3xl
                    max-sm:pl-10 max-sm:pt-8"
            >
                <LogoEsclat class="h-60 max-[970px]:h-50 max-[900px]:h-40 max-sm:h-30" />
            </div>
            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>

            <div style="grid-area: caja1" class="bg-[url('/texturas/color/rojo04.jpg')]"></div>
            <div style="grid-area: caja2" class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-center"></div>

            <div style="grid-area: texto1" class="fecha bg-[url('/texturas/color/amarillo01.jpg')] text-4xl flex flex-col gap-2 justify-center items-center">
                <Fechas class=" max-h-[70%] max-w-[70%]
                    max-[900px]:h-[55%] "
                />
            </div>
            <div style="grid-area: texto2" class="bg-[url('/texturas/color/azulclaro01.jpg')] bg-center flex flex-wrap text-xl items-center px-5 max-[950px]:text-lg">
                <span>{{ t('home.texto1[0]') }}<span class="font-bold">{{ t('home.texto1[1]') }}</span>{{ t('home.texto1[2]') }}<span class="font-bold">{{ t('home.texto1[3]') }}</span></span>
            </div>
            

        </div>

    </div>
    
    <div class="seccion2 h-full w-full max-w-screen flex flex-row max-[900px]:flex-col">

        <div style="grid-area: video"
            class="video bg-gray-800 flex justify-center items-center w-full h-full"
        >
            <iframe class="h-full w-full"
                src="https://www.youtube.com/embed/R0UtTho8z8c?si=hU65QN1v5tMUjCWW"
                title="Video Spot" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            >
            </iframe>
        </div>
        <div style="grid-area: texto"
            class="bg-[url('/texturas/color/amarillo03.jpg')] max-[900px]:bg-bottom-left flex flex-col w-full h-full justify-center items-start gap-5 p-5 text-xl
                max-[950px]:text-[1rem]"
        >
            <span class="font-bold">{{ t('home.texto2[0]') }}</span><span>{{ t('home.texto2[1]') }}</span><span class="font-bold flex flex-col w-full">{{ t('home.texto2[2]') }} <span class="self-end font-bold">{{ t('home.texto2[3]') }}</span></span>
        </div>

    </div>

    <div class="seccion3 h-50">
        
        <Carrusel class="absolute h-full max-w-full overflow-hidden"/>

        <div style="grid-area: vacio3_1"></div>
        <div style="grid-area: vacio3_2"></div>
        <div style="grid-area: vacio3_3"></div>
        <div style="grid-area: vacio3_4"></div>
        <div style="grid-area: vacio3_5"></div>
        <div style="grid-area: vacio3_6"></div>
        <div style="grid-area: vacio3_7"></div>
        
        <div style="grid-area: caja3_1" class="bg-[url('/texturas/color/rojo04.jpg')]  bg-bottom"></div>
        <div style="grid-area: caja3_2" class="bg-[url('/texturas/color/azulclaro04.jpg')]"></div>
        <div style="grid-area: caja3_3" class="bg-[url('/texturas/color/rojo02.jpg')] bg-size-[700%] bg-bottom-right"></div>
        <div style="grid-area: caja3_4" class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-bottom-right"></div>

        
        <div style="grid-area: texto3_1"
            class="botonEntradas text-black flex flex-row items-center font-bold text-4xl
                justify-center"
        >
            <RouterLink to="/entradas" class="flex flex-row items-center max-w-full gap-4 max-[900px]:gap-7">
                <div class=" pl-12 max-[1300px]:pl-5">
                    <span class="text-4xl max-[900px]:text-3xl">{{ t('home.texto3[0]') }}</span>
                    <span class="flex text-5xl max-[900px]:text-4xl">{{ t('home.texto3[1]') }}</span>
                </div>
                <Flecha class="h-20 -ml-15 max-[900px]:-ml-5"/>
            </RouterLink>
        </div>
        
    </div>
    
</template>

<style scoped>

    @media (max-width: 900px){
        .fondo {
            background-image: url("/home/fondoHome01.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: calc(100vh - 120px);
        }
        .seccion1 {
            margin-top: 120px;
            display: grid;
            grid-template-columns: 80% 20%;
            grid-template-rows: 35% 22% 15% 20% 8%;
            grid-template-areas:
                "logo vacio1"
                "texto1 vacio2"
                "vacio3 caja1"
                "texto2 vacio4 "
                "vacio5 caja2";
        }
        .seccion2 {
            .video {
                width: 100%;
                aspect-ratio: 16 / 9;
            }
        }
        .seccion3 {
            height: 100vh;
            display: grid;
            grid-template-columns: 80% 20%;
            grid-template-rows: 12% 30% 28% 30%;
            grid-template-areas:
                "caja3_1 vacio3_1"
                "vacio3_2 caja3_2"
                "texto3_1 vacio3_3"
                "vacio3_6 caja3_4"
        }
        .botonEntradas {
            cursor: pointer;
            background-color: black;
            background-image: url("/texturas/color/amarillo01.jpg");
            transition-timing-function: var(--ease-in-out);
            transition-duration: 400ms;
            transition-property: all;
        }
        .botonEntradas:hover {
            background-image: none;
            color: var(--color-amarillo);
        }
        
        .botonEntradas svg {
            transition-timing-function: var(--ease-in-out);
            transition-duration: 400ms;
            transition-property: all;
        }
        .botonEntradas:hover svg {
            margin-left: 0rem;
        }
    }

    @media (min-width: 900px){
        .fondo {
            background-image: url("/home/fondoHome01.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: calc(100vh - 120px);
        }

        .seccion1 {
            margin-top: 120px;
            display: grid;
            grid-template-columns: 66% 24% 10%;
            grid-template-rows: 24% 42% 22% 12%;
            grid-template-areas:
                "logo texto1 vacio1"
                "logo vacio2 caja1"
                "logo texto2 vacio3"
                "caja2 vacio4 vacio4";
        }

        .seccion2 {
            height: calc(100vh - 120px);
            display: grid;
            grid-template-columns: 66% 34%;
            grid-template-areas: "video texto";
            white-space: pre-line;
        }

        .seccion3 {
            height: calc(100vh - 120px);
            display: grid;
            grid-template-columns: 33% 33% 24% 10%;
            grid-template-rows: 12% 30% 28% 30%;
            grid-template-areas:
                "caja3_1 caja3_1 vacio3_1 vacio3_1"
                "vacio3_2 vacio3_3 caja3_2 vacio3_4"
                "vacio3_2 texto3_1 vacio3_5 caja3_3"
                "vacio3_2 vacio3_6 caja3_4 vacio3_7"
        }

        .botonEntradas {
            cursor: pointer;
            background-color: black;
            background-image: url("/texturas/color/amarillo01.jpg");
            transition-timing-function: var(--ease-in-out);
            transition-duration: 400ms;
            transition-property: all;
        }

        .botonEntradas:hover {
            background-image: none;
            color: var(--color-amarillo);
        }
        
        .botonEntradas svg {
            transition-timing-function: var(--ease-in-out);
            transition-duration: 400ms;
            transition-property: all;
        }

        .botonEntradas:hover svg {
            margin-left: 0rem;
        }

        .seccion3 {
            background-image: url("/fotos/fondoHome01.jpg");
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
    
</style>

