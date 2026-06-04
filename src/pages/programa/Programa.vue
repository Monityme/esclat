<script lang="ts" setup>
    import WebFooter from '@/components/WebFooter.vue';

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

</script>

<template>
    <div class="principal">

        <div class="main">

            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>
            <div style="grid-area: vacio5"></div>

            <div style="grid-area: caja1" class="bg-amarillo"></div>
            <div style="grid-area: caja2" class="bg-azuloscuro"></div>
            <div style="grid-area: caja3" class="bg-rojo"></div>

            <div style="grid-area: contenido"
                class="bg-azulclaro pb-5 px-5 h-full flex flex-col">


            </div> <!-- final "contenido"-->

        </div> <!--final ".main"-->

    </div>
    
</template>

<style scoped>

    .principal {
        height: calc(100vh - 60px);
    }

    @media (max-width: 700px) {
        .main {
        background-image: url("/fondos/fondo04.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 9% 77% 14%;
        grid-template-areas:
            "vacio1 caja1"
            "contenido vacio3"
            "vacio4 caja3";
        }
    
    }

    @media (min-width: 700px) {
        .main {
        background-image: url("/fondos/fondo04.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 9% 77% 14%;
        grid-template-areas:
            "vacio1 caja1 vacio2"
            "contenido vacio3 caja2"
            "vacio4 caja3 vacio5";
        }
    
    }

    /*  */

</style>