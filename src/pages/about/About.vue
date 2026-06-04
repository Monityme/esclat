<script setup lang="ts">
    import WebFooter from '@/components/WebFooter.vue';

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

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

            <div style="grid-area: caja1" class="bg-azuloscuro"></div>
            <div style="grid-area: caja2" class="bg-azulclaro"></div>

            <div style="grid-area: contenido"
                class="bg-amarillo py-10 px-10 h-full flex flex-col gap-5 text-xl pr-25
                max-[700px]:text-[16px] max-[700px]:px-5 max-[700px]:py-5 max-[700px]:gap-3">

                <h1 class="text-4xl font-black
                max-[700px]:text-xl">{{ t('about[10]') }}</h1>

                <p>{{ t('about[0]') }} <span class="font-black">{{ t('about[1]') }}</span></p>

                <p>{{ t('about[2]') }}<span class="font-black">{{ t('about[3]') }}</span>{{ t('about[4]') }}</p>

                <p>{{ t('about[5]') }} <span class="font-black">{{ t('about[6]') }}</span>{{ t('about[7]') }} <span class="font-black">{{ t('about[8]') }}</span></p>

                <!-- <p>{{ t('about[9]') }}</p> -->
            </div>
        
        </div>

    </div>
</template>

<style scoped>

    @media (max-width: 700px) {
        .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 12% 76% 12% ;
        grid-template-areas:
        "vacio2 caja2"    
        "contenido vacio1"
        "vacio3 caja1";
    }
    
    }

    @media (min-width: 700px) {
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
    
    }

    .principal {
        height: calc(100vh - 60px);
    }
    
    
</style>