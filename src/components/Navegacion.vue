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
        if(window.innerWidth <= 900){
            menuDrop.value = false;
            chiquitin.value = true;
        } else if (window.innerWidth >  900){
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
        class="fixed top-0 z-50 w-screen flex justify-between items-center pl-4 pr-8 h-[60px]"
    >
        <Toggle
            class="fixed left-4 min-[900px]:hidden cursor-pointer"
            @click="menuDrop = !menuDrop"
        >
            <Menu v-if="!menuDrop" class="iconoMenu"/>
            <X v-if="menuDrop" class="iconoX"/>
        </Toggle>

        <RouterLink to="/" @click="mostrarCuentaAtras = true; if (chiquitin) {menuDrop = false}" class="min-[900px]:hidden max-[900px]:ml-7">
            <NavigationMenuLink>
                <LogoEsclatNoSubs class="h-6 ml-4 fill-white stroke-white hover:fill-amarillo transition-all duration-200 animation-ease-in-out"/> <!-- TODO - Cambiar por el logo de ESCLAT-->
            </NavigationMenuLink>
        </RouterLink>

        <nav  v-if="menuDrop" class="menuNav""
        >
            <NavigationMenu >

                <NavigationMenuList class="gap-8 max-[900px]:flex-col">

                    <NavigationMenuItem class="max-[900px]:hidden">
                        <RouterLink to="/" @click="mostrarCuentaAtras = true">
                                <NavigationMenuLink>
                                    <LogoEsclatNoSubs class="h-6 ml-4 fill-white stroke-white hover:fill-amarillo transition-all duration-200 animation-ease-in-out"/> <!-- TODO - Cambiar por el logo de ESCLAT-->
                                </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/about" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink class="text-lg max-[900px]:text-3xl">
                                {{ t('navegacion[0]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/programa" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink class="text-lg max-[900px]:text-3xl">
                                {{ t('navegacion[1]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                        <RouterLink to="/invitades" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink class="text-lg max-[900px]:text-3xl">
                                {{ t('navegacion[2]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/info" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink class="text-lg max-[900px]:text-3xl">
                                {{ t('navegacion[3]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/entradas" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink class="text-lg max-[900px]:text-3xl">
                                {{ t('navegacion[4]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                </NavigationMenuList>

            </NavigationMenu>
        </nav>

        <div class="self-center flex justify-between gap-3 text-white max-[900px]:fixed max-[900px]:right-5" >

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

    .iconoMenu{
        height: 100%;
        width: 2rem;
        animation: keyframes-fill .5s;
    }
    .iconoX{
        height: 100%;
        width: 2rem;
        animation: keyframes-fill .5s;
    }

    @keyframes keyframes-fill {
        0% {
            transform: rotate(-180deg) scale(0);
            opacity: 0;
        }
        50% {
            transform: rotate(-10deg) scale(1.2);
        }
    }

    @media (max-width: 900px) {
        .menuNav {
            display: flex;
            flex-direction: column;
            justify-content: start;
            background-color: black;
            width: 50vw;
            height: 100vh;
            margin-top: 100vh;
            left: 0;
            padding-bottom: 2rem;
            padding-left: 2rem;
            z-index: -1;
            position: absolute;
            animation: slidein-menu .5s;
        }
    }

    @media (max-width: 660px) {
        .menuNav {
            width: 100vw;
        }
    }
    
    @keyframes slidein-menu {
        0% {
            transform: translate(-100%);
            opacity: 0;
        }
        50% {
            transform: translate(0%);
        }
    }

    @keyframes slideout-menu {
        0% {
            transform: translate(0%);
        }
        50% {
            transform: translate(-100%);
            opacity: 0;
        }
    }
</style>