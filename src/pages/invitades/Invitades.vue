<script setup lang="ts">

/**
** Componentes */
    import Carruselinvitades from '@/components/Carruselinvitades.vue';
    import CarruselArtistas from '@/components/CarruselArtistas.vue';
    import { ScrollArea } from '@/components/ui/scroll-area'
    import {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    } from '@/components/ui/tabs'

/**
** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});
    
/**
** Variables y funciones */

    import { mostrarGaleria } from '@/pages/Layout.vue';
    import { mostrarGaleriaArtistas } from '@/pages/Layout.vue';

    import { mostrarCuentaAtras } from '../Layout.vue'; 
    mostrarCuentaAtras.value = false;
    

    import { artistas } from './invitades';
    import { talleres } from './invitades';
    import { charlas } from './invitades';

    import { ref } from 'vue';

    const invitadeSelect = ref(0)

    function abrirGaleria(indice: number) {
        invitadeSelect.value = indice;
        mostrarGaleria.value = true;
    }

    function abrirGaleriaArtistas(indice: number) {
        invitadeSelect.value = indice;
        mostrarGaleriaArtistas.value = true;
    }

    /**
    **Para cambiar entre artistas-talleres-charlas */
    const tipoInvitades = ref(talleres);

    function selectTipo(tipo: any) {
        tipoInvitades.value = tipo;
    }

</script>

<template>
    
        <div class="main">

            <Carruselinvitades
                v-if="mostrarGaleria"
                :invitades="tipoInvitades"
                :inicio="invitadeSelect"
            />

            <CarruselArtistas
                v-if="mostrarGaleriaArtistas"
                :inicio="invitadeSelect"
            />

            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>
            <div style="grid-area: vacio5"></div>

            <div style="grid-area: caja1" class="bg-[url('/texturas/color/amarillo02.jpg')] bg-size-[170%]"></div>
            <div style="grid-area: caja2" class="bg-[url('/texturas/color/rojo01.jpg')]"></div>
            <div style="grid-area: caja3" class="bg-[url('/texturas/color/azulclaro03.jpg')]"></div>

            <div style="grid-area: contenido"
                class="bg-[url('/texturas/color/azuloscuro03.jpg')] bg-bottom-right pb-5 px-5 h-full flex flex-col">

                <Tabs default-value="artistas">

                    <TabsList class="max-[640px]:gap-5">

                        <TabsTrigger value="artistas" class="text-amarillo max-[768px]:text-lg">
                            <span @click="selectTipo(artistas)">{{ t('invitades.tabs[0]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="talleres" class="text-amarillo max-[768px]:text-lg">
                            <span @click="selectTipo(talleres)">{{ t('invitades.tabs[1]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="charlas" class="text-amarillo max-[768px]:text-lg">
                            <span @click="selectTipo(charlas)">{{ t('invitades.tabs[2]') }}</span>
                        </TabsTrigger>

                    </TabsList>

                <!-- ** ARTISTAS -->

                    <TabsContent value="artistas">
                        
                        <ScrollArea type="always">

                            <div class="gap-5 w-full h-full grid grid-cols-3 max-[640px]:grid-cols-2">
                                <div v-for="(artista, index) in artistas"
                                    class="tarjeta bg-cover bg-center flex"
                                    :style="{backgroundImage:`url(${artista.icono})`}"
                                    @click="abrirGaleriaArtistas(index)"
                                >
                                    <div class="tarjeta_texto flex flex-col overflow-y-hidden text-lg gap-1 max-[640px]:text-sm/4">
                                        <span class="tarjeta_nombre text-white">{{ artista.nombre }}</span>
                                        <span class="oculto hidden text-white text-sm px-2">
                                            {{ t(artista.diaSemana) }} {{ artista.dia }} a las {{ artista.horaI }}h
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </ScrollArea>

                    </TabsContent>

                <!-- ** TALLERES -->

                    <TabsContent value="talleres">

                        <ScrollArea>

                            <div class="gap-5 w-full h-full grid min-[800px]:grid-cols-3 max-[800px]:grid-cols-2">
                                <div v-for="(taller, index) in talleres"
                                    class="tarjeta bg-cover bg-center flex"
                                    :style="{backgroundImage:`url(${taller.icono})`}"
                                    @click="abrirGaleria(index)"
                                >
                                    <div class="tarjeta_texto flex flex-col overflow-y-hidden text-lg max-[640px]:text-sm/4 gap-1">
                                        <span class="tarjeta_nombre text-white">{{ t(taller.nombre) }}</span>
                                        <span class="oculto hidden text-white text-sm px-2">
                                            {{ t(taller.diaSemana) }} {{ taller.dia }} a las {{ taller.horaI }}h
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </ScrollArea>

                    </TabsContent>
                    
                <!-- ** CHARLAS -->

                    <TabsContent value="charlas">
                        
                        <ScrollArea>

                            <div class="gap-5 w-full h-full grid grid-cols-3 max-[640px]:grid-cols-2">
                                <div v-for="(charla, index) in charlas"
                                    class="tarjeta bg-cover bg-center flex"
                                    :style="{backgroundImage:`url(${charla.icono})`}"
                                    @click="abrirGaleria(index)"
                                >
                                    <div class="tarjeta_texto flex flex-col overflow-y-hidden text-lg max-[640px]:text-sm/4 gap-1">
                                        <span class="tarjeta_nombre text-white px-2">{{ t(charla.nombre) }}</span>
                                        <span class="oculto hidden text-white text-sm px-2">
                                            {{ t(charla.diaSemana) }} {{ charla.dia }} a las {{ charla.horaI }}h
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </ScrollArea>

                    </TabsContent>

                </Tabs>

            </div> <!-- final "contenido"-->

        </div> <!--final ".main"-->
        
</template>

<style scoped>

    @media (max-width: 640px) {
        .main {
            background-image: url("/fondos/fondo04.jpg");
            background-size: 100%;
            background-position: cover;
            background-position: no-repeat;
            height: calc(100vh - 60px);
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 9% 77% 14%;
            grid-template-areas:
                "vacio1 caja1"
                "contenido vacio3"
                "vacio4 caja3";
        }
        
        .tarjeta {
            cursor: pointer;
            display: flex;
            align-items: end;
            aspect-ratio: 1;
            background-color: var(--color-gray-400);
        }

        .tarjeta_texto {
            width: 100%;
            height: 35%;
            background: rgba(0,0,0,0.8);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition-property: all;
        }

        .tarjeta:hover .tarjeta_texto {
            height: 70%;
            background: rgba(0,0,0,1);
            /*border-top: 2px solid var(--color-rojo);*/
        }

        .tarjeta_nombre {
            color: white;
            text-align: center;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition-property: all;
            white-space: pre-line;
        }

        .tarjeta:hover .tarjeta_nombre {
            color: var(--color-amarillo)
        }

        .tarjeta > .oculto {
            opacity: 0;
            display: none;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition: all;
        }

        .tarjeta:hover .oculto {
            opacity: 1;
            display: inline;
        }

    
    }

    @media (min-width: 640px) {
        .main {
            background-image: url("/fondos/fondo02.jpg");
            background-size: 100%;
            background-position: cover;
            background-position: no-repeat;
            height: calc(100vh - 60px);
            width: 100%;
            display: grid;
            grid-template-columns: 66% 24% 10%;
            grid-template-rows: 12% 76% 12%;
            grid-template-areas:
                "vacio1 caja1 vacio2"
                "contenido vacio3 caja2"
                "vacio4 caja3 vacio5";
        }

        .tarjeta {
            cursor: pointer;
            display: flex;
            align-items: end;
            aspect-ratio: 1;
            background-color: var(--color-gray-400);
        }

        .tarjeta_texto {
            width: 100%;
            height: 25%;
            background: rgba(0,0,0,0.8);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition-property: all;
        }

        .tarjeta:hover .tarjeta_texto {
            height: 40%;
            background: rgba(0,0,0,1);
            /*border-top: 2px solid var(--color-rojo);*/
        }

        .tarjeta_nombre {
            color: white;
            text-align: center;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition-property: all;
            white-space: pre-line;
        }

        .tarjeta:hover .tarjeta_nombre {
            color: var(--color-amarillo)
        }

        .tarjeta > .oculto {
            opacity: 0;
            display: none;
            transition-timing-function: var(--ease-in-out);
            transition-duration: 600ms;
            transition: all;
        }

        .tarjeta:hover .oculto {
            opacity: 1;
            display: inline;
        }
    }

    

    /*
    .tarjeta:hover {
        border: 2px solid var(--color-rojo);
    }
    */


</style>