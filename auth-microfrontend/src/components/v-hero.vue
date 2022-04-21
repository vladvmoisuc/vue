<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vHeroImage',
});
</script>

<template>
  <div class="v-hero">
    <slot />
  </div>
</template>

<style lang="scss">
.v-hero {
  width: 60%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.81) 100%
    ),
    url('https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  height: 90vh;
  margin-left: -50px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));

  align-items: center;
}

@media screen and (max-width: 1080px) {
  .v-hero {
    width: 100%;
    margin-left: 0;
    padding: 50px;
    box-sizing: border-box;
  }
}
</style>
