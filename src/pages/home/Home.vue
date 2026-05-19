<script lang="ts" setup>

    import WebFooter from '@/components/WebFooter.vue';

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

</script>

<template>
    <!--<img src="/public/home/fondoHome01.jpg"/>-->
    <div class="fondo w-full max-w-screen">
        <!--<img src="/public/home/fondoHome01.jpg"/>-->
        <div class="seccion1 h-full">

        
            <div class="pl-10 pt-5 text-amarillo font-bold text-3xl" style="grid-area: logo">
                <span class="text-9xl">ESCLAT</span><br>
                <span class="pl-2">FESTIVAL DE MÚSICA,</span><br>
                <span class="pl-2">PENSAMENT I CREATIVITAT</span>
            </div>
            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>
            <div class="fecha bg-amarillo text-4xl flex flex-col gap-2 justify-center items-center" style="grid-area: texto1">
                <span class=" font-bold text-5xl">23, 24 y 25</span>
                <span>Octubre 2026</span>
            </div>
            <div class="bg-rojo" style="grid-area: caja1"></div>
            <div class="bg-azulclaro flex flex-wrap text-xl p-5 items-center" style="grid-area: texto2">
                <span>{{ t('home_texto1[0]') }}<span class="font-bold">{{ t('home_texto1[1]') }}</span>{{ t('home_texto1[2]') }}<span class="font-bold">{{ t('home_texto1[3]') }}</span></span>
            </div>
            <div class="bg-azuloscuro" style="grid-area: caja2"></div>

        </div>

    </div>
    

    <WebFooter />
</template>

<style scoped>

    .fondo {
        background-image: url("/home/fondoHome01.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: calc(100vh - 120px);
    }

    .seccion1 {
        margin-top: 120px;
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 24% 42% 22% 12%;
        grid-template-areas:
            "logo texto1 vacio1"
            "logo vacio2 caja1"
            "logo texto2 vacio3"
            "caja2 vacio4 vacio4";
    }

</style>

