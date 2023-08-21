<template>
  <div class="container1"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container1 {
  height: 100vh;
  width: 100vw;
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  border: 1px solid;
}
</style>
