<script setup lang="ts">

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

    import LogoEsclatNoSubs from '@/components/logos/organiza/LogoEsclatNoSubs.vue';

    /**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

</script>

<template>

    <div class="principal">

        <div class="main">
            
            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>

            <div style="grid-area: caja1" class="bg-[url('/texturas/color/azuloscuro02.jpg')] bg-left"></div>
            <div style="grid-area: caja2" class="bg-[url('/texturas/color/azulclaro01.jpg')]"></div>

            <div style="grid-area: contenido"
                class="bg-[url('/texturas/color/amarillo03.jpg')] px-5 h-full w-full flex flex-col gap-15 items-center justify-center">
                <LogoEsclatNoSubs class="w-[40%]"/>
                <div class="flex w-full flex-col gap-5 text-xl px-5">
                    <span>{{ t('about[0]') }}</span>
                    <span>{{ t('about[1]') }}</span>
                    <span>{{ t('about[2]') }}</span>
                    <span>{{ t('about[3]') }}</span>
                </div>
            </div>
        
        </div>

    </div>
</template>

<style scoped>

    .principal {
        height: calc(100vh - 60px);
        white-space: pre-line;
    }
    
    .main {
        background-image: url("/fondos/fondo04.jpg");
        background-size: 100%;
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