<script lang="ts">
import { defineComponent } from 'vue';

import vButton from './v-button.vue';

export default defineComponent({
  name: 'vCallToAction',
  components: {
    vButton,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
  },
  events: ['button-click'],
  methods: {
    onClick(): void {
      this.$emit('button-click');
    },
  },
});
</script>

<template>
  <div class="v-call-to-action">
    <h4 class="v-call-to-action_heading">{{ heading }}</h4>
    <v-button
      @click="onClick"
      :label="buttonLabel"
      :light="true"
      :full-width="false"
    />
  </div>
</template>

<style lang="scss">
.v-call-to-action {
  display: flex;
  align-items: center;
  flex-direction: column;

  &_heading {
    color: white;
    font-size: 26px;
    font-family: 'Montserrat';
    margin-bottom: 20px;
  }
}
</style>
