<script lang="ts">
    export const mostrarCuentaAtras = ref<boolean>(true);
</script>

<script setup lang="ts">

    import Navegacion from '@/components/Navegacion.vue';
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

</template>

<style scoped>
    
</style>