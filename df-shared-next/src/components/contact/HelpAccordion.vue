<template>
  <div class="fr-accordions-group">
    <section class="fr-accordion" v-for="e in elements" :key="e.id">
      <h3 class="fr-accordion__title">
        <button
          class="fr-accordion__btn fr-h3"
          @click="accordionClicked(e.tag)"
          aria-expanded="false"
          :aria-controls="e.id"
        >
          <RiArrowRightLine class="circle fr-p-1v" />{{ e.title }}
        </button>
      </h3>
      <div class="fr-collapse" :id="e.id">
        <p v-html="e.content"></p>
        <div class="fr-highlight">
          <p v-html="e.highlight"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RiArrowRightLine } from '@remixicon/vue'
import { AccordionHelpModel } from '../../models/AccordionHelpModel'

defineProps<{
  elements: AccordionHelpModel[]
}>()

const emit = defineEmits<{ 'accordion-clicked': [tag: string] }>()

function accordionClicked(tag: string) {
  emit('accordion-clicked', tag)
}
</script>

<style scoped lang="scss">
.fr-h3 {
  font-weight: 400 !important;
}
</style>
