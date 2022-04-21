<script lang="ts">
import { defineComponent } from 'vue';

import Authentification from '../templates/authentification.vue';

import {
  EMAIL_FIELD_COPY,
  PASSWORD_FIELD_COPY,
  LOGIN_VIEW_COPY,
} from '../utils/copy';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      formData: {
        heading: LOGIN_VIEW_COPY.HEADING,
        fields: [
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
        primaryButtonLabel: LOGIN_VIEW_COPY.FORM_ACTION,
        secondaryButtonLabel: LOGIN_VIEW_COPY.FORM_UTILITY,
      },
      callToActionData: {
        heading: LOGIN_VIEW_COPY.CTA_HEADING,
        buttonLabel: LOGIN_VIEW_COPY.CTA_LABEL,
      },
    };
  },

  methods: {
    onClick() {
      this.$router.push(this.$routes.REGISTER_ROUTE);
    },

    async onSubmit(form: Event): Promise<void> {
      await fetch(`${process.env.VUE_APP_API_URL}/session`, {
        method: 'GET',
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
  />
</template>
