<script setup lang="ts">
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>

    <div class="main">

        <div style="grid-area: vacio1"></div>
        <div style="grid-area: vacio2"></div>
        <div style="grid-area: vacio3"></div>
        <div style="grid-area: vacio4"></div>
        <div style="grid-area: vacio5"></div>

        <div style="grid-area: caja1" class="bg-amarillo"></div>
        <div style="grid-area: caja2" class="bg-rojo"></div>
        <div style="grid-area: caja3" class="bg-azulclaro"></div>

        <div style="grid-area: contenido" class="bg-azuloscuro text-amarillo font-bold p-6">
            <Tabs default-value="artistas">
                <TabsList class="flex gap-5">
                    <!-- Molaria hacerle una clase para el texto seleccionado, parecido a lo de la navegación -->
                    <TabsTrigger value="artistas">
                        <span class="pr-11 text-4xl">ARTISTAS</span>
                    </TabsTrigger>
                    <TabsTrigger value="talleres">
                        <span class="pr-12 text-4xl">TALLERES</span>
                    </TabsTrigger>
                    <TabsTrigger value="charlas">
                        <span class="text-4xl">CHARLAS</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="artistas">
                    Contenido artistas
                </TabsContent>
                <TabsContent value="talleres">
                    Contenido talleres
                </TabsContent>
                <TabsContent value="charlas">
                    Contenido charlas
                </TabsContent>
            </Tabs>
        </div>


    </div> <!--final ".main"-->

    
</template>

<style scoped>

    .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 20% 68% 12%;
        grid-template-areas:
            "vacio1 caja1 vacio2"
            "contenido vacio3 caja2"
            "vacio4 caja3 vacio5"
    }


</style>