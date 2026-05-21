<script setup lang="ts">

  import type { ScrollAreaScrollbarProps } from "reka-ui"
  import type { HTMLAttributes } from "vue"
  import { reactiveOmit } from "@vueuse/core"
  import { ScrollAreaScrollbar, ScrollAreaThumb } from "reka-ui"
  import { cn } from "@/lib/utils"

  import { ref } from "vue"
//import { colorBarra } from "@/pages/invitades/Invitades.vue"

  const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes["class"] }>(), {
    orientation: "vertical",
  })

  const delegatedProps = reactiveOmit(props, "class")


  

</script>

<template>


<!-- 
TODO: Mirar como cambiar de color la scrollbar dependiendo de la pagina... hmm
-->

  <ScrollAreaScrollbar
    data-slot="scroll-area-scrollbar"
    v-bind="delegatedProps"
    :class="
      cn('flex touch-none p-px select-none',
         orientation === 'vertical'
           && 'h-full w-3 rounded-full bg-negro/25',
         orientation === 'horizontal'
           && 'h-2.5 flex-col border-t ',
         props.class)"
  >

    <ScrollAreaThumb
      data-slot="scroll-area-thumb"
      class="bg-negro relative flex-1 rounded-full"
    />
    
  </ScrollAreaScrollbar>

</template>

<style>
  
</style>
