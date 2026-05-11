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

    
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n({useScope: 'global'});

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
            <!--
            <select v-model="locale">
                <option>{{ availableLocales[0] }}</option>
                <option>{{ availableLocales[1] }}</option>
            </select>
            -->
            <Button class="enlace-underline-color"
                @click="$i18n.locale = 'CAS'"
            >CAS</Button>
            |
            <Button class="enlace-underline-color"
                @click="$i18n.locale = 'VAL'"
            >VAL</Button>
            
            <!--CAS | VAL-->
        </div>

    </div>
</template>

<style scoped>

</style>