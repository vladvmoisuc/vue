<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vInput',
  computed: {
    value: {
      get(): string {
        return this.modelValue;
      },

      set(value: string) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
});
</script>

<template>
  <div class="v-input" :class="`v-input__${id}`">
    <label class="v-input_label" :for="id">{{ label }}</label>
    <input v-model="value" class="v-input_field" :type="type" :id="id" />
  </div>
</template>

<style lang="scss">
.v-input {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 25px;

  &__email::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 35px;
    border-radius: 100%;
    border: 5px solid black;
  }

  &__text::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 35px;
    border: 5px solid black;
    transform: rotate(45deg);
  }

  &__password::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 35px;
    background: url('../assets/key.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  &_label {
    font-family: 'Montserrat';
    font-size: 14px;
    margin-bottom: 10px;
  }

  &_field {
    border: none;
    border-bottom: 5px solid black;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    padding: 5px 5px 10px 30px;
    outline: none;
    background: transparent;
  }
}
</style>
