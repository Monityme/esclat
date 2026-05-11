<script setup lang="ts">

    import Navegacion from '@/components/Navegacion.vue';

</script>

<template>
    <div>
        <header>
            <Navegacion class="bg-azulclaro "/> <!--Barra de navegación + Selección de idiomas-->
        </header>
    </div>

    <main>
        <RouterView/>
    </main>

    <footer class="bg-amarillo flex fixed bottom-0 w-full px-4 py-2 justify-center">
        2026 © ESCLAT 2026 - Created by © Miopía

        <!--
        Política de privacidad
        Aviso Legal
        Política de Cookies
        -->
    </footer>

</template>

<style scoped>

</style>