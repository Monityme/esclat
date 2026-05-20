<script lang="ts" setup>

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import WebFooter from '@/components/WebFooter.vue';
    //import { CirclePlay } from '@lucide/vue';
    import Flecha from '@/components/iconos/Flecha.vue';
    import Carrusel from '@/components/Carrusel.vue';


</script>

<template>
    <!--<img src="/public/home/fondoHome01.jpg"/>-->
    <div class="fondo w-full max-w-screen">
        <!--<img src="/public/home/fondoHome01.jpg"/>-->
        <div class="seccion1 h-full">
        
            <div class="pl-10 pt-5 text-amarillo font-bold text-3xl" style="grid-area: logo">
                <span class="text-9xl">ESCLAT</span><br>
                <span class="pl-2">FESTIVAL DE MÚSICA,</span><br>
                <span class="pl-2">PENSAMENT I CREATIVITAT</span>
            </div>
            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>
            <div class="fecha bg-amarillo text-4xl flex flex-col gap-2 justify-center items-center" style="grid-area: texto1">
                <span class=" font-bold text-5xl">23, 24 y 25</span>
                <span>Octubre 2026</span>
            </div>
            <div class="bg-rojo" style="grid-area: caja1"></div>
            <div class="bg-azulclaro flex flex-wrap text-xl p-5 items-center" style="grid-area: texto2">
                <span>{{ t('home_texto1[0]') }}<span class="font-bold">{{ t('home_texto1[1]') }}</span>{{ t('home_texto1[2]') }}<span class="font-bold">{{ t('home_texto1[3]') }}</span></span>
            </div>
            <div class="bg-azuloscuro" style="grid-area: caja2"></div>

        </div>

    </div>
    
    <div class="seccion2 h-full w-full max-w-screen">

        <div style="grid-area: video" class="bg-gray-800 flex justify-center items-center"><CirclePlay class="text-white h-30 w-auto"/></div>
        <div style="grid-area: texto" class="bg-amarillo flex items-center p-5 text-xl font-bold">AQUÍ VA EL TEXTO</div>

    </div>

    <div class="seccion3">
        
        <!--<img src="/home/fondoHome01.jpg" class="absolute -z-2"/>-->
        <Carrusel/>

        <div style="grid-area: vacio3_1"></div>
        <div style="grid-area: vacio3_2"></div>
        <div style="grid-area: vacio3_3"></div>
        <div style="grid-area: vacio3_4"></div>
        <div style="grid-area: vacio3_5"></div>
        <div style="grid-area: vacio3_6"></div>
        <div style="grid-area: vacio3_7"></div>
        
        <div style="grid-area: caja3_1" class="bg-rojo"></div>
        <div style="grid-area: caja3_2" class="bg-azulclaro"></div>
        <div style="grid-area: caja3_3" class="bg-rojo"></div>
        <div style="grid-area: caja3_4" class="bg-azuloscuro"></div>

        
        <div style="grid-area: texto3_1" class="botonEntradas bg-amarillo text-black flex flex-row items-center font-bold text-4xl">
            <RouterLink to="/entradas" class="flex flex-row items-center max-w-full">
                <div class="pl-12">
                    <span class="">Reserva tus</span>
                    <span class="flex text-5xl">Entradas</span>
                </div>
                <Flecha class="h-20 -ml-10"/>
            </RouterLink>
        </div>
        
    </div>

    <WebFooter />
</template>

<style scoped>

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
        transition-timing-function: var(--ease-in-out);
        transition-duration: 400ms;
        transition-property: all;
    }

    .botonEntradas:hover {
        background-color: black;
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

</style>

