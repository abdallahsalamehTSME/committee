<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Container from "./components/Container.vue";
import Navigation from "./components/Navigation.vue";
import FormsContainer from "./components/FormsContainer.vue";
</script>

<template>
  <RouterView>
    <Container>
      <Navigation></Navigation>
      <FormsContainer></FormsContainer>
    </Container>
  </RouterView>
</template>

<style scoped></style>
