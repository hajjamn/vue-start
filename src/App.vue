<script>
import { store } from './store.js';
import AppHeader from './layout/AppHeader.vue';
import AppContent from './layout/AppContent.vue';
import AppFooter from './layout/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooter />
</template>

<style lang="scss">
@use './assets/style/general.scss';
</style>
