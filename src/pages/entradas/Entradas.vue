<script setup lang="ts">
    /**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
    import Button from '@/components/ui/button/Button.vue';

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;


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
                    <h1 class="text-3xl font-bold">1. {{ t('entradas.seleccion[0]') }}:</h1>

                    <div class="flex mt-4">
                        <div>
                            <h1 class="font-bold text-2xl">{{ t('entradas.seleccion[1]') }}</h1>
                            
                            <div class="bg-white/35 w-70 h-80 border-3 border-black mt-2">
                                <ScrollArea type="always">
                                    <div class="pt-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                        <div class="w-14">
                                            <p class="text-sm">{{ t('entradas.dias[0]') }}</p>
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
                                            <p class="text-sm">{{ t('entradas.dias[1]') }}</p>
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
                                            <p class="text-sm">{{ t('entradas.dias[2]') }}</p>
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
                            <h1 class="font-bold text-2xl">{{ t('entradas.seleccion[2]') }}</h1>
                            
                            <div class="bg-white/35 w-70 h-80 border-3 border-black mt-2">
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
                                <p>{{ t('entradas.aviso[0]') }} <span class="font-black">{{ t('entradas.aviso[1]') }}</span>.</p>

                                <p class="text-sm/4 pb-1">{{ t('entradas.aviso[2]')}}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- 
                ?LADO DERECHO    
                -->
                <form class="flex flex-col ml-7">
                    <h1 class="text-3xl font-bold">2. {{ t('entradas.datos[0]') }}:</h1>

                    <div class="text-sm pl-5">
                        <div class="datos flex-1">
                            <div class="textInputWrapper mt-1">
                                <label for="nombre"></label>
                                <input id="nombre" :placeholder="$t('entradas.datos[1]')" type="text" class="textInput" required> </input>
                            </div>
                        </div>
                        
                        <div class="datos flex-3">
                            <div class="textInputWrapper mt-1">
                                <label for="email"></label>
                                <input id="email" :placeholder="$t('entradas.datos[2]')" type="text" class="textInput" required>
                            </div>
                        </div>
                        

                        <div class="flex flex-row justify-between">
                            <div class="datos flex-2 ">
                                <div class="textInputWrapper mr-5 mt-1">
                                    <label for="fechaNacimiento"></label>
                                    <input id="fechaNacimiento" :placeholder="$t('entradas.datos[3]')" type="text" class="textInput" required>
                                </div>
                            </div>

                            <div class="datos flex-1">
                                <div class="textInputWrapper w-30 mt-1">
                                    <label for="dni"></label>
                                    <input id="dni" placeholder="DNI" type="text" class="textInput" required>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div class="pl-5 pt-3 pb-5">
                        <h1 class=" font-black text-lg">{{ t('entradas.menores[0]') }}:</h1>
                        <div class="text-sm/4 pt-1">
                            <p>{{ t('entradas.menores[1]') }} <span class="font-black">{{ t('entradas.menores[2]') }}</span> {{ t('entradas.menores[3]') }} <span class="font-black">{{ t('entradas.menores[4]') }}</span> {{ t('entradas.menores[5]') }}.</p>
                        
                            <p class="underline underline-offset-3 pl-5 py-2 cursor-pointer">Autorizacion_Menores16.pdf</p>
                        
                            <p>{{ t('entradas.menores[6]') }} <span class="font-black">{{ t('entradas.menores[7]') }}</span> {{ t('entradas.menores[8]') }} <span class="font-black">{{ t('entradas.menores[9]') }}</span> {{ t('entradas.menores[10]') }}.</p>
                            
                            <p class="pt-2"><span class="font-black">{{ t('entradas.menores[11]') }}</span> {{ t('entradas.menores[12]') }} <span class="font-black">{{ t('entradas.menores[13]') }}</span> {{ t('entradas.menores[14]') }} <span class="underline underline-offset-2 font-black cursor-pointer" @click="$router.push('/info')">{{ t('entradas.menores[15]') }}</span>.</p>
                        </div>
                    </div>

                    <h1 class="text-3xl font-bold">3. {{ t('entradas.confirma[0]') }}:</h1>

                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[1]') }}.</p>
                    </label>


                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[2]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas.confirma[3]') }}</span>.</p>
                    </label>

                    <label class="cyberpunk-checkbox-label">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[4]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas.confirma[5]') }}</span>.</p>
                    </label>
                
                    <div class="flex justify-end mt-3">
                        <Button class="bg-(--color-negro) rounded-none text-md text-(--color-azulclaro) font-black w-30 cursor-pointer active:scale-90">
                            {{ t('entradas.confirma[6]') }}
                        </Button>
                    </div>


                </form>
                
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
        grid-template-rows: 4% 92% 4%;
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

.textInputWrapper {
  position: relative;
  
  --accent-color: #000;
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:before,
.textInputWrapper:after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:after {
  content: "";
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInput::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(0, 0, 0, 0.582);
}

.textInputWrapper .textInput {
 max-height: 36px;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  padding-left: 3px;
  padding-top: 5px;

  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
}

.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  outline: none;
}

.textInputWrapper:focus-within .textInput,
.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  background-color: rgba(255, 255, 255, 0.35);
}

.textInputWrapper:focus-within .textInput::placeholder {
  opacity: 0;
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