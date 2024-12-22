<template>
    <div class="clicker">
        <h2>Total <span>{{ totalClick }}</span></h2>
        <span>Total auto clicker : {{ autoClicker }}</span><br>
        <span>Price : {{ priceAutoClicker }} coins</span><br>
        <button @click="totalClick++">Add Soldier</button>
        <button @click="buyAuto()">Buy Auto Hire</button>

        <div class="soldier">
            <h2>Soldiers</h2>
            <span>Soldiers: {{ totalSoldier }}</span>
            <canvas id="game" class="ui"></canvas>
        </div>
    </div>
    
</template>

<script setup lang="ts">

const totalClick = ref<number>(0);
const autoClicker = ref<number>(0);
const priceAutoClicker = ref<number>(5);

const totalSoldier = ref<number>(0);

let vueCanvas: any = ref<any>(null);

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
    var c = <HTMLCanvasElement> document.getElementById("game");
    vueCanvas = c.getContext("2d");
    console.log(vueCanvas);
})

class Soldier {
    positionX: number;
    positionY: number;

    constructor() {
        totalSoldier.value++;
        this.positionX = 0;
        this.positionY = 0;
        vueCanvas.drawImage("/img/knight.png", this.positionX, this.positionY);
    }

    moveToPosition(x: number, y: number) {
        if (this.positionX < x) {
            this.positionX += 1;
        }
        else if (this.positionX > x) {
            this.positionX -= 1;
        }

        if(this.positionY < y) {
            this.positionY += 1;
        }
        else if(this.positionY > y) {
            this.positionY -= 1;
        }
    }
}

</script>

<style scoped>
    div.clicker {
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

    div.clicker button {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: black;
        color: white;
    }

    div.clicker button:hover {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: green;
        color: white;
        transition: 0.3s;
    }

    canvas.ui {
        width: 400px;
        border: solid black 2px;
        height: 400px;
        /* margin-left: auto;
        margin-right: auto; */
        margin-bottom: 20px;
    }
</style>