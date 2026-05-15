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

            <NavigationMenuList class="gap-5">

                <RouterLink to="/">
                    <NavigationMenuItem>
                        <NavigationMenuLink class="text-lg">
                            Home <!-- TODO - Cambiar por el logo de ESCLAT-->
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/about">
                <NavigationMenuItem>
                    <NavigationMenuLink class="text-lg">
                        {{ t('navegacion[0]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/programa">
                <NavigationMenuItem>
                    <NavigationMenuLink class="text-lg">
                        {{ t('navegacion[1]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/invitades">
                <NavigationMenuItem>
                    <NavigationMenuLink class="text-lg">
                        {{ t('navegacion[2]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/espacio">
                <NavigationMenuItem>
                    <NavigationMenuLink class="text-lg">
                        {{ t('navegacion[3]') }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
                </RouterLink>

                <RouterLink to="/faq">
                <NavigationMenuItem>
                    <NavigationMenuLink class="text-lg">
                        {{ t('navegacion[4]') }}
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
    NavigationMenuLink {
        font-size: largue;
    }
</style>