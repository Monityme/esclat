<script setup lang="ts">

    import { mostrarGaleria } from '@/pages/Layout.vue';
    import { X } from '@lucide/vue';

    import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
    } from '@/components/ui/carousel'

    import { invitades } from '@/pages/invitades/invitades';
    let artistas = invitades.slice(0,15);

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    /**
    ** Recibe el valor introducido al añadir el componente en una página */
   /*
    interface Props {
        invitades: string[];
    }
    const props = defineProps<Props>();
    */

</script>

<template>
    <div class="galeriaInvitades absolute flex opacity-100 top-0 justify-center items-center w-screen h-screen z-99 bg-black/75">
        <div class="w-[70%] h-[90%] fixed">
            <div class=" z-100 botonCerrar absolute top-2 right-2 w-8 h-8 bg-black flex items-center justify-center text-amarillo hover:text-black hover:bg-amarillo cursor-pointer"
                @click="mostrarGaleria = false"
            >
                <X/>
            </div>
            <div class="w-full h-full flex">
                <Carousel class="w-[100%] h-full flex">
                    <CarouselContent class="min-w-full h-full flex bg-white">
                        <CarouselItem v-for="artista in artistas" class="gridGeneral w-full h-full grid">
                            <div style="grid-area: img1" class="bg-cover bg-center" :style="{backgroundImage:`url(${artista.icono})`}" ></div>
                            <div style="grid-area: img2" class="bg-white"></div>
                            <div style="grid-area: img3" class="bg-white"></div>

                            <div style="grid-area: caja1" class="bg-rojo"></div>
                            <div style="grid-area: caja2" class="bg-amarillo"></div>

                            <div style="grid-area: titulo" class="bg-azuloscuro text-amarillo font-bold text-5xl flex flex-row py-3 px-8 w-fill h-fill">
                                <span class="flex-1 flex overflow-visible items-center text-nowrap">{{ artista.nombre }}</span>
                                <span class="flex-1 flex text-nowrap items-end justify-end text-2xl">{{ t(artista.diaSemana) }} {{ artista.dia }} a las {{ artista.horaI }} </span>
                            </div>
                            <div style="grid-area: texto" class="bg-azulclaro p-6 flex items-center text-sm">{{ t(artista.descripcion) }}</div>
                            <div style="grid-area: musica" class="bg-black"></div>

                            <!-- <div class="flex w-full h-40">
                                <img :src="`${artista.icono}`" class="">
                                <div class="text-amarillo bg-azuloscuro px-10 text-5xl font-bold w-full flex items-center">{{ artista.nombre }}</div>
                            </div>
                            <div class="bg-azulclaro p-4">{{ t(artista.descripcion) }}</div> -->
                        </CarouselItem>
                    </CarouselContent>
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
        grid-template-rows: 25% 55% 20%;
        grid-template-areas:
            "img1 titulo titulo"
            "caja1 img2 texto"
            "img3 caja2 musica"
    }

</style>