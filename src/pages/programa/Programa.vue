<script lang="ts" setup>

    import { MicVocal, MessagesSquare, PencilRuler } from 'lucide-vue-next';
    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

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

    import {
        Ptalleres23, Pcharlas23, Pconciertos23,
        Ptalleres24, Pcharlas24, Pconciertos24,
        Ptalleres25, Pcharlas25, Pconciertos25,
    } from '../programacion.ts';



</script>

<template>
    <div class="principal">

        <div class="main">

            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>
            <div style="grid-area: vacio4"></div>
            <div style="grid-area: vacio5"></div>

            <div style="grid-area: caja1" class="bg-[url('/texturas/color/amarillo03.jpg')] bg-bottom"></div>
            <div style="grid-area: caja2" class="bg-[url('/texturas/color/azuloscuro01.jpg')] bg-left"></div>
            <div style="grid-area: caja3" class="bg-[url('/texturas/color/rojo02.jpg')] bg-size-[200%]"></div>

            <div style="grid-area: contenido"
                class="bg-[url('/texturas/color/azulclaro04.jpg')] pb-5 px-5 pr-10 h-full flex">
                <Tabs default-value="viernes" class="flex-1 w-full">

                    <TabsList>

                        <TabsTrigger value="viernes" class="">
                            <span class="uppercase">{{ t('dias[0]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="sabado" class="">
                            <span class="uppercase">{{ t('dias[1]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="domingo" class="">
                            <span class="uppercase">{{ t('dias[2]') }}</span>
                        </TabsTrigger>

                    </TabsList>

                <!-- ** VIERNES -->

                    <TabsContent value="viernes" class="tabla w-full h-full grid grid-cols-3 gap-5">
                        
                        <div style="grid-area: conciertos" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><MicVocal /> {{ t('tipos[0]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2">
                                <div v-for="elemento in Pconciertos23" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-xl font-bold">{{ elemento.titulo }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: talleres" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><PencilRuler /> {{ t('tipos[1]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2">
                                <div v-for="elemento in Ptalleres23" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-xl font-bold">{{ t(elemento.titulo) }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: charlas" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><MessagesSquare /> {{ t('tipos[2]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2">
                                <div v-for="elemento in Pcharlas23" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-xl font-bold">{{ t(elemento.titulo) }}</div>
                                </div>
                            </div>
                        </div>

                    </TabsContent>

                <!-- ** SÁBADO -->

                    <TabsContent value="sabado" class="tabla w-full h-full grid grid-cols-3 gap-5">
                        
                        <div style="grid-area: conciertos" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><MicVocal /> {{ t('tipos[0]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2">
                                <div v-for="elemento in Pconciertos24" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[12%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-xl font-bold w-full">{{ elemento.titulo }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: talleres" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><PencilRuler /> {{ t('tipos[1]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2">
                                <div v-for="elemento in Ptalleres24" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[12%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-xl font-bold w-full -mt-1">{{ t(elemento.titulo) }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: charlas" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center py-3"><MessagesSquare /> {{ t('tipos[2]') }}</div>
                            <div class="w-full h-full flex flex-col gap-2 px-2">
                                <div v-for="elemento in Pcharlas24" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[12%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="flex flex-col w-full -mt-1">
                                        <div class="text-xl font-bold">{{ t(elemento.titulo) }}</div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabsContent>

                <!-- ** DOMINGO -->

                    <TabsContent value="domingo" class="tabla w-full h-full grid grid-cols-3 gap-5 pt-2">
                        
                        <div style="grid-area: conciertos" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center">
                                <div class="bg-amarillo flex justify-center items-center h-10 w-9 mt-2 absolute">
                                    <MicVocal/>
                                </div>
                                <span class="ml-12 uppercase">{{ t('tipos[0]') }}</span>
                            </div>
                            <hr class="mt-1 mb-3 border-amarillo border-2">
                            <div class="w-full h-full flex flex-col gap-2 px-2">
                                <div v-for="elemento in Pconciertos25" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[15%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-lg font-bold">{{ elemento.titulo }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: talleres" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center">
                                <div class="bg-amarillo flex justify-center items-center h-10 w-9 mt-2 absolute">
                                    <PencilRuler/>
                                </div>
                                <span class="ml-12 uppercase">{{ t('tipos[1]') }}</span>
                            </div>
                            <hr class="mt-1 mb-3 border-amarillo border-2">
                            <div class="w-full h-full flex flex-col gap-2 px-2">
                                <div v-for="elemento in Ptalleres25" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[15%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div class="text-lg font-bold -mt-1">{{ t(elemento.titulo) }}</div>
                                </div>
                            </div>
                        </div>

                        <div style="grid-area: charlas" class="flex flex-col h-full">
                            <div class="text-2xl font-bold w-full h-fit flex flex-row gap-3 items-center">
                                <div class="bg-amarillo flex justify-center items-center h-10 w-9 mt-2 absolute">
                                    <MessagesSquare/>
                                </div>
                                <span class="ml-12 uppercase">{{ t('tipos[2]') }}</span>
                            </div>
                            <hr class="mt-1 mb-3 border-amarillo border-2">
                            <div class="w-full h-full flex flex-col gap-2 px-2">
                                <div v-for="elemento in Pcharlas25" class="flex gap-5 bg-azuloscuro text-amarillo p-3 px-4">
                                    <div class="text-sm min-w-[15%]">{{ elemento.horaI }}<br>{{ elemento.horaF }}</div>
                                    <div>
                                        <div class="text-lg font-bold -mt-1">{{ t(elemento.titulo) }}</div>
                                        <hr v-if="elemento.personas?.length" class="border-amarillo mt-2 mb-1">
                                        <div v-if="elemento.personas?.length" class="text-sm">
                                            {{ elemento.personas.join(', ') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabsContent>

                </Tabs>

            </div> <!-- final "contenido"-->

        </div> <!--final ".main"-->

    </div>
    
</template>

<style scoped>

    .principal {
        height: calc(100vh - 60px);
    }

    @media (max-width: 700px) {
        .main {
        background-image: url("/fondos/fondo04.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 9% 77% 14%;
        grid-template-areas:
            "vacio1 caja1"
            "contenido vacio3"
            "vacio4 caja3";
        }
    
    }

    @media (min-width: 700px) {
        .main {
            background-image: url("/fondos/fondo07.jpg");
            background-size: 100%;
            background-position: cover;
            background-position: no-repeat;
            height: calc(100vh - 60px);
            display: grid;
            grid-template-columns: 66% 24% 10%;
            grid-template-rows: 9% 77% 14%;
            grid-template-areas:
                "vacio1 caja1 vacio2"
                "contenido vacio3 caja2"
                "vacio4 caja3 vacio5";
        }
    }
    
    .tabla {
        grid-template-areas:
            "conciertos talleres charlas";
    }

</style>