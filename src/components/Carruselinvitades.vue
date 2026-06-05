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
    <div class="absolute flex opacity-100 top-0 justify-center items-center w-full h-screen z-99 bg-black/75">
        <div class="galeriaInvitades w-[70%] h-[90%] fixed">

            <div class=" z-100 botonCerrar absolute top-2 right-2 w-8 h-8 bg-black flex items-center justify-center text-amarillo hover:text-black hover:bg-amarillo cursor-pointer
                max-sm:h-7 max-sm:w-7 max-sm:right-4"
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

                            <div style="grid-area: titulo" class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-bottom-left text-amarillo font-bold text-5xl flex flex-row py-3 px-8 w-fill h-fill
                                max-sm:text-xl min-[900px]:px-8 max-[900px]:text-3xl max-[900px]:px-6">
                                <span class="flex-1 flex overflow-visible items-center max-[900px]:text-wrap max-w-[70%]">
                                    {{ t(invitade.nombre) }}
                                </span>
                                <span class="absolute flex text-nowrap ml-[60%] self-end items-end justify-end text-xl text-right
                                    min-[900px]:text-2xl max-sm:text-xs max-[900px]:ml-[50%]"
                                >
                                    {{ invitade.dia }}.10.26<br>{{ invitade.horaI }}
                                </span>
                            </div>

                            <div style="grid-area: texto" class="descripcion bg-[url('/texturas/color/azulclaro04.jpg')] px-6 pb-4 flex items-end
                                max-sm:text-xs">{{ t(invitade.descripcion) }}
                            </div>

                            <div style="grid-area: musica" class="bg-black flex flex-col justify-center px-5">
                                <RRSS
                                    :spotify="invitade.spotify"
                                    :youtube="invitade.youtube"
                                    :web="invitade.web"
                                    :instagram="invitade.instagram"
                                    :tiktok="invitade.tiktok"
                                    :twitter="invitade.twitter"
                                    :facebook="invitade.facebook"
                                    :threads="invitade.threads"
                                    :footer="false"
                                />

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

    @media (max-width: 900px) {
        .galeriaInvitades {
            width: 100vw;
            height: 100vh;
        }
        .gridGeneral {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-template-rows: 15% 60% 25%;
        grid-template-areas:
            "img1 titulo"
            "caja1 texto"
            "img3 musica"
        }
    }

    @media (min-width: 900px){
        .gridGeneral {
            display: grid;
            grid-template-columns: 15% 20% 65%;
            grid-template-rows: 25% 50% 25%;
            grid-template-areas:
                "img1 titulo titulo"
                "caja1 img2 texto"
                "img3 caja2 musica"
        }
    }

    .descripcion {
        white-space: pre-line;
    }

</style>