<script setup lang="ts">
    /**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    } from '@/components/ui/tabs'

    import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';

</script>

<template>

    <div class="main">
        
        <div style="grid-area: vacio1"></div>
        <div style="grid-area: vacio2"></div>
        <div style="grid-area: vacio3"></div>
        <div style="grid-area: vacio4"></div>
        <div style="grid-area: vacio5"></div>

        <div style="grid-area: caja1" class="bg-rojo"></div>
        <div style="grid-area: caja2" class="bg-azuloscuro"></div>
        <div style="grid-area: caja3" class="bg-amarillo"></div>

        <div style="grid-area: contenido"
            class="bg-azulclaro pb-5 px-5 h-full flex flex-row gap-5">
            
            <div class="flex flex-row justify-between my-5 mx-3 w-5xl">
                <!-- 
                ?LADO IZQUIERDO    
                -->
                <div class="flex flex-col">
                    <h1 class="text-3xl font-bold">1. {{ t('entradas_seleccion[0]') }}:</h1>

                    <div class="flex mt-4">
                        <div>
                            <h1 class="font-bold text-2xl">{{ t('entradas_seleccion[1]') }}</h1>
                            
                            <div class="bg-white/35 w-70 h-75 border-3 border-black mt-2">
                                <ScrollArea type="always">
                                    <div class="pt-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Viernes</p>
                                            <p class="text-lg -mt-1">23</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Rita Payés - 18:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Samantha Margret - 19:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Papá Topo - 22:00
                                            </label>
                                        </div>           
                                    </div>

                                    <div class="p-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Sábado</p>
                                            <p class="text-lg -mt-1">24</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Emil et il - 17:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Sandra Monfort - 18:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Abril - 19:30
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Lisasinson - 20:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Au d'astí - 22:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Petunias - 00:00
                                            </label>
                                        </div>           
                                    </div>

                                    <div class="p-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Domingo</p>
                                            <p class="text-lg -mt-1">25</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Ixeya - 17:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Mimosas - 18:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Tronkas - 19:30
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Ojete Calor - 20:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Svetlana - 22:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Delilah Bon - 00:00
                                            </label>
                                        </div>           
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>

                        <div class="ml-4">
                            <h1 class="font-bold text-2xl">{{ t('entradas_seleccion[2]') }}</h1>
                            
                            <div class="bg-white/35 w-70 h-75 border-3 border-black mt-2">
                                <ScrollArea type="always" >
                                    <div class="pt-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Viernes</p>
                                            <p class="text-lg -mt-1">23</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Rita Payés - 18:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Samantha Margret - 19:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Papá Topo - 22:00
                                            </label>
                                        </div>           
                                    </div>

                                    <div class="p-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Sábado</p>
                                            <p class="text-lg -mt-1">24</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Emil et il - 17:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Sandra Monfort - 18:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Abril - 19:30
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Lisasinson - 20:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Au d'astí - 22:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Petunias - 00:00
                                            </label>
                                        </div>           
                                    </div>

                                    <div class="p-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">Domingo</p>
                                            <p class="text-lg -mt-1">25</p>
                                        </div>

                                        <div class="flex flex-col ml-3">
                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Ixeya - 17:00
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Mimosas - 18:15
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Tronkas - 19:30
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Ojete Calor - 20:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Svetlana - 22:45
                                            </label>

                                            <label class="cyberpunk-checkbox-label">
                                                <input type="checkbox" class="cyberpunk-checkbox">
                                                Delilah Bon - 00:00
                                            </label>
                                        </div>           
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex py-3 w-xl">
                            <p class="font-black text-7xl">!</p>

                            <div class="pl-5 pt-1 flex flex-col justify-between">
                                <p>{{ t('entradas_aviso[0]') }} <span class="font-black">{{ t('entradas_aviso[1]') }}</span>.</p>

                                <p class="text-sm/4 pb-1">{{ t('entradas_aviso[2]')}}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- 
                ?LADO DERECHO    
                -->
                <div class="flex flex-col ml-5">
                    <h1 class="text-3xl font-bold">2. {{ t('entradas_datos[0]') }}:</h1>

                    <div class="text-sm pl-5">
                        <div class="datos flex-1">
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Name" required=true>
                                <label for="name" class="form__label">{{ t('entradas_datos[1]') }}</label>
                            </div>
                        </div>

                        <div class="datos flex-2">
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Apellidos" required=true>
                                <label for="apellidos" class="form__label">{{ t('entradas_datos[2]') }}</label>
                            </div>
                        </div>
                        
                        <div class="datos flex-3">
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Correo" required=true>
                                <label for="email" class="form__label">{{ t('entradas_datos[3]') }}</label>
                            </div>
                        </div>
                        

                        <div class="flex flex-row justify-between">
                            <div class="datos flex-2">
                                <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Apellidos" required=true>
                                    <label for="cumple" class="form__label">{{ t('entradas_datos[4]') }}</label>
                                </div>
                            </div>

                            <div class="datos flex-1">
                                <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Apellidos" required=true>
                                    <label for="dni" class="form__label">DNI</label>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div class="pl-5 pt-3 pb-5">
                        <h1 class=" font-black text-lg">{{ t('entradas_menores[0]') }}:</h1>
                        <div class="text-sm/4 pt-1">
                            <p>{{ t('entradas_menores[1]') }} <span class="font-black">{{ t('entradas_menores[2]') }}</span> {{ t('entradas_menores[3]') }} <span class="font-black">{{ t('entradas_menores[4]') }}</span> {{ t('entradas_menores[5]') }}.</p>
                        
                            <p class="underline underline-offset-3 pl-5 py-2 cursor-pointer">Autorizacion_Menores16.pdf</p>
                        
                            <p>{{ t('entradas_menores[6]') }} <span class="font-black">{{ t('entradas_menores[7]') }}</span> {{ t('entradas_menores[8]') }} <span class="font-black">{{ t('entradas_menores[9]') }}</span> {{ t('entradas_menores[10]') }}.</p>
                            
                            <p class="pt-2"><span class="font-black">{{ t('entradas_menores[11]') }}</span> {{ t('entradas_menores[12]') }} <span class="font-black">{{ t('entradas_menores[13]') }}</span> {{ t('entradas_menores[14]') }} <span class="underline underline-offset-2 font-black cursor-pointer" @click="$router.push('/info')">{{ t('entradas_menores[15]') }}</span>.</p>
                        </div>
                    </div>

                    <h1 class="text-3xl font-bold">3. {{ t('entradas_confirma[0]') }}:</h1>

                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox">
                        <p class="text-sm">{{ t('entradas_confirma[1]') }}.</p>
                    </label>


                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox">
                        <p class="text-sm">{{ t('entradas_confirma[2]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas_confirma[3]') }}</span>.</p>
                    </label>

                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox">
                        <p class="text-sm">{{ t('entradas_confirma[4]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas_confirma[5]') }}</span>.</p>
                    </label>
                </div>
                
            </div>
                

            


        </div>

    </div>

</template>

<style scoped>

    .main {
        background-image: url("/home/fondoHome01.jpg");
        background-position: cover;
        background-position: no-repeat;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: 66% 24% 10%;
        grid-template-rows: 8% 84% 8%;
        grid-template-areas:
            "vacio1 caja1 vacio2"
            "contenido vacio3 caja2"
            "vacio4 caja3 vacio5";
    }

    .form__group {
        position: relative;
        padding: 15px 0 0;
        width: 100%;
        max-width: 180px;
    }

    .form__field {
        width: 100%;
        border: none;
        border-bottom: 2px solid #000;
        outline: 0;
        font-size: 1rem;
        color: #000;
        padding: 0.2rem 0;
        background: transparent;
        transition: border-color 400ms;
    }

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  cursor: text;
  top: 25px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 200ms;
  color: rgba(0,0,0,0.5);
  pointer-events: none;
}

.form__field:focus {
  padding-bottom: 0.2rem;
  padding-left: 6px;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--color-);
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}

.cyberpunk-checkbox {
  appearance: none;
  aspect-ratio: 1 / 1;
  width: 15px;
  height: 15px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 5px;
  cursor: pointer;
}

.cyberpunk-checkbox:before {
  content: "";
  background-color: #000;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 7px;
  height: 7px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.cyberpunk-checkbox:checked:before {
  transform: translate(-50%, -50%) scale(1);
}

.cyberpunk-checkbox-label {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}

</style>