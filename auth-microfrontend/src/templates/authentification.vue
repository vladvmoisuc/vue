<script lang="ts">
import { defineComponent, PropType } from 'vue';

import vForm from '../components/v-form.vue';
import vHero from '../components/v-hero.vue';
import vCallToAction from '../components/v-call-to-action.vue';

import type { FormData, CallToActionData } from '../types';

export default defineComponent({
  name: 'Authentification',
  components: {
    vForm,
    vHero,
    vCallToAction,
  },
  events: ['submit', 'click'],
  props: {
    formData: {
      type: Object as PropType<FormData>,
      required: true,
    },
    callToActionData: {
      type: Object as PropType<CallToActionData>,
      required: true,
    },
  },
  methods: {
    onSubmit(form: Event): void {
      this.$emit('submit', form);
    },
    onClick(): void {
      this.$emit('button-click');
    },
  },
});
</script>

<template>
  <div class="authentification">
    <div class="authentification__header">
      <slot name="header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </slot>
    </div>
    <div class="authentification__body">
      <v-form v-bind="formData" @submit="onSubmit" />
      <v-hero>
        <v-call-to-action v-bind="callToActionData" @button-click="onClick" />
      </v-hero>
    </div>
  </div>
</template>

<style lang="scss">
.authentification {
  min-height: 100vh;
  position: relative;

  &__header {
    height: 20px;
    background: lightseagreen;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Roboto';
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    align-items: center;
  }

  &__body {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 1080px) {
  .authentification__body {
    flex-direction: column;
  }
}
</style>
