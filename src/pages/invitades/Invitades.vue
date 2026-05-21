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

        <div style="grid-area: caja1" class="bg-amarillo"></div>
        <div style="grid-area: caja2" class="bg-rojo"></div>
        <div style="grid-area: caja3" class="bg-azulclaro"></div>

        <div style="grid-area: contenido"
            class="bg-azuloscuro pb-5 px-5 h-full flex flex-col">

            <Tabs default-value="artistas">

                <TabsList>

                    <TabsTrigger value="artistas" class="text-amarillo">
                        <span>ARTISTAS</span>
                    </TabsTrigger>

                    <TabsTrigger value="talleres" class="text-amarillo">
                        <span>TALLERES</span>
                    </TabsTrigger>

                    <TabsTrigger value="charlas" class="text-amarillo">
                        <span>CHARLAS</span>
                    </TabsTrigger>

                </TabsList>

                <!-- TODO - Meter datos en main.ts y agregarlos con v-for -->

                <TabsContent value="artistas">
                    
                    <ScrollArea type="always">

                        <div class="gap-5 w-full h-full grid grid-cols-3">
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Nombre Artista
                                </div>
                            </div>
                        </div>

                    </ScrollArea>

                </TabsContent>

                <TabsContent value="talleres">

                    <ScrollArea>

                        <div class="w-full h-full grid grid-cols-3">
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Taller
                                </div>
                            </div>
                        </div>

                    </ScrollArea>

                </TabsContent>

                <TabsContent value="charlas">
                    
                    <ScrollArea>

                        <div class="w-full h-full grid grid-cols-3">
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
                                </div>
                            </div>
                            <div class="tarjeta">
                                <div class="nombres">
                                    Charla
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

    .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
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

    .nombres {
        width: 100%;
        height: 50px;
        background: rgba(0,0,0,0.8);
        color: white;
        display: flex;
        align-items: center;
        padding: 1rem;
        transition-timing-function: var(--ease-in-out);
        transition-duration: 600ms;
        transition-property: height, background;
    }

    .tarjeta:hover .nombres {
        height: 80px;
        background: rgba(0,0,0,1);
        /*border-top: 2px solid var(--color-rojo);*/
    }

    /*
    .tarjeta:hover {
        border: 2px solid var(--color-rojo);
    }
    */


</style>