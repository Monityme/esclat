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
    <div id="contenedor" class="fixed top-0 w-screen flex justify-between items-center px-4 h-[60px]"> <!-- TODO - Fijar en el top? -->
        <NavigationMenu>

            <NavigationMenuList class="gap-8">

                <NavigationMenuItem>
                    <RouterLink to="/">
                            <NavigationMenuLink class="text-lg">
                                Home (logo) <!-- TODO - Cambiar por el logo de ESCLAT-->
                            </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/about" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[0]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/programa" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[1]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <RouterLink to="/invitades" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[2]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/info" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[3]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/entradas" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[4]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

            </NavigationMenuList>

        </NavigationMenu>

        <div class="self-center flex justify-between gap-3 text-white" >

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