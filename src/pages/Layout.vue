<script setup lang="ts">
import LogoMiopia from '@/components/icons/LogoMiopia.vue';
import Navegacion from '@/components/Navegacion.vue';

</script>

<template>
    <header>
        <Navegacion class="bg-negro text-white"/> <!-- ?Barra de navegación + Selección de idiomas-->
    </header>

    <main>
        <RouterView class="min-h-full grow"/>
    </main>

    <footer class="bg-black flex-col flex fixed bottom-0 w-full px-4 py-2 justify-center items-center text-white text-sm"> <!-- TODO - Cambiar a static?-->
        <div class="flex w-full justify-around my-5">
            <div class="seccion">
                2026 © ESCLAT 2026
                <LogoMiopia />
            </div>
            <div class="seccion">
                Sección 2
            </div>
            <div class="seccion">
                Política de Privacidad<br>Aviso Legal<br>Política de Cookies
            </div>
            <div class="seccion">
                Sección 4
            </div>
        </div>
        <div class="text-gray-400">
            Web Created by © Miopía
        </div>
    </footer>

</template>

<style scoped>
    
</style>