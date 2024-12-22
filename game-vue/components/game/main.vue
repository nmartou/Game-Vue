<template>
    <div class="clicker">
        <h2>Total <span>{{ totalClick }}</span></h2>
        <span>Total auto clicker : {{ autoClicker }}</span><br>
        <span>Price : {{ priceAutoClicker }} coins</span><br>
        <button @click="totalClick++">Add Soldier</button>
        <button @click="buyAuto()">Buy Auto Hire</button>

        <div class="soldier">
            <h2>Soldiers</h2>
            <span>Soldiers: {{ totalSoldier }}</span><br>
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
    Soldier.soldiers.push(new Soldier());
}

onMounted(() => {
    var c = <HTMLCanvasElement> document.getElementById("game");
    vueCanvas = c.getContext("2d");
    interval = window.setInterval(() => {
        totalClick.value += autoClicker.value;
    }, 1000)
})

onUnmounted(() => {
    clearInterval(interval);
})

class Soldier {
    static idSolder: number = 0;
    static soldiers: Array<Soldier> = [];
    positionX: number;
    positionY: number;
    sizeX: number;
    sizeY: number;
    targetPosition: Array<number>;
    image: any;
    id: number;

    constructor(sizeX: number = 20, sizeY: number = 12) {
        this.id = Soldier.idSolder;
        Soldier.idSolder++;
        totalSoldier.value++;
        this.positionX = 30;
        this.positionY = 30;
        this.image = new Image();
        this.image.src = "/img/knight.png";
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.targetPosition = [250, 0];
        this.image.onload = () => {
            if (Soldier.idSolder > 1) {
                if(Soldier.soldiers[this.id - 1].targetPosition[0] - sizeX < 0) {
                    this.targetPosition = [this.targetPosition[0], Soldier.soldiers[this.id - 1].targetPosition[1] + sizeY]; 
                }
                else this.targetPosition = [Soldier.soldiers[this.id - 1].targetPosition[0] - sizeX, Soldier.soldiers[this.id - 1].targetPosition[1]]; 
            }
            this.draw();
        }
        this.image.onerror = () => {
            console.error("Failed to load image.");
        };
    }

    draw() {
        const animate = () => {
            vueCanvas.clearRect(this.positionX, this.positionY, this.sizeX, this.sizeY); // Clear the entire canvas
            vueCanvas.drawImage(this.image, this.positionX, this.positionY, this.sizeX, this.sizeY);
            // Move the soldier toward the target
            if (this.positionX !== this.targetPosition[0] || this.positionY !== this.targetPosition[1]) {
                this.moveToPosition(this.targetPosition[0], this.targetPosition[1]);
                requestAnimationFrame(animate); // Schedule the next frame
            }
        };

        animate();
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