<template>
    <div class="game">
        <h2>Total <span>{{ totalClick }}</span></h2>
        <span>Total auto clicker : {{ autoClicker }}</span><br>
        <button @click="totalClick++">Add Soldier</button>
        <button @click="buyAuto()">Buy Auto Hire</button>
    </div>
</template>

<script setup>
    const totalClick = ref(0);
    const autoClicker = ref(0);
    const priceAutoClicker = ref(5);

    function buyAuto() {
        if (totalClick >= priceAutoClicker) {
            totalClick -= priceAutoClicker;
            priceAutoClicker += 10;
        }
    }

    async function autoClick() {
        while(true){
            timer = setInterval(() => {
                totalClick += autoClick;
            }, 1000)
        }
    }

    onMounted(() => {
        autoClick();
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
    }
</style>