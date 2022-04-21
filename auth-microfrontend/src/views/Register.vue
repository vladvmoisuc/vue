<script lang="ts">
import { defineComponent } from 'vue';

import Authentification from '../templates/authentification.vue';

import {
  EMAIL_FIELD_COPY,
  PASSWORD_FIELD_COPY,
  NAME_FIELD_COPY,
  REGISTER_VIEW_COPY,
} from '../utils/copy';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      REGISTER_VIEW_COPY,
      formData: {
        heading: REGISTER_VIEW_COPY.HEADING,
        fields: [
          {
            label: NAME_FIELD_COPY.LABEL,
            type: NAME_FIELD_COPY.TYPE,
            id: NAME_FIELD_COPY.TYPE,
          },
          {
            label: EMAIL_FIELD_COPY.LABEL,
            type: EMAIL_FIELD_COPY.TYPE,
            id: EMAIL_FIELD_COPY.TYPE,
          },
          {
            label: PASSWORD_FIELD_COPY.LABEL,
            type: PASSWORD_FIELD_COPY.TYPE,
            id: PASSWORD_FIELD_COPY.TYPE,
          },
        ],
        primaryButtonLabel: REGISTER_VIEW_COPY.FORM_ACTION,
        secondaryButtonLabel: REGISTER_VIEW_COPY.FORM_UTILITY,
      },
      callToActionData: {
        heading: REGISTER_VIEW_COPY.CTA_HEADING,
        buttonLabel: REGISTER_VIEW_COPY.CTA_LABEL,
      },
    };
  },

  methods: {
    onClick() {
      this.$router.push(this.$routes.LOGIN_ROUTE);
    },

    async onSubmit(form: Event): Promise<void> {
      await fetch(`${process.env.VUE_APP_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
    },
  },

  components: { Authentification },
});
</script>

<template>
  <authentification
    :formData="formData"
    :callToActionData="callToActionData"
    @button-click="onClick"
    @submit="onSubmit"
  >
    <template #header>{{ REGISTER_VIEW_COPY?.NOTIFICATION }}</template>
  </authentification>
</template>
