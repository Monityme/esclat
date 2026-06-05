<script lang="ts">
    export const playMusica = ref<boolean>(false);
    export const pararMusica = ref<boolean>(true);
</script>
<script setup lang="ts">

    import { mostrarGaleriaArtistas } from '@/pages/Layout.vue';
    import { X } from '@lucide/vue';
    import { ref, onMounted } from 'vue';
    import ReproductorMusica from './ReproductorMusica.vue'
    import RRSS from './RRSS.vue';
    import { artistas } from '@/pages/invitades/invitades';

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
        inicio: number
    }>()

    /**
     **Para parar la música al cambiar de item     */
    
    const api = ref<any>(null)
    const reproductores = ref<any[]>([])

    function setApi(val: any) {
        api.value = val
    }

    function stopAllMusic() {
        reproductores.value.forEach(r => r?.stopMusica?.())
    }

    onMounted(() => {
        if (!api.value) return

            api.value.on('select', () => {
                stopAllMusic();
        })
    })

</script>

<template>
    <div class="galeriaInvitades absolute flex opacity-100 top-0 justify-center items-center w-full h-screen z-99 bg-black/75">
        <div class="w-[70%] h-[90%] fixed max-[700px]:w-[85%] max-[700px]:h-[93%]">

            <div class=" z-100 botonCerrar absolute top-2 right-2 w-8 h-8 bg-black flex items-center justify-center text-amarillo hover:text-black hover:bg-amarillo cursor-pointer"
                @click="mostrarGaleriaArtistas = false"
            >
                <X/>
            </div>

            <div class="min-w-full h-full flex">

                <Carousel class="w-full h-full flex"
                    :opts="{ loop: true,
                        startIndex: props.inicio
                    }"
                    @init-api="setApi"
                >

                    <CarouselContent class="h-full">

                        <CarouselItem v-for="artista in artistas"
                            class="gridGeneral w-full h-full grid"
                        >

                            <div style="grid-area: img1" class="bg-cover bg-center" :style="{backgroundImage:`url(${artista.icono})`}" ></div>
                            <div style="grid-area: img2" class="bg-cover bg-center" :style="{backgroundImage:`url(${artista.fotos[0]})`}"></div>
                            <div style="grid-area: img3" class="bg-cover bg-center" :style="{backgroundImage:`url(${artista.fotos[1]})`}"></div>

                            <div style="grid-area: caja1" class="bg-[url('/texturas/color/rojo01.jpg')]"></div>
                            <div style="grid-area: caja2" class="bg-[url('/texturas/color/amarillo02.jpg')] bg-size-[500%]"></div>

                            <div style="grid-area: titulo" class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-bottom-left text-amarillo font-bold text-5xl flex flex-row py-3 px-8 w-fill h-fill
                                min-[700px]:text-5xl min-[700px]:px-8 max-[700px]:text-xl max-[700px]:px-6"
                            >
                                <span class="flex-1 flex overflow-visible items-center text-nowrap">
                                    {{ artista.nombre }}
                                </span>
                                <span class="flex-1 flex text-nowrap items-end justify-end text-xl text-right
                                    min-[700px]:text-2xl max-[700px]:text-sm"
                                >
                                    {{ t(artista.diaSemana) }} {{ artista.dia }}<br>{{ artista.horaI }} - {{ artista.horaF }}
                                </span>
                            </div>
                            <div style="grid-area: texto" class="descripcion bg-[url('/texturas/color/azulclaro04.jpg')] px-6 pb-4 flex items-end
                                min-[700px]:text-md max-[700px]:text-xs"
                            >
                                {{ t(artista.descripcion) }}
                            </div>
                            <div style="grid-area: musica" class="bg-black flex items-center flex-row w-full">

                                <div class="mx-10 h-full">
                                    <ReproductorMusica
                                        ref="reproductores"
                                        :cancion="`${artista.cancion}`"
                                        :artista="`${artista.nombre}`"
                                        :titulo="`${artista.titulo}`"
                                        :foto="`${artista.fotos[1]}`"
                                    />
                                </div>

                                <RRSS
                                    :spotify="artista.spotify"
                                    :youtube="artista.youtube"
                                    :web="artista.web"
                                    :instagram="artista.instagram"
                                    :tiktok="artista.tiktok"
                                    :twitter="artista.twitter"
                                    :facebook="artista.facebook"
                                    :threads="artista.threads"
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

     @media (max-width: 700px) {
        .gridGeneral {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-template-rows: 11% 65% 20%;
        grid-template-areas:
            "img1 titulo"
            "caja1 texto"
            "img3 musica"
        }
    }
    @media (min-width: 700px){
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