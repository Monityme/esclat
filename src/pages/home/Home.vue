<script lang="ts" setup>

    import cuentaAtras from '@/components/cuentaAtras.vue';
    
    //Para poder usar el plugin de cambio de idioma
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

</script>

<template>
    <h1 class="text-3xl text-red-500">
        {{ t('mensaje') }} <!--El texto cambiará según el idioma escogido-->
    </h1>
    <br>
    <!--Cuenta atrás desde la fecha actual hasta la fecha introducida-->
    <cuentaAtras fecha="2026-10-29T10:00:00"/>
    <br><br>
    <Button class="enlace-underline">
        enlace-underline
    </Button> || 
    <Button class="enlace-underline-color">
        enlace-underline-color
    </Button> || 
    <Button class="enlace-underline-color2">
        enlace-underline-color2
    </Button> || 
    <Button class="enlace-underline-color3">
        enlace-underline-color3
    </Button>

</template>

<style scoped>


</style>

