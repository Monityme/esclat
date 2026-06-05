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
                class="bg-[url('/texturas/color/amarillo03.jpg')] px-5 h-full w-full flex flex-col gap-15 items-center justify-center max-[768px]:justify-end max-[768px]:pl-2">
                
                <div class="flex w-full flex-col gap-5 text-xl px-5
                max-[768px]:text-[15px] max-[768px]:px-2 max-[768px]:py-5 max-[768px]:gap-3"">
                    
                <LogoEsclatNoSubs class="w-[40%] max-[768px]:w-[60%]"/>
                
                <p>
                        {{ t('about[0]') }}
                        <span class="font-black">{{ t('about[1]') }}</span>
                    </p>
                    <p>
                        {{ t('about[2]') }}
                        <span class="font-black">{{ t('about[3]') }}</span>
                        {{ t('about[4]') }}
                    </p>
                    <p>
                        {{ t('about[5]') }} 
                        <span class="font-black">{{ t('about[6]') }}</span>
                        {{ t('about[7]') }} 
                        <span class="font-black">{{ t('about[8]') }}</span>.
                    </p>
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

    @media (max-width: 768px) {
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

    @media (min-width: 768px) {
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
    }

</style>