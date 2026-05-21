<script setup lang="ts">

    import {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    } from '@/components/ui/tabs'
    import { ScrollArea } from '@/components/ui/scroll-area'

</script>

<template>

    <div class="main">
        
        <div style="grid-area: vacio1"></div>
        <div style="grid-area: vacio2"></div>
        <div style="grid-area: vacio3"></div>
        <div style="grid-area: vacio4"></div>
        <div style="grid-area: vacio5"></div>

        <div style="grid-area: caja1" class="bg-rojo"></div>
        <div style="grid-area: caja2" class="bg-azuloscuro"></div>
        <div style="grid-area: caja3" class="bg-amarillo"></div>

        <div style="grid-area: contenido"
            class="bg-azulclaro pb-5 px-5 h-full flex flex-row gap-5">
            

            <Tabs default-value="conciertos" class="flex-1">

                <TabsList>

                    <TabsTrigger value="conciertos" class="">
                        <span>CONCIERTOS</span>
                    </TabsTrigger>

                    <TabsTrigger value="talleres" class="">
                        <span>TALLERES</span>
                    </TabsTrigger>

                </TabsList>

                <!-- TODO - Meter datos en main.ts y agregarlos con v-for -->

                <TabsContent value="conciertos">
                    
                    Contenido conciertos

                </TabsContent>

                <TabsContent value="talleres">

                    Contenido talleres

                </TabsContent>

            </Tabs>

            <div class="datos flex-1 mt-5">
                Nombre
                Apellidos
            </div>


        </div>

    </div>

</template>

<style scoped>

    .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 120px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 12% 63% 25%;
        grid-template-areas:
            "vacio1 caja1 vacio2"
            "contenido vacio3 caja2"
            "vacio4 caja3 vacio5";
    }

</style>