<template>
    <div class="game">
        <h2>Total <span>{{ totalClick }}</span></h2>
        <span>Total auto clicker : {{ autoClicker }}</span><br>
        <span>Price : {{ priceAutoClicker }} coins</span><br>
        <button @click="totalClick++">Add Soldier</button>
        <button @click="buyAuto()">Buy Auto Hire</button>
    </div>
</template>

<script setup lang="ts">

const totalClick = ref<number>(0);
const autoClicker = ref<number>(0);
const priceAutoClicker = ref<number>(5);

let interval: string | number | NodeJS.Timeout | undefined;

const buyAuto = () => {
    if (totalClick.value >= priceAutoClicker.value) {
        totalClick.value -= priceAutoClicker.value;
        priceAutoClicker.value += 10;
        autoClicker.value++;
    }
}

onMounted(() => {
    interval = window.setInterval(() => {
        totalClick.value += autoClicker.value;
    }, 1000)
})

onUnmounted(() => {
    clearInterval(interval);
})

</script>

<style scoped>
    div.game {
        border: solid black 2px;
        margin-left: auto;
        margin-right: auto;
        max-width: 50%;
        text-align: center;
        background-color: white;
        border-radius: 10px;
        background-color: whitesmoke;
    }

    h2 {
        color: black;
    }

    h2 span {
        color: black
    }

    div.game button {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: black;
        color: white;
    }

    div.game button:hover {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: green;
        color: white;
        transition: 0.3s;
    }
</style>