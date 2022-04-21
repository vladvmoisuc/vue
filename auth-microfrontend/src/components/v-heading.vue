<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'vHeading',
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  render() {
    return h(
      `h${this.level}`,
      {
        class: 'v-heading',
      },
      this.$slots.default?.(),
    );
  },
});
</script>

<style lang="scss">
.v-heading {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 42px;
}
</style>
