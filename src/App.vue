<script>
import AppHeader from "@/components/AppHeader.vue";
import AppHeader2 from "@/components/AppHeader2.vue";

export default {
  components: {
    AppHeader,
    AppHeader2,
  },
};
</script>
<template>
  <div id="app">
    <router-view name="header" />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>