<script setup lang="ts">
    import LogoMiopia from '@/components/logos/organiza/LogoMiopia.vue';
    import LogoAyuntNaves from './logos/organiza/LogoAyuntNaves.vue';
    import LogoEsclat from './logos/organiza/LogoEsclat.vue';
    import LogoIvaj from './logos/colabora/LogoIvaj.vue';
    import LogoCocaCola from './logos/colabora/LogoCocaCola.vue';
    import LogoTuria from './logos/colabora/LogoTuria.vue';
    import LogoDiputacioValencia from './logos/colabora/LogoDiputacioValencia.vue';

    import { ChevronRight, MapPin, Phone, Mail } from 'lucide-vue-next';

    import RRSS from './RRSS.vue';

</script>

<template>
    <footer class="bg-black bottom-0 flex flex-col w-full max-w-full py-5 justify-center text-white text-xs gap-5">

        <div class="contenedor grid w-full h-full px-10 gap-15 items-center justify-center text-md">

            <div style="grid-area: esclat" class="esclat w-fit flex flex-col gap-7">
                <div class="flex flex-col gap-4">
                    <LogoEsclat class="h-20 fill-white stroke-white"/>
                    <span class=" text-amarillo">2026 © ESCLAT Festival</span>
                </div>
                <div class="privacidad w-fit flex flex-col gap-2 justify-center">
                    <span class="w-fit hover:cursor-pointer flex items-center underline hover:text-amarillo"><ChevronRight class="h-4"/>Política de Privacidad</span>
                    <span class="w-fit hover:cursor-pointer flex items-center underline hover:text-amarillo"><ChevronRight class="h-4"/>Aviso Legal</span>
                    <span class="w-fit hover:cursor-pointer flex items-center underline hover:text-amarillo"><ChevronRight class="h-4"/>Política de Cookies</span>
            </div>
            </div>
            

            <div style="grid-area: contacto" class="contacto flex flex-col gap-2 self-start">
                <div class="w-full h-full flex flex-col">
                    <span class="text-amarillo">CONTACTO</span>
                    <hr class="border-gray-500 mt-2 mb-4 w-[110%] ml-[-3%]">
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row gap-3 pl-5 w-fit flex-nowrap">
                            <MapPin class="w-4"/> <span>Calle de Joan Verdeguer, 22-24 <br> 46024 Valencia </span>
                        </div>
                        <div class="flex flex-row gap-3 items-center pl-5 flex-nowrap">
                            <Phone class="w-4"/> <span>963 013 401 &nbsp; | &nbsp; 962 085 691</span>
                        </div>
                        <div class="flex flex-row gap-3 items-center pl-5 flex-nowrap">
                            <Mail class="w-4"/> <span>info@esclatfestival.com</span>
                        </div>
                    </div>
                    <RRSS
                        :spotify="undefined"
                        youtube="LINK"
                        :web="undefined"
                        instagram="LINK"
                        tiktok="LINK"
                        twitter="LINK"
                        :facebook="undefined"
                        threads="LINK"
                        :footer="true"
                    /> <!--No existen las RRSS de esclat, por eso no hay ninguna lololol-->
                </div>
            </div>

            <div style="grid-area: logos" class="logos w-fit flex flex-col self-start gap-6 flex-nowrap">
                <div class="w-full h-[50%] flex flex-col">
                    <span class="text-amarillo">ORGANIZA</span>
                    <hr class="border-gray-500 mt-2 mb-4 w-[110%] ml-[-3%]">
                    <div class="w-full h-full flex items-center gap-4">
                        <LogoAyuntNaves class="h-8"/>
                        <LogoMiopia class="h-7"/>
                    </div>
                </div>
                <div class="w-full h-[50%] flex flex-col">
                    <span class="text-amarillo">COLABORA</span>
                    <hr class="border-gray-500 mt-2 mb-4 w-[110%] ml-[-3%]">
                    <div class="w-full h-full flex items-center gap-4">
                        <LogoIvaj class="h-6"/>
                        <LogoDiputacioValencia class="h-6"/>
                        <LogoCocaCola class="h-6"/>
                        <LogoTuria class="h-7"/>
                    </div>
                </div>
            </div>

        </div>

        <div class="text-amarillo opacity-80 flex justify-center mt-[2rem]">
            Web Created by © Miopía
        </div>
    </footer>
    
</template>

<style scoped>
    .contenedor {
        grid-template-columns: 20% 20% 30%;
        grid-template-areas:
                "esclat contacto logos";
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    @media (max-width: 1200px){
        .contenedor {
            grid-template-columns: 45% 35%;
            grid-template-rows: 50% 50%;
            grid-template-areas:
                    "esclat contacto"
                    "logos logos";
            gap: 1rem;
        }
        .esclat {
            flex-direction: row;
        }
        .esclat .privacidad {
            flex-wrap: nowrap;
        }
        .contacto, .logos {
            width: 100%;
        }
    }

    @media (max-width: 1200px){
        
    }
    @media (max-width: 780px){
        .contenedor {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            gap: 2rem;
        }
        .esclat {
            flex-direction: column;
        }
        .contacto, .logos {
            width: 90%;
        }
    }
</style>