<script setup lang="ts">
    import Navegacion from '@/components/Navegacion.vue';

</script>

<template>
    <div>
        <header>
            <!--Logo / Barra de navegación / Idiomas -->
            <Navegacion/>
        </header>
    </div>

    <main>
        <RouterView/>
    </main>
</template>

<style scoped>

</style>