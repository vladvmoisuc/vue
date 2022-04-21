<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vButton',
  props: {
    label: {
      required: true,
      type: String,
    },
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: true,
    },
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'v-button__primary': this.primary,
        'v-button__full-width': this.fullWidth,
        'v-button__light': this.light,
      };
    },
  },
});
</script>

<template>
  <button class="v-button" :class="classes">
    {{ label }}
  </button>
</template>

<style lang="scss">
.v-button {
  border: 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  height: 70px;
  cursor: pointer;
  width: 350px;

  &__primary {
    background: #fff507;
  }

  &__light {
    background: white;
    color: black;
  }

  &__full-width {
    width: 100%;
  }
}
</style>
