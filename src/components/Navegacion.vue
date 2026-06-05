<script setup lang="ts">
    import LogoEsclatNoSubs from './logos/organiza/LogoEsclatNoSubs.vue';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { Menu, X } from '@lucide/vue';

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
    
    import { mostrarCuentaAtras } from '@/pages/Layout.vue';

    const menuDrop = ref<boolean>(false)
    const chiquitin = ref<boolean>(false)

    const handleResize = () => {
        if(window.innerWidth <= 700){
            menuDrop.value = false;
            chiquitin.value = true;
        } else if (window.innerWidth >  700){
            menuDrop.value = true;
            chiquitin.value = false;
        }
    }

    onMounted( () => {
        handleResize()
        window.addEventListener('resize', handleResize)
    } )

    onUnmounted ( () => {
        window.removeEventListener('resize', handleResize)
    } )

</script>

<template>
    <div id="contenedor"
        class="fixed top-0 z-50 w-screen flex justify-between items-center pl-4 pr-8 h-[60px]
            max-[700px]:flex-col max-[700px]:justify-center"
    >
        <Toggle
            class="fixed left-4 min-[700px]:hidden"
            @click="menuDrop = !menuDrop"
        >
            <Menu v-if="!menuDrop" class="iconoMenu"/>
            <X v-if="menuDrop" class="iconoX"/>
        </Toggle>

        <NavigationMenu>

            <NavigationMenuList class="gap-8">

                <NavigationMenuItem>
                    <RouterLink to="/" @click="mostrarCuentaAtras = true">
                            <NavigationMenuLink>
                                <LogoEsclatNoSubs class="h-6 ml-4 fill-white stroke-white hover:fill-amarillo transition-all duration-200 animation-ease-in-out"/> <!-- TODO - Cambiar por el logo de ESCLAT-->
                            </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/about" @click="mostrarCuentaAtras = false" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[0]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/programa" @click="mostrarCuentaAtras = false" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[1]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <RouterLink to="/invitades" @click="mostrarCuentaAtras = false" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[2]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/info" @click="mostrarCuentaAtras = false" class="enlace-underline3" active-class="enlace-underline3-selected">
                        <NavigationMenuLink class="text-lg">
                            {{ t('navegacion[3]') }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <RouterLink to="/entradas" @click="mostrarCuentaAtras = false" class="enlace-underline3" active-class="enlace-underline3-selected">
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