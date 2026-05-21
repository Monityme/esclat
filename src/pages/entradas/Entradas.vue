<script setup lang="ts">

    import {
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    } from '@/components/ui/tabs'

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
            

            <Tabs default-value="conciertos" class="flex-1">

                <TabsList>

                    <TabsTrigger value="conciertos" class="">
                        <span>CONCIERTOS</span>
                    </TabsTrigger>

                    <TabsTrigger value="talleres" class="">
                        <span>TALLERES</span>
                    </TabsTrigger>

                </TabsList>

                <!-- TODO - Meter datos en main.ts y agregarlos con v-for -->

                <TabsContent value="conciertos">
                    
                    Contenido conciertos

                </TabsContent>

                <TabsContent value="talleres">

                    Contenido talleres

                </TabsContent>

            </Tabs>

            <div class="datos flex-1 mt-5">
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Name" required=true>
                    <label for="name" class="form__label">Nombre</label>
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
        grid-template-rows: 12% 63% 25%;
        grid-template-areas:
            "vacio1 caja1 vacio2"
            "contenido vacio3 caja2"
            "vacio4 caja3 vacio5";
    }

    .form__group {
        position: relative;
        padding: 20px 0 0;
        width: 100%;
        max-width: 180px;
    }

    .form__field {
        width: 100%;
        border: none;
        border-bottom: 1px solid #000;
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
  top: 20px;
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

</style>