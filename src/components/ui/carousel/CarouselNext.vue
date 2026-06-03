<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import type { ButtonVariants } from '@/components/ui/button'
import { CircleChevronRight } from "@lucide/vue"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { useCarousel } from "./useCarousel"

const props = withDefaults(defineProps<{
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
}
& WithClassAsProps>(), {
  //variant: "outline",
  size: "icon",
})

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="cn(
      'absolute size-12 rounded-full cursor-pointer bg-black text-amarillo hover:bg-amarillo hover:text-black',
      orientation === 'horizontal'
        ? 'top-1/2 -right-25 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <CircleChevronRight class="size-15 "/>
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
