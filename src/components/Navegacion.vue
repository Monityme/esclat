<script setup lang="ts">
    import {
        NavigationMenu,
        //NavigationMenuContent,
        //NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        //NavigationMenuTrigger,
        //NavigationMenuViewport,
    } from '@/components/ui/navigation-menu'

    //import { Route } from 'lucide-vue-next';

</script>

<template>
    <div class="bg-blue-200 flex justify-between px-4 py-2">
        <NavigationMenu>

            <NavigationMenuList class="gap-4">

                <RouterLink to="/">
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/about">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        ¿Qué es ESCLAT?
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/programa">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Programa
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/invitades">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Invitades
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/espacio">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Espacio
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/faq">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        FAQ
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/entradas">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Entradas
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

            </NavigationMenuList>

        </NavigationMenu>

        <div class="self-center">
            CAS | VAL
        </div>

    </div>
</template>

<style scoped>

</style>