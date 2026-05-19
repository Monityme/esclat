<script setup lang="ts">

    import Navegacion from '@/components/Navegacion.vue';
    import cuentaAtras from '@/components/cuentaAtras.vue';

</script>

<template>
    <header>
        <Navegacion class="bg-black text-white"/> <!-- ?Barra de navegación + Selección de idiomas-->
        <cuentaAtras fecha="2026-10-29T10:00:00"/> <!-- ?Cuenta atrás desde la fecha actual hasta la fecha introducida -->
    </header>

    <main>
        <RouterView class="min-h-full grow mt-[120px]"/>
    </main>

</template>

<style scoped>
    
</style>