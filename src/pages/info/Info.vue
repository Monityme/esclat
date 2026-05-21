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

/**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

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
                                <h1 class="text-3xl">Entradas</h1>

                                <div class="min-w-fill">
                                    <Accordion type="single" collapsible>
                                       
                                        <AccordionItem v-for="pregunta in faqs"
                                        :value="`${pregunta.value}`"
                                        >

                                        <!--
                                        !ME CAGO EN LA PUTA POR DIOS NO ME LEE EL ID AHI DENTRO NO SE QUE MAS HACER ES LO UNICO QUE ME QUEDA PARA QUE FUNCIONE AAAAAAAAAAAAA   
                                         -->

                                            <AccordionTrigger> {{ t('preguntas[0]') }} </AccordionTrigger>
                                            <AccordionContent  class="bg-white/40">
                                                Respuesta
                                            </AccordionContent>
                                        </AccordionItem>
                                        
                                    </Accordion>
                                </div>
                                
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-3xl pt-5 -mb-3">Adaptaciones</h1>
                                    <div class="min-w-fill">
                                        <Accordion type="single" collapsible class="">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger class="">¿Está el festival adaptado para personas con movilidad reducida?</AccordionTrigger>
                                                <AccordionContent  class="bg-gray-200">
                                                    Respuesta
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?</AccordionTrigger>
                                                <AccordionContent  class="bg-gray-200">
                                                    Respuesta
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-3xl pt-5 -mb-3">Servicios</h1>
                                    <div class="min-w-fill">
                                        <Accordion type="single" collapsible class="">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger class="">¿Habrá comida en el festival?</AccordionTrigger>
                                                <AccordionContent  class="bg-gray-200">
                                                    Respuesta 1
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>Pregunta 2</AccordionTrigger>
                                                <AccordionContent  class="bg-gray-200">
                                                    Respuesta 2
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3">
                                                <AccordionTrigger>Pregunta 3</AccordionTrigger>
                                                <AccordionContent  class="bg-gray-200">
                                                    Respuesta 3
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

         <!--
        <div class="flex flex-col mx-70 my-10 gap-8 ">
            <h1 class="text-3xl">Entradas</h1>
            <div class="min-w-fill">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>¿Cuánto cuesta la entrada al festival?</AccordionTrigger>
                        <AccordionContent  class="bg-gray-200">
                            Respuesta
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>¿Cuándo podré adquirir mis entradas?</AccordionTrigger>
                        <AccordionContent  class="bg-gray-200">
                            Respuesta
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>He recibido el email de confirmación pero no encuentro mi entrada</AccordionTrigger>
                        <AccordionContent class="bg-gray-200">
                            Respuesta
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>¿Pueden entrar menores de edad?</AccordionTrigger>
                        <AccordionContent  class="bg-gray-200">
                            Respuesta
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl">Adaptaciones</h1>
                <div class="min-w-fill">
                    <Accordion type="single" collapsible class="">
                        <AccordionItem value="item-1">
                            <AccordionTrigger class="">¿Está el festival adaptado para personas con movilidad reducida?</AccordionTrigger>
                            <AccordionContent  class="bg-gray-200">
                                Respuesta
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?</AccordionTrigger>
                            <AccordionContent  class="bg-gray-200">
                                Respuesta
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl">Servicios</h1>
                <div class="min-w-fill">
                    <Accordion type="single" collapsible class="">
                        <AccordionItem value="item-1">
                            <AccordionTrigger class="">¿Habrá comida en el festival?</AccordionTrigger>
                            <AccordionContent  class="bg-gray-200">
                                Respuesta 1
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Pregunta 2</AccordionTrigger>
                            <AccordionContent  class="bg-gray-200">
                                Respuesta 2
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Pregunta 3</AccordionTrigger>
                            <AccordionContent  class="bg-gray-200">
                                Respuesta 3
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        -->
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