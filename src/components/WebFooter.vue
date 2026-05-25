<script setup lang="ts">
    import LogoMiopia from '@/components/logos/organiza/LogoMiopia.vue';
    import LogoEsclat from './logos/organiza/LogoEsclat.vue';
    import LogoIvaj from './logos/colabora/LogoIvaj.vue';
    import LogoCocaCola from './logos/colabora/LogoCocaCola.vue';
    import LogoTuria from './logos/colabora/LogoTuria.vue';

    import { MapPin, Phone } from 'lucide-vue-next';
</script>

<template>
    <footer class="bg-black bottom-0 flex flex-col w-fill py-5 justify-center text-white text-xs gap-5">
        <div class="flex w-full justify-center">
            <div class="flex-1 flex flex-col gap-3">
                <LogoEsclat class="h-20 fill-white stroke-white"/>
                <span class="text-center">2026 © ESCLAT Festival</span>
            </div>
        </div>
        <div class="text-amarillo opacity-80 flex justify-center">
            Web Created by © Miopía
        </div>
    </footer>
    <!--
    <footer class="bg-black flex-col flex w-full py-2 justify-center items-center text-white text-xs">
        <div class="flex w-full justify-around my-5 gap-10 no-wrap">
            <div class="w-full flex flex-col gap-5">
                <LogoEsclat class=" fill-white stroke-white"/>
                <span class="">2026 © ESCLAT 2026</span>
            </div>
            
            <div class="w-full underline flex flex-col gap-1">
                <span class="hover:cursor-pointer">Política de Privacidad</span>
                <span class="hover:cursor-pointer">Aviso Legal</span>
                <span class="hover:cursor-pointer">Política de Cookies</span>
            </div>

            <div class="w-full flex flex-col gap-3">
                <div>
                    <span>LAS NAVES</span><hr class="border-gray-500 mt-2 mb-4 w-[70%] ml-[-3%]">
                </div>
                <div class="flex flex-row gap-3 pl-5 w-fit flex-nowrap">
                    <MapPin class="w-5"/> <span>Calle de Joan Verdeguer, 22-24 <br> 46024 Valencia </span>
                </div>
                <div class="flex flex-row gap-3 items-center pl-5 flex-nowrap">
                    <Phone class="w-5"/> <span>963 013 401 / 962 085 691</span>
                </div>
            </div>

            <div class="flex flex-col w-fit gap-8">
                <div class="flex flex-col">
                    <span>ORGANIZA</span><hr class="border-gray-500 mt-2 mb-4 w-[106%] ml-[-3%]">
                    <div class="flex flex-row gap-3 pl-5">
                        <LogoMiopia class="h-7"/>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span>COLABORA</span><hr class="border-gray-500 mt-2 mb-4 w-[106%] ml-[-3%]">
                    <div class="flex flex-row gap-5 pl-5 no-wrap items-center">
                        <LogoDiputacioValencia class="h-8"/>
                        <LogoIvaj class="h-6"/>
                        <LogoCocaCola class="h-7"/>
                        <LogoTuria class="h-8" />
                    </div>
                </div>
            </div>

        </div>
        <div class="text-gray-400">
            Web Created by © Miopía
        </div>
    </footer>
    -->
</template>

<style scoped>

</style>