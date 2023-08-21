<template>
  <div class="container1"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container1 {
  min-height: 100vh;
  max-height: auto;
  width: 100vw;
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  background: #f7f7f7;
}
</style>
