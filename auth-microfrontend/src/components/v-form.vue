<script lang="ts">
import { defineComponent, PropType } from 'vue';

import vButton from './v-button.vue';
import vHeading from './v-heading.vue';
import vInput from './v-input.vue';

import type { Data, Fields } from '../types';

export default defineComponent({
  name: 'vForm',
  components: {
    vHeading,
    vButton,
    vInput,
  },
  data(): Data {
    return {
      form: {},
    };
  },
  methods: {
    onClick(): void {
      this.$emit('submit', this.form);
    },
  },
  emits: ['submit'],
  props: {
    heading: {
      type: String,
    },
    fields: Array as PropType<Fields>,
    primaryButtonLabel: {
      type: String,
      required: true,
    },
    secondaryButtonLabel: String,
  },
});
</script>

<template>
  <div class="v-form">
    <v-heading>{{ heading }}</v-heading>
    <v-input
      v-for="field in fields"
      :key="field.label"
      v-bind="field"
      v-model="form[field?.id]"
    />
    <v-button @click="onClick" :label="primaryButtonLabel" primary full-width />
    <span v-if="secondaryButtonLabel" class="v-form_link">{{
      secondaryButtonLabel
    }}</span>
  </div>
</template>

<style lang="scss">
.v-form {
  background: rgba(0, 0, 0, 0.03);
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 140px 80px 80px;
  min-height: 100vh;
  box-sizing: border-box;

  &_link {
    font-family: 'Montserrat';
    margin-top: 20px;
    align-self: center;
  }

  .v-button {
    margin-top: 30px;
  }
}

@media screen and (max-width: 1080px) {
  .v-form {
    width: 100%;
    padding: 40px;
    min-height: auto;
  }
}
</style>
