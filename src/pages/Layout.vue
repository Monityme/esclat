<script lang="ts">
    export let mostrarCuentaAtras = ref<boolean>(true);
    export let mostrarGaleria = ref<boolean>(false);
    export let mostrarGaleriaArtistas = ref<boolean>(false);

    /*
    export const switchCuentaAtras = (a: boolean) => {
        return mostrarCuentaAtras.value = a;
    }
    */

</script>

<script setup lang="ts">

    import Navegacion from '@/components/Navegacion.vue';
import WebFooter from '@/components/WebFooter.vue';
    import cuentaAtras from '@/components/cuentaAtras.vue';
    import { ref } from 'vue';

</script>

<template>
    <header>
        <Navegacion class="bg-black text-white"/> <!-- ?Barra de navegación + Selección de idiomas-->
        <cuentaAtras v-if="mostrarCuentaAtras" fecha="2026-10-29T10:00:00"/> <!-- ?Cuenta atrás desde la fecha actual hasta la fecha introducida -->
    </header>

    <main>
        <RouterView class="min-h-full grow mt-[60px]"/>
    </main>

    <WebFooter class="m-w-[100%]" />

</template>

<style scoped>
    
</style>