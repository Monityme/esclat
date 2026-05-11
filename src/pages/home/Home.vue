<script lang="ts" setup>

    import cuentaAtras from '@/components/cuentaAtras.vue';


/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

</script>

<template>
    <div>
        <h1 class="text-3xl">
            {{ t('mensaje') }} <!-- ?El texto cambiará según el idioma escogido -->
        </h1>
        <br>
        <!-- ?Cuenta atrás desde la fecha actual hasta la fecha introducida -->
        <cuentaAtras fecha="2026-10-29T10:00:00"/>
        <br>
    </div>

</template>

<style scoped>


</style>

