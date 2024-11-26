<template>
    <button @click="x++">Click me!</button>
    <p>{{ x }}</p>
</template>

<script setup>
    const x = ref(0);
</script>

<style scoped>

</style>