<script setup lang="ts">
import type { WithClassAsProps } from "./interface"
import type { ButtonVariants } from '@/components/ui/button'
import { CircleChevronLeft } from "@lucide/vue"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { useCarousel } from "./useCarousel"

const props = withDefaults(defineProps<{
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
}
& WithClassAsProps>(), {
  variant: "outline",
  size: "icon",
})

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :disabled="!canScrollPrev"
    :class="cn(
      'absolute size-12 rounded-full cursor-pointer bg-black text-amarillo hover:bg-amarillo hover:text-black',
      orientation === 'horizontal'
        ? 'top-1/2 -left-25 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <CircleChevronLeft class="size-15 "/>
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
