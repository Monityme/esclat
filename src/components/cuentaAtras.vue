<script setup lang="ts">

/**
    ** Para poder usar el plugin de cambio de idioma
*/ 
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import { ref } from 'vue';

    const dias = ref(0);
    const horas = ref(0);
    const min = ref(0);
    const seg = ref(0);

    interface TiempoRestante {
        dias: number;
        horas: number;
        min: number;
        seg: number;
    }

/**
    ** Recibe el valor introducido al añadir el componente en una página */
    interface Props {
        fecha: string;
    }
    const props = defineProps<Props>();
    const fechaEvento: string = props.fecha;
    
/**
    ** Calcula el tiempo que queda hasta la fecha */
    function calcularTiempo(fechaObjetivo: string): TiempoRestante {

        const hoy: number = new Date().getTime();
        const fecha: number = new Date(fechaObjetivo).getTime();
        const diferencia: number = fecha - hoy;

        const segundos: number = Math.floor(diferencia / 1000);
        const dias: number = Math.floor(segundos / (24*60*60));
        const horas: number = Math.floor((segundos % (24*60*60)) / (60 * 60));
        const min: number = Math.floor((segundos % (60*60)) / 60);
        const seg: number = Math.floor(segundos % 60);

        return { dias, horas, min, seg};

    };

/**
    ** Actualiza las variables reactivas (dias, horas, min, seg) cada segundo */
    function cuentaAtras(fechaObjetivo: string, callback: (tiempo: TiempoRestante) => void): NodeJS.Timeout {
                //callback: (tiempo: TiempoRestante) => void -> Cada segundo recibe el valor calculado del tiempo restante hasta la fecha
        callback(calcularTiempo(fechaObjetivo));

        const intervalo: NodeJS.Timeout = setInterval(() => {
            const tiempo: TiempoRestante = calcularTiempo(fechaObjetivo); //Obtiene el tiempo 
            callback(tiempo);
        }, 1000); //Se ejecuta cada segundo (1000ms)

        return intervalo;
    }

/**
    ** Guarda los valores en las variables de TiempoRestante */
    cuentaAtras(fechaEvento, (tiempo) => {
        dias.value = tiempo.dias;
        horas.value = tiempo.horas;
        min.value = tiempo.min;
        seg.value = tiempo.seg;
    })

</script>

<template>

    <div class="contenedor">

        <div class="contador"> <!--class="flex flex-col justify-center items-center gap-1 font-bold text-4xl bg-blue-800 text-white px-5 py-6"-->
            <span class="">{{ dias }} </span>
            <span class="text-xs font-medium">{{ t('cuentaAtras[0]') }}</span>
        </div>
        
        <div class="contador">
            <span class="">{{ horas }} </span>
            <span class="text-xs font-medium">{{ t('cuentaAtras[1]') }}</span>
        </div>

        <div class="contador">
            <span class="">{{ min }} </span>
            <span class="text-xs font-medium">{{ t('cuentaAtras[2]') }}</span>
        </div>

        <div class="contador">
            <span class="">{{ seg }} </span>
            <span class="text-xs font-medium">{{ t('cuentaAtras[3]') }}</span>
        </div>

    </div>

</template>

<style scoped>
    .contenedor {
        display: flex;
        justify-content: center;
        width: fill;
        background-color: var(--color-azuloscuro);
        color: var(--color-amarillo);
        gap: 4rem;
        padding-top: 0.25rem;
        padding-bottom: 0.5rem;
        font-weight: 700;
    }
    .contador {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
/* 
    .contenedor {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        width:40%;
    }

    .contador {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 2.5rem;
        background-color: var(--color-azuloscuro);
        color: var(--color-white);
        padding: 0.25rem 0 1rem 0;
        flex: 1;
    }
*/
</style>