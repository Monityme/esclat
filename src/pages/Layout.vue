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

    <footer class="bg-amber-500 flex fixed bottom-0 w-full px-4 py-2 justify-center">
        Esto es un footer :D
    </footer>
</template>

<style scoped>

</style>