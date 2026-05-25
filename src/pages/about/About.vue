<script setup lang="ts">
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

            <div style="grid-area: caja1" class="bg-azuloscuro"></div>
            <div style="grid-area: caja2" class="bg-azulclaro"></div>

            <div style="grid-area: contenido"
                class="bg-amarillo pb-5 px-5 h-full flex flex-row gap-5">

            </div>
        
        </div>

    </div>
</template>

<style scoped>

    .principal {
        height: calc(100vh - 60px);
    }
    
    .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 12% 88% ;
        grid-template-areas:
        "vacio2 caja2 vacio3"    
        "contenido vacio1 caja1";
    }
</style>