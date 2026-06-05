<script setup lang="ts">
    /**
    ** Para poder usar el plugin de cambio de idioma */
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n({useScope: 'global'});

    import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
    import Button from '@/components/ui/button/Button.vue';

    import { mostrarCuentaAtras } from '../Layout.vue';
    mostrarCuentaAtras.value = false;

    import { conciertos } from './actividades.ts';
    let concisViernes = conciertos.slice(0,3);
    let concisSabado = conciertos.slice(3,9);
    let concisDomingo = conciertos.slice(9,15);

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
            class="bg-azulclaro py-5 px-8 h-full
            max-[700px]:px-5">
            
            <div class="flex gap-5
            max-[700px]:flex-col">
<!-- 
                ?LADO IZQUIERDO    
                -->
                <div class="flex flex-col gap-3">
                    
                    <h1 class="font-bold min-[700px]:text-3xl max-[700px]:text-xl">1. {{ t('entradas.seleccion[0]') }}:</h1>
                        
                        <!-- ** DIV SELECCIÓN CONCIERTOS-->

                        <div class="bg-white/35 w-102 h-50 border-3 border-black mt-2
                        max-[700px]:w-full max-[700px]:h-full max-[700px]:text-sm max-[700px]:border-2">
                            <ScrollArea type="auto">
                                <div class="pt-2 pl-3 pb-2 flex border-b-2 border-black/20">
                                    <div class="w-[20%]">
                                        <p class="text-sm">{{ t('dias[0]') }}</p>
                                        <p class="text-lg -mt-1">23</p>
                                    </div>

                                    <div class="flex flex-col ml-3">
                                        <label class="cyberpunk-checkbox-label" v-for="artista in concisViernes">
                                            <input type="checkbox" class="cyberpunk-checkbox">
                                            {{ artista.artista }} - {{ artista.hora }}
                                        </label>
                                    </div>
                                </div>

                                <div class="p-2 pl-3 flex border-b-2 border-black/20">
                                    <div  class="w-[20%]">
                                        <p class="text-sm">{{ t('dias[1]') }}</p>
                                        <p class="text-lg -mt-1">24</p>
                                    </div>

                                    <div class="flex flex-col ml-3">
                                        <label class="cyberpunk-checkbox-label" v-for="artista in concisSabado">
                                            <input type="checkbox" class="cyberpunk-checkbox">
                                            {{ artista.artista }} - {{ artista.hora }}
                                        </label>
                                    </div>
                                </div>

                                <div class="p-2 pl-3 flex border-b-2 border-black/20">
                                    <div class="w-[20%]">
                                        <p class="text-sm">{{ t('dias[2]') }}</p>
                                        <p class="text-lg -mt-1">25</p>
                                    </div>

                                    <div class="flex flex-col ml-3">
                                        <label class="cyberpunk-checkbox-label" v-for="artista in concisDomingo">
                                            <input type="checkbox" class="cyberpunk-checkbox">
                                            {{ artista.artista }} - {{ artista.hora }}
                                        </label>
                                    </div>
                                </div>
                            </ScrollArea>

                        </div>

                        <!-- ** FIN div conciertos -->

                        <div class="w-102 max-[700px]:w-60">
                            <h1 class=" font-black text-xs">{{ t('entradas.menores[0]') }}:</h1>
                            <div class="text-[11px]/3 pt-1">
                                <p>{{ t('entradas.menores[1]') }} <span class="font-black">{{ t('entradas.menores[2]') }}</span> {{ t('entradas.menores[3]') }} <span class="font-black">{{ t('entradas.menores[4]') }}</span> {{ t('entradas.menores[5]') }}.</p>
                            
                                <p class="underline underline-offset-3 pl-5 py-2 cursor-pointer">Autorizacion_Menores16.pdf</p>
                            
                                <p>{{ t('entradas.menores[6]') }} <span class="font-black">{{ t('entradas.menores[7]') }}</span> {{ t('entradas.menores[8]') }} <span class="font-black">{{ t('entradas.menores[9]') }}</span> {{ t('entradas.menores[10]') }}.</p>
                                
                                <p class="pt-2"><span class="font-black">{{ t('entradas.menores[11]') }}</span> {{ t('entradas.menores[12]') }} <span class="font-black">{{ t('entradas.menores[13]') }}</span> {{ t('entradas.menores[14]') }} <span class="underline underline-offset-2 font-black cursor-pointer" @click="$router.push('/info')">{{ t('entradas.menores[15]') }}</span>.</p>
                            </div>
                        </div>

                </div>

                <!-- 
                ?LADO DERECHO    
                -->
                <form class="flex flex-col pl-5
                max-[700px]:pl-0">
                    <h1 class="font-bold min-[700px]:text-3xl max-[700px]:text-xl">2. {{ t('entradas.datos[0]') }}:</h1>

                    <div class="text-sm pl-5
                    max-[700px]:pl-0">
                        <div class="datos flex-1">
                            <div class="textInputWrapper mt-3">
                                <label for="nombre"></label>
                                <input id="nombre" :placeholder="$t('entradas.datos[1]')" type="text" class="textInput" required> </input>
                            </div>
                        </div>
                        
                        <div class="datos flex-3">
                            <div class="textInputWrapper mt-3">
                                <label for="email"></label>
                                <input id="email" :placeholder="$t('entradas.datos[2]')" type="text" class="textInput" required>
                            </div>
                        </div>

                        <div class="flex flex-row justify-between mt-3 max-[700px]:flex-col">
                            <div class="datos flex-2 ">
                                <div class="textInputWrapper">
                                    <label for="fechaNacimiento"></label>
                                    <input id="fechaNacimiento" :placeholder="$t('entradas.datos[3]')" type="text" class="textInput" required>
                                </div>
                            </div>

                            <div class="datos flex-1 max-[700px]:mt-3">
                                <div class="textInputWrapper w-30 max-[700px]:w-full">
                                    <label for="dni"></label>
                                    <input id="dni" placeholder="DNI" type="text" class="textInput" required>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <h1 class="font-bold mt-15
                    max-[700px]:mt-5
                    min-[700px]:text-3xl max-[700px]:text-xl">3. {{ t('entradas.confirma[0]') }}:</h1>
                    
                    <label class="cyberpunk-checkbox-label mt-2 ">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[1]') }}.</p>
                    </label>


                    <label class="cyberpunk-checkbox-label mt-2">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[2]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas.confirma[3]') }}</span>.</p>
                    </label>

                    <label class="cyberpunk-checkbox-label mt-2">
                        <input type="checkbox" class="cyberpunk-checkbox" required>
                        <p class="text-sm">{{ t('entradas.confirma[4]') }} <span class="underline underline-offset-2 cursor-pointer" @click="$router.push('/info')">{{ t('entradas.confirma[5]') }}</span>.</p>
                    </label>
                
                    <div class="flex justify-end mt-6">
                        <Button class="bg-(--color-negro) rounded-none text-md text-(--color-azulclaro) font-black w-30 cursor-pointer active:scale-90">
                            {{ t('entradas.confirma[6]') }}
                        </Button>
                    </div>


                </form>
            </div>
                
                
            <div class="flex flex-col text-sm mt-9 max-[700px]:gap-1">
                <p>{{ t('entradas.aviso[0]') }} <span class="font-black">{{ t('entradas.aviso[1]') }}</span>.</p>
                <p class="text-xs/3">{{ t('entradas.aviso[2]')}}</p>
            </div>

        </div>

    </div>

</template>

<style scoped>

    @media (max-width: 700px){
        .main {
        background-image: url("/fondos/fondo04.jpg");
        background-size: 100%;
        background-position: cover;
        background-position: no-repeat;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-auto-rows: 9% height 14%;
        grid-template-areas:
            "vacio1 caja1"
            "contenido vacio3"
            "vacio4 caja3";
        }
    }

    @media (min-width: 700px){
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