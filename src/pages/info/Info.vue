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

            <div style="grid-area: caja1" class="bg-azulclaro"></div>
            <div style="grid-area: caja2" class="bg-rojo"></div>

            <div style="grid-area: contenido"
                class="bg-amarillo pb-5 px-5 h-full flex flex-row gap-5">
                <!-- 
                 TODO: Ponerle la textura en el bg y luego en las areas de texto sin textura olee
                 -->
                

                <Tabs default-value="normas" class="flex-1">

                    <TabsList>

                        <TabsTrigger value="normas" class="">
                            <span>NORMAS</span>
                        </TabsTrigger>

                        <TabsTrigger value="espacio" class="">
                            <span>ESPACIO</span>
                        </TabsTrigger>

                        <TabsTrigger value="servicios" class="">
                            <span>SERVICIOS</span>
                        </TabsTrigger>

                        <TabsTrigger value="faq" class="">
                            <span>FAQ</span>
                        </TabsTrigger>

                    </TabsList>

                    <!-- TODO - Meter datos en main.ts y agregarlos con v-for -->

                    <TabsContent value="normas">
                        
                        Contenido normas

                    </TabsContent>

                    <TabsContent value="espacio">

                        Contenido espacio

                    </TabsContent>

                    <TabsContent value="servicios">

                        Contenido servicios

                    </TabsContent>

                    <TabsContent value="faq">

                        

                        <ScrollArea type="always" >
                            <!--
                            TODO: PONER LOS TEXTOS Y LAS VARIABLES DEL IDIOMA Y TO ESO 
                             -->

                            <div class="flex flex-col my-10 mt-1 mx-10">
                                <h1 class="text-3xl">{{ t('faq.apartados[0]') }}</h1>

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
                                    <h1 class="text-3xl pt-5 -mb-3">{{ t('faq.apartados[1]') }}</h1>
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
                                    <h1 class="text-3xl pt-5 -mb-3">{{ t('faq.apartados[2]') }}</h1>
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
    .main {
        background-image: url("/home/fondoHome01.jpg");
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
</style>