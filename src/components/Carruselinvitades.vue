<script setup lang="ts">

    import { mostrarGaleria } from '@/pages/Layout.vue';
    import { X } from '@lucide/vue';
    import RRSS from './RRSS.vue';

    import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
    } from '@/components/ui/carousel'

    /**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});


    /**
    ** Coge el número de imagen seleccionada del grid de Invitades.vue */
    const props = defineProps<{
        invitades: any
        inicio: number
    }>()


</script>

<template>
    <div class="galeriaInvitades absolute flex opacity-100 top-0 justify-center items-center w-full h-screen z-99 bg-black/75">
        <div class="w-[70%] h-[90%] fixed">

            <div class=" z-100 botonCerrar absolute top-2 right-2 w-8 h-8 bg-black flex items-center justify-center text-amarillo hover:text-black hover:bg-amarillo cursor-pointer"
                @click="mostrarGaleria = false"
            >
                <X/>
            </div>

            <div class="min-w-full h-full flex">

                <Carousel class="w-full h-full flex"
                    :opts="{ loop: true,
                        startIndex: props.inicio
                    }"
                >

                    <CarouselContent class="h-full">

                        <CarouselItem v-for="invitade in invitades" class="gridGeneral w-full h-full grid">

                            <div style="grid-area: img1" class="bg-cover bg-center" :style="{backgroundImage:`url(${invitade.icono})`}" ></div>
                            <div style="grid-area: img2" class="bg-cover bg-center" :style="{backgroundImage:`url(${invitade.fotos[0]})`}"></div>
                            <div style="grid-area: img3" class="bg-cover bg-center" :style="{backgroundImage:`url(${invitade.fotos[1]})`}"></div>

                            <div style="grid-area: caja1" class="bg-[url('/texturas/color/rojo01.jpg')]"></div>
                            <div style="grid-area: caja2" class="bg-[url('/texturas/color/amarillo02.jpg')] bg-size-[500%]"></div>

                            <div style="grid-area: titulo" class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-bottom-left text-amarillo font-bold text-5xl flex flex-row py-3 px-8 w-fill h-fill">
                                <span class="flex-1 flex overflow-visible items-center text-nowrap">{{ t(invitade.nombre) }}</span>
                                <span class="flex-1 flex text-nowrap items-end justify-end text-2xl">{{ t(invitade.diaSemana) }} {{ invitade.dia }} a las {{ invitade.horaI }} </span>
                            </div>
                            <div style="grid-area: texto" class="descripcion bg-[url('/texturas/color/azulclaro04.jpg')] px-6 pb-4 flex items-end text-md">{{ t(invitade.descripcion) }}</div>
                            <div style="grid-area: musica" class="bg-black flex items-center justify-center">

                                <!-- ** Aquí van las RRSS -->
                                <RRSS />

                            </div>

                        </CarouselItem>

                    </CarouselContent >

                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </div>
    </div>
</template>
    

<style scoped>

    .gridGeneral {
        display: grid;
        grid-template-columns: 15% 20% 65%;
        grid-template-rows: 25% 50% 25%;
        grid-template-areas:
            "img1 titulo titulo"
            "caja1 img2 texto"
            "img3 caja2 musica"
    }

    .descripcion {
        white-space: pre-line;
    }

</style>