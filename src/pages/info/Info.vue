<script setup lang="ts">

    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from '@/components/ui/accordion'

    import {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    } from '@/components/ui/tabs'
    import { ScrollArea } from '@/components/ui/scroll-area'

    import { faqs } from './faq';

    let entradas = faqs.slice(0,4);
    let adaptaciones = faqs.slice(4,6);
    let servicios = faqs.slice(6,9);

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

</script>

<template>
        <!-- TODO - Cambiar los textos por las variables de los idiomas -->

        <div class="main">
        
            <div style="grid-area: vacio1"></div>
            <div style="grid-area: vacio2"></div>
            <div style="grid-area: vacio3"></div>

            <div style="grid-area: caja1" class="bg-[url('/texturas/color/azulclaro02.jpg')] bg-bottom-right"></div>
            <div style="grid-area: caja2" class="bg-[url('/texturas/color/rojo04.jpg')]"></div>

            <div style="grid-area: contenido"
                class="bg-[url('/texturas/color/amarillo03.jpg')] bg-bottom-left pb-5 px-5 h-full flex flex-row gap-5 max-[640px]:pl-1 max-[768px]:px-0">
                <!-- 
                 TODO: Ponerle la textura en el bg y luego en las areas de texto sin textura olee
                 -->
                

                <Tabs default-value="normas" class="flex-1">

                    <TabsList class="max-[640px]:gap-3">
                        <TabsTrigger value="normas" class="max-[640px]:text-sm">
                            <span>{{ t('faq.titulos[0]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="espacio" class="max-[640px]:text-sm">
                            <span>{{ t('faq.titulos[1]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="servicios" class="max-[640px]:text-sm">
                            <span>{{ t('faq.titulos[2]') }}</span>
                        </TabsTrigger>

                        <TabsTrigger value="faq" class="max-[640px]:text-sm">
                            <span>FAQ</span>
                        </TabsTrigger>

                    </TabsList>

                    <!-- TODO - Meter datos en main.ts y agregarlos con v-for -->

                    <TabsContent value="normas">

                        <div class="mx-5 mr-7
                        max-[640px]:mx-0 max-[640px]:w-full">
                            <h1 class="text-lg font-black max-[640px]:text-[15px] max-[640px]:-mt-2">{{ t('faq.normas[0]') }}</h1>

                            <ul class="circulin mx-5 max-[640px]:text-sm">
                                <li class="pt-1 max-[640px]:pt-0">{{ t('faq.normas[1]') }}</li>
                                <li class="pt-1 max-[640px]:pt-0"><span class="font-black">{{ t('faq.normas[2]') }}</span> {{ t('faq.normas[3]') }} <span class="font-black">{{ t('faq.normas[4]') }}</span> {{ t('faq.normas[5]') }}</li>
                                <li class="pt-1 max-[640px]:pt-0"><span class="font-black">{{ t('faq.normas[6]') }}</span> {{ t('faq.normas[7]') }} <span class="font-black">{{ t('faq.normas[8]') }}</span> {{ t('faq.normas[9]') }} <span class="font-black">{{ t('faq.normas[10]') }} </span> {{ t('faq.normas[11]') }} <span class="font-black"> {{ t('faq.normas[12]') }}</span></li>
                            </ul>

                            <h1 class="text-lg font-black pt-3 max-[640px]:text-[15px] max-[640px]:pt-2">{{ t('faq.normas[13]') }}</h1>

                            <ul class="circulin mx-5 max-[640px]:text-sm">
                                <li class="pt-1  max-[640px]:pt-0"><span class="font-black">{{ t('faq.normas[14]') }}</span> {{ t('faq.normas[15]') }} <span class="underline cursor-pointer">{{ t('faq.normas[16]') }}</span> {{ t('faq.normas[17]') }}</li>
                                <li class="pt-1  max-[640px]:pt-0"><span class="font-black">{{ t('faq.normas[18]') }} </span> {{ t('faq.normas[19]') }} <span class="font-black">{{ t('faq.normas[20]') }}</span> {{ t('faq.normas[21]') }}</li>
                                <li class="pt-1 max-[640px]:pt-0"><span class="font-black">{{ t('faq.normas[22]') }}</span> {{ t('faq.normas[23]') }} <span class="font-black">{{ t('faq.normas[24]') }}</span></li>
                            </ul>
                        </div>
                        
                        

                    </TabsContent>

                    <TabsContent value="espacio">
                        <div class="flex justify-between items-end max-[900px]:flex-col max-[768px]:items-start">
                            <img class="mapa -ml-3 max-[640px]:hidden max-[768px]:-ml-15" src="/mapa/originales/mapa-completo-azulosc.png" alt="">
                            
                            <div class="min-[640px]:hidden ">
                                <img src="/mapa/originales/mapa-sin-ley-azulosc.png" alt="" class="mapa1 -mt-2">
                                <img src="/mapa/originales/follet-axel-azulosc-09.png" alt="" class="mapa3 -ml-10">
                            </div>
                            

                            <div class="flex flex-col w-80 pl-5 max-[640px]:pl-0 max-[640px]:w-full max-[640px]:pt-3">
                                <p class="text-md font-black">{{ t('faq.espacio[0]') }}</p>
                                <p class="text-sm max-[640px]:text-sm/5">{{ t('faq.espacio[1]') }}</p>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="servicios">
                        
                        <div class="mx-5 mr-7 max-[640px]:w-full max-[640px]:mx-0">
                            <h1 class="text-lg font-black">{{ t('faq.servicio[0]') }}</h1>
                            <p>{{ t('faq.servicio[1]') }}</p>

                            <h1 class="text-lg font-black pt-3">{{ t('faq.servicio[2]') }}</h1>
                            <p>{{ t('faq.servicio[3]') }}</p>

                            <h1 class="text-lg font-black pt-3">{{ t('faq.servicio[4]') }}</h1>
                            <p>{{ t('faq.servicio[5]') }}</p>

                            <h1 class="text-lg font-black pt-3">{{ t('faq.servicio[6]') }}</h1>
                            <p>{{ t('faq.servicio[7]') }}</p> 
                        </div>

                    </TabsContent>

                    <TabsContent value="faq">

                        

                        <ScrollArea type="auto" >
                            <!--
                            TODO: PONER LOS TEXTOS Y LAS VARIABLES DEL IDIOMA Y TO ESO 
                             -->

                            <div class="flex flex-col my-10 mt-1 mx-5 max-[640px]:mt-0 max-[640px]:mx-0">
                                <h1 class="text-lg font-black max-[640px]:text-xl ">{{ t('faq.apartados[0]') }}</h1>

                                <div class="min-w-fill">
                                    <Accordion type="single" collapsible>
                                       
                                        <AccordionItem v-for="pregunta in entradas"
                                        :value="`${pregunta.value}`"
                                        >
                                            <AccordionTrigger> {{ t(pregunta.pregunta) }} </AccordionTrigger>
                                            <AccordionContent  class="bg-white/40">
                                                {{ t(pregunta.respuesta) }}
                                            </AccordionContent>
                                        </AccordionItem>
                                        
                                    </Accordion>
                                </div>
                                
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-lg font-black pt-3 -mb-3
                                    max-[640px]:text-xl max-[640px]:pt-0"
                                    >{{ t('faq.apartados[1]') }}</h1>
                                    <div class="min-w-fill">
                                        <Accordion type="single" collapsible>
                                       
                                        <AccordionItem v-for="pregunta in adaptaciones"
                                        :value="`${pregunta.value}`"
                                        >
                                            <AccordionTrigger> {{ t(pregunta.pregunta) }} </AccordionTrigger>
                                            <AccordionContent  class="bg-white/40">
                                                {{ t(pregunta.respuesta) }}
                                            </AccordionContent>
                                        </AccordionItem>
                                        
                                    </Accordion>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-lg font-black pt-3 -mb-3
                                    max-[640px]:text-xl max-[640px]:pt-0"
                                    >{{ t('faq.apartados[2]') }}</h1>
                                    <div class="min-w-fill">
                                        <Accordion type="single" collapsible>
                                       
                                        <AccordionItem v-for="pregunta in servicios"
                                        :value="`${pregunta.value}`"
                                        >
                                            <AccordionTrigger> {{ t(pregunta.pregunta) }} </AccordionTrigger>
                                            <AccordionContent  class="bg-white/40">
                                                {{ t(pregunta.respuesta) }}
                                            </AccordionContent>
                                        </AccordionItem>
                                        
                                    </Accordion>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>

                    </TabsContent>

                </Tabs>

            </div>

        </div>
</template>

<style scoped>
    @media (max-width: 640px){
        .main {
        background-image: url("/fondos/fondo05.jpg");
        background-size: auto 100%;
        background-position: cover;
        background-position: no-repeat;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-auto-rows: height 5%;
        grid-template-areas:
            "contenido vacio3"
            "vacio4 caja2";
        }

        .mapa1{
        width:100%;
        height:250px;
        object-fit:contain;
        }


        .mapa3{
        width:100%;
        height:350px;
        object-fit:contain;
        }
    }

    @media (max-width: 768px){
        .main {
        background-image: url("/fondos/fondo05.jpg");
        background-size: auto 100%;
        background-position: cover;
        background-position: no-repeat;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-auto-rows: height 5%;
        grid-template-areas:
            "contenido vacio3"
            "vacio4 caja2";
        }

        .mapa{
        width:300px;
        height:100%;
        object-fit:contain;
        }
    }

    @media (max-width: 900px){
        .main {
        background-image: url("/fondos/fondo05.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 88% 12%;
        grid-template-areas:
            "contenido vacio1 caja1"
            "vacio2 caja2 vacio3";
        }

        .mapa{
        width:100%;
        height:200px;
        object-fit:contain;
        }

        .mapa1{
        width:100%;
        height:250px;
        object-fit:contain;
        }


        .mapa3{
        width:100%;
        height:350px;
        object-fit:contain;
        }
    }
    

    @media (min-width: 900px){
        .main {
        background-image: url("/fondos/fondo05.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 88% 12%;
        grid-template-areas:
            "contenido vacio1 caja1"
            "vacio2 caja2 vacio3";
        }

        .mapa{
        width:100%;
        height:400px;
        object-fit:contain;
        }
    }


    

    .circulin li{
        list-style-type: square;
    }

    
</style>