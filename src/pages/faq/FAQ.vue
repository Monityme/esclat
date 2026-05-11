<script setup lang="ts">

    import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    } from '@/components/ui/accordion'

</script>

<template>
    <div class="bg-azuloscuro">
        <div class="flex flex-col mx-70 my-10 gap-8 ">
            <div class="flex flex-col gap-4">
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
    </div>
</template>

<style scoped>

</style>