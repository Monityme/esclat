<script setup lang="ts">
    import LogoEsclatNoSubs from './logos/organiza/LogoEsclatNoSubs.vue';

    import { onMounted, onUnmounted, ref } from 'vue';

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

    import { Menu, X } from '@lucide/vue';

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

// const cosa: HTMLElement | null = document.getElementById('textosNav');

// if (cosa && window.innerWidth <= 700) {
//     cosa.onclick = function() {
//         menuDrop.value = false;
//     };
// }


</script>

<template>
    <div class="fixed top-0 z-50 w-screen flex justify-between items-center pl-4 pr-8 h-[60px]
    max-[700px]:flex-col max-[700px]:justify-center">
    
        <Toggle
            class="fixed left-4 min-[700px]:hidden"
            @click="menuDrop = !menuDrop"
        >
            <Menu v-if="!menuDrop" class="iconoMenu"/>
            <X v-if="menuDrop" class="iconoX"/>
        </Toggle>

        <RouterLink to="/" @click="mostrarCuentaAtras = true" >
            <NavigationMenuLink>
                <LogoEsclatNoSubs class="h-6 ml-4 fill-white stroke-white hover:fill-amarillo transition-all duration-200 animation-ease-in-out
                "/> <!-- TODO - Cambiar por el logo de ESCLAT-->
            </NavigationMenuLink>
        </RouterLink>
        
        <nav v-if="menuDrop"
        class="menuNav">
            <NavigationMenu>
                <NavigationMenuList class="gap-8 max-[700px]:pt-8">
                    <NavigationMenuItem>
                        <RouterLink to="/about" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink id="textosNav">
                                {{ t('navegacion[0]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/programa" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink id="textosNav">
                                {{ t('navegacion[1]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                        <RouterLink to="/invitades" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink id="textosNav">
                                {{ t('navegacion[2]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/info" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink id="textosNav">
                                {{ t('navegacion[3]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <RouterLink to="/entradas" @click="mostrarCuentaAtras = false; if (chiquitin) {menuDrop = !menuDrop}" class="enlace-underline3" active-class="enlace-underline3-selected">
                            <NavigationMenuLink id="textosNav">
                                {{ t('navegacion[4]') }}
                            </NavigationMenuLink>
                        </RouterLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>

                

            

        <div class="self-center flex justify-between gap-3 text-white
        max-[700px]:fixed max-[700px]:right-4
        " >

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
    .NavigationMenuLink {
        font-size: largue;
    }

    .iconoMenu{
        height: 100%;
        width: 40px;
        animation: keyframes-fill .5s;
    }

    .iconoX{
        height: 100%;
        width: 40px;
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
    
    @media (max-width: 700px){
        .menuNav {
            background-color: black;
            width: 100vw;
            height: 100vh;
            margin-top: 100vh;
            padding-bottom: 2rem;
            padding-left: 2rem;
            z-index: -1;
            position: absolute;
            animation: slidein-menu .5s;
            
            
            
            
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

        #textosNav{
            font-size: var(--text-3xl) /* 1.5rem = 24px */;
            
            --tw-font-weight: var(--font-weight-black) /* 900 */;
            font-weight: var(--font-weight-black) /* 900 */;
        }
    }
    @property --tw-font-weight {
    syntax: "*";
    inherits: false;
}

    @media (min-width: 700px){
        .menuNav {
        gap: calc(var(--spacing) * 8)
        }


        .textosNav{
            font-size: var(--text-lg) /* 1.125rem = 18px */;
            line-height: var(--tw-leading, var(--text-lg--line-height) /* calc(1.75 / 1.125) ≈ 1.555556 */);
        }
        

        
    }
</style>