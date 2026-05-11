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
    
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

</script>

<template>
    <div id="contenedor" class="static top-0 flex justify-between px-4 py-2"> <!-- TODO - Fijar en el top? -->
        <NavigationMenu>

            <NavigationMenuList class="gap-4">

                <RouterLink to="/">
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            Home <!-- TODO - Cambiar por el logo de ESCLAT-->
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/about">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[0]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/programa">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[1]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/invitades">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[2]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/espacio">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[3]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/faq">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[4]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/entradas">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {{ t('navegacion[5]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

            </NavigationMenuList>

        </NavigationMenu>

        <div class="self-center flex justify-between gap-3" >

            <!-- ?Para cambiar entre castellano y valenciano -->
            <Button class="enlace-underline2"
                @click="$i18n.locale = 'CAS'"
            >CAS</Button>
            |
            <Button class="enlace-underline2"
                @click="$i18n.locale = 'VAL'"
            >VAL</Button>
            
        </div>

    </div>
</template>

<style scoped>
    
</style>